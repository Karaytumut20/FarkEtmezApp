import { IconSymbol } from '@/components/ui/icon-symbol';
import { WizardButton } from '@/components/ui/WizardButton';
import { ItemType, MASTER_DATA, WIZARD_STEPS } from '@/constants/masterData';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import * as Haptics from 'expo-haptics';
import { useNavigation } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// ADMOB IMPORTLARI
import {
  AdEventType,
  BannerAd,
  BannerAdSize,
  InterstitialAd,
  TestIds
} from 'react-native-google-mobile-ads';

// --- REKLAM KİMLİKLERİ ---
const interstitialID = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-4816381866965413/9658718388';
const bannerID = __DEV__ ? TestIds.BANNER : 'ca-app-pub-4816381866965413/4142683731';

// Interstitial Reklamı Oluştur
const interstitial = InterstitialAd.createForAdRequest(interstitialID, {
  requestNonPersonalizedAdsOnly: true,
});

const BG_COLORS = {
  START: '#1A1A2E',
  FOOD: '#C0392B',
  ACTIVITY: '#2980B9',
  Result: '#27AE60'
};

export default function GeniusHomeScreen() {
  // --- NAVIGATION HOOK ---
  const navigation = useNavigation<BottomTabNavigationProp<any>>();

  // --- STATE ---
  const [currentStepId, setCurrentStepId] = useState<string>('START');
  const [filters, setFilters] = useState<string[]>([]); 
  const [isFinished, setIsFinished] = useState(false);
  const [finalChoice, setFinalChoice] = useState<ItemType | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  
  const [adLoaded, setAdLoaded] = useState(false);
  const [pendingFilters, setPendingFilters] = useState<string[] | null>(null);
  const [history, setHistory] = useState<string[]>([]); 

  // --- ANIMASYON DEĞERLERİ ---
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;

  // --- ADMOB LISTENER ---
  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      setAdLoaded(true);
    });

    const unsubscribeClosed = interstitial.addAdEventListener(AdEventType.CLOSED, () => {
      setAdLoaded(false);
      if (pendingFilters) {
        calculateResult(pendingFilters);
        setPendingFilters(null);
      }
      interstitial.load();
    });

    interstitial.load();

    return () => {
      unsubscribe();
      unsubscribeClosed();
    };
  }, [pendingFilters]);

  // --- FONKSİYONLAR ---
  const changeStep = (nextStepId: string, addedTag?: string) => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 0, duration: 200, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: -50, duration: 200, useNativeDriver: true })
    ]).start(() => {
      
      let newFilters = [...filters];
      if (addedTag) {
        newFilters = [...newFilters, addedTag];
        setFilters(newFilters);
      }

      if (nextStepId === 'FINISH') {
        if (adLoaded) {
          setPendingFilters(newFilters);
          interstitial.show();
        } else {
          calculateResult(newFilters);
        }
      } else {
        setCurrentStepId(nextStepId);
        slideAnim.setValue(50);
        Animated.parallel([
          Animated.timing(fadeAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
          Animated.spring(slideAnim, { toValue: 0, friction: 5, useNativeDriver: true })
        ]).start();
      }
    });
  };

  const calculateResult = (currentFilters: string[] = filters) => {
    slideAnim.setValue(50);
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
      Animated.spring(slideAnim, { toValue: 0, friction: 5, useNativeDriver: true })
    ]).start();

    setIsFinished(true);
    setIsCalculating(true);

    setTimeout(() => {
      const mainCategories = ['food', 'activity', 'game', 'watch'];
      const selectedCategory = currentFilters.find(f => mainCategories.includes(f));

      let candidates = selectedCategory 
        ? MASTER_DATA.filter(item => item.tags.includes(selectedCategory))
        : MASTER_DATA;

      const isSolo = currentFilters.includes('solo');
      const isGroup = currentFilters.includes('group');

      if (isSolo) {
        candidates = candidates.filter(item => !item.tags.includes('group') || item.tags.includes('solo'));
      } else if (isGroup) {
        candidates = candidates.filter(item => !item.tags.includes('solo') || item.tags.includes('group'));
      }

      const detailFilters = currentFilters.filter(f => 
        !mainCategories.includes(f) && !['solo', 'group'].includes(f)
      );

      if (detailFilters.length > 0) {
        candidates = candidates.filter(item => {
          if (selectedCategory === 'game') {
             const platformFilter = detailFilters.find(f => ['pc', 'console', 'mobile'].includes(f));
             if (platformFilter) {
                if (platformFilter === 'console') {
                    const isConsoleItem = item.tags.some(t => ['ps', 'xbox', 'nintendo', 'console'].includes(t));
                    if (!isConsoleItem) return false; 
                } else {
                    if (!item.tags.includes(platformFilter)) return false;
                }
             }
             const otherGameFilters = detailFilters.filter(f => !['pc', 'console', 'mobile'].includes(f));
             return otherGameFilters.every(tag => item.tags.includes(tag));
          }
          return detailFilters.every(filterTag => item.tags.includes(filterTag));
        });
      }

      const unshownCandidates = candidates.filter(item => !history.includes(item.id));
      if (unshownCandidates.length > 0) {
        candidates = unshownCandidates;
      } else if (candidates.length === 0) {
         candidates = selectedCategory 
            ? MASTER_DATA.filter(item => item.tags.includes(selectedCategory))
            : MASTER_DATA;
      }

      const winner = candidates[Math.floor(Math.random() * candidates.length)];

      if (winner) {
          setFinalChoice(winner);
          setHistory(prev => [...prev, winner.id]); 
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      } else {
          setFinalChoice(MASTER_DATA[0]);
      }
      
      setIsCalculating(false);
    }, 2000);
  };

  const resetApp = () => {
    if (currentStepId === 'START' && !isFinished) return;

    Animated.timing(fadeAnim, { toValue: 0, duration: 200, useNativeDriver: true }).start(() => {
        setFilters([]);
        setFinalChoice(null);
        setIsFinished(false);
        setIsCalculating(false);
        setCurrentStepId('START');
        
        slideAnim.setValue(50);
        Animated.parallel([
            Animated.timing(fadeAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
            Animated.spring(slideAnim, { toValue: 0, friction: 5, useNativeDriver: true })
        ]).start();
    });
  };

  // --- TAB PRESS LISTENER ---
  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e) => {
      resetApp();
    });

    return unsubscribe;
  }, [navigation, currentStepId, isFinished]);

  // --- RENDER HELPER ---
  const renderContent = () => {
    if (isCalculating) {
      return (
        <View style={styles.resultContainer}>
          <Text style={styles.calculatingTitle}>Analiz Yapılıyor...</Text>
          <Text style={styles.calculatingSubtitle}>En iyi seçenek seçiliyor...</Text>
          <View style={styles.loaderBox}>
            <Text style={{fontSize: 80}}>🧠</Text>
          </View>
        </View>
      );
    }

    if (isFinished && finalChoice) {
      return (
        <View style={styles.resultContainer}>
          <Text style={styles.winnerHeader}>SİZİN İÇİN SEÇTİM</Text>
          <View style={styles.winnerCard}>
            <Text style={styles.winnerIcon}>{finalChoice.icon}</Text>
            <Text style={styles.winnerTitle}>{finalChoice.title}</Text>
            <Text style={styles.winnerDesc}>{finalChoice.description}</Text>
            <View style={styles.tagsRow}>
              {finalChoice.tags.slice(0,3).map((t, i) => (
                <View key={i} style={styles.tagBadge}>
                  <Text style={styles.tagText}>#{t}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={{marginTop: 40}}>
            <WizardButton label="Beğenmedim, Başka Öner 🎲" onPress={() => calculateResult()} variant="secondary" />
            {/* "Baştan Başla" butonu burada hala var çünkü sonuç ekranında kullanıcı isteyebilir. 
                Ancak sihirbaz adımları içindeki "Başa Dön" linki kaldırıldı. */}
            <WizardButton label="Baştan Başla 🔄" onPress={resetApp} />
          </View>
        </View>
      );
    }

    const step = WIZARD_STEPS[currentStepId];
    if (!step) return null;

    return (
      <View style={styles.questionContainer}>
        <Text style={styles.stepIndicator}>ADIM {filters.length + 1}</Text>
        <Text style={styles.questionText}>{step.text}</Text>
        <View style={styles.optionsContainer}>
          {step.options.map((opt: any, index: number) => (
            <WizardButton key={index} label={opt.label} onPress={() => changeStep(opt.nextStep, opt.value)} />
          ))}
        </View>
        {/* BURADAKİ "BAŞA DÖN" YAZISI VE LINKI KALDIRILDI */}
      </View>
    );
  };

  return (
    <View style={[styles.mainContainer, { backgroundColor: isFinished ? BG_COLORS.Result : BG_COLORS.START }]}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        
        {/* HEADER */}
        {!isFinished && (
          <View style={styles.header}>
            <IconSymbol name="wand.and.stars" size={28} color="#4ECDC4" />
            <Text style={styles.headerTitle}><Text style={{color:'#4ECDC4'}}>Fark Etmez </Text></Text>
          </View>
        )}

        {/* CONTENT */}
        <Animated.View style={[styles.content, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
          {renderContent()}
        </Animated.View>

        {/* BANNER AD AREA - FIXED BOTTOM */}
        <View style={styles.bannerContainer}>
          <BannerAd
            unitId={bannerID}
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
            }}
          />
        </View>

      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
  safeArea: { flex: 1 },
  
  header: { 
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center', 
    paddingVertical: 10, gap: 1, minHeight: 60
  },
  headerTitle: { color: '#fff', fontSize: 40, fontWeight: '900', letterSpacing: 1 ,marginTop:40},
  
  content: { 
    flex: 1, 
    paddingHorizontal: 20, 
    paddingBottom: 70 // Banner için alt boşluk
  },

  // SORU ALANI
  questionContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  stepIndicator: { color: '#4ECDC4', fontWeight: 'bold', marginBottom: 10, letterSpacing: 2 },
  questionText: { color: '#fff', fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
  optionsContainer: { width: '100%', alignItems: 'center' },
  
  // LOADİNG
  calculatingTitle: { color: '#fff', fontSize: 28, fontWeight: 'bold', textAlign: 'center' },
  calculatingSubtitle: { color: '#eee', fontSize: 18, marginTop: 10, opacity: 0.8, textAlign: 'center' },
  loaderBox: { marginTop: 50, alignItems: 'center', justifyContent: 'center', height: 200 },

  // SONUÇ
  resultContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  winnerHeader: { color: 'rgba(255,255,255,0.8)', fontSize: 16, fontWeight: 'bold', marginBottom: 20, letterSpacing: 3, marginTop:60},
  winnerCard: { 
    backgroundColor: '#fff', width: '100%', borderRadius: 30, padding: 30, 
    alignItems: 'center', shadowColor: "#000", shadowOffset: {width:0, height:10}, 
    shadowOpacity: 0.3, shadowRadius: 20, elevation: 10 
  },
  winnerIcon: { fontSize: 70, marginBottom: 20 },
  winnerTitle: { fontSize: 28, fontWeight: '900', color: '#333', textAlign: 'center', marginBottom: 10 },
  winnerDesc: { fontSize: 16, color: '#666', textAlign: 'center', marginBottom: 20, lineHeight: 22 },
  tagsRow: { flexDirection: 'row', gap: 8, flexWrap: 'wrap', justifyContent: 'center' },
  tagBadge: { backgroundColor: '#f0f0f0', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 8 },
  tagText: { color: '#888', fontSize: 11, fontWeight: 'bold' },

  // BANNER ALANI
  bannerContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    paddingBottom: Platform.OS === 'ios' ? 0 : 0, // Android'de hafif boşluk
  }
});