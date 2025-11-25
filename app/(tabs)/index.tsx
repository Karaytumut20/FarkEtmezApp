import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, Animated, TouchableOpacity, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { WizardButton } from '@/components/ui/WizardButton';
import { MASTER_DATA, WIZARD_STEPS, ItemType } from '@/constants/masterData';
import * as Haptics from 'expo-haptics';

// ADMOB IMPORTLARI
import { InterstitialAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';

// CANLI REKLAM BİRİMİ KİMLİĞİN (Resimden aldığım kod)
// Geliştirme yaparken TestIds.INTERSTITIAL kullanmak daha güvenlidir, ban yememek için.
// Yayına çıkarken productionID'yi kullanacağız.
const productionID = 'ca-app-pub-4816381866965413/9658718388';
const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : productionID;

// Reklamı oluşturuyoruz
const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
});

// Animasyonlu arka plan renkleri
const BG_COLORS = {
  START: '#1A1A2E',
  FOOD: '#C0392B',
  ACTIVITY: '#2980B9',
  Result: '#27AE60' // Düzeltildi: RESULT -> Result (Tutarlılık için)
};

export default function GeniusHomeScreen() {
  // --- STATE ---
  const [currentStepId, setCurrentStepId] = useState<string>('START');
  const [filters, setFilters] = useState<string[]>([]); 
  const [isFinished, setIsFinished] = useState(false);
  const [finalChoice, setFinalChoice] = useState<ItemType | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  
  // Reklam yüklendi mi kontrolü
  const [adLoaded, setAdLoaded] = useState(false);
  // Reklam sonrası analiz başlatmak için geçici state
  const [pendingFilters, setPendingFilters] = useState<string[] | null>(null);

  const [history, setHistory] = useState<string[]>([]); 

  // --- ANIMASYON DEĞERLERİ ---
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;

  // --- ADMOB LISTENER VE YÜKLEME ---
  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      setAdLoaded(true);
    });

    const unsubscribeClosed = interstitial.addAdEventListener(AdEventType.CLOSED, () => {
      setAdLoaded(false);
      // Reklam kapandığında analizi başlat
      if (pendingFilters) {
        calculateResult(pendingFilters);
        setPendingFilters(null);
      }
      // Bir sonraki tur için reklamı tekrar yükle
      interstitial.load();
    });

    // İlk yükleme
    interstitial.load();

    // Temizlik
    return () => {
      unsubscribe();
      unsubscribeClosed();
    };
  }, [pendingFilters]);

  // --- FONKSİYONLAR ---

  // Adım Değiştirme Animasyonu
  const changeStep = (nextStepId: string, addedTag?: string) => {
    // 1. Ekranı kaybet
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 0, duration: 200, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: -50, duration: 200, useNativeDriver: true })
    ]).start(() => {
      
      // 2. Veriyi güncelle
      let newFilters = [...filters];
      if (addedTag) {
        newFilters = [...newFilters, addedTag];
        setFilters(newFilters);
      }

      if (nextStepId === 'FINISH') {
        // BURASI DEĞİŞTİ: Önce reklam var mı diye bakıyoruz.
        if (adLoaded) {
          // Reklam varsa, filtreleri beklemeye al ve reklamı göster
          setPendingFilters(newFilters);
          interstitial.show();
        } else {
          // Reklam yüklenmediyse direkt analize geç
          calculateResult(newFilters);
        }
      } else {
        setCurrentStepId(nextStepId);
        
        // 3. Yeni ekranı getir (Sadece finish değilse burası çalışır, finish ise calculateResult içindeki akış çalışacak)
        slideAnim.setValue(50);
        Animated.parallel([
          Animated.timing(fadeAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
          Animated.spring(slideAnim, { toValue: 0, friction: 5, useNativeDriver: true })
        ]).start();
      }
    });
  };

  // --- GELİŞTİRİLMİŞ KATI FİLTRELEME MOTORU ---
  const calculateResult = (currentFilters: string[] = filters) => {
    // Önce Loading Ekranını Göster (Animasyonla gelmesi için fadeAnim'i ayarla)
    slideAnim.setValue(50);
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
      Animated.spring(slideAnim, { toValue: 0, friction: 5, useNativeDriver: true })
    ]).start();

    setIsFinished(true);
    setIsCalculating(true);

    // Kullanıcıya "düşünüyormuş" hissi vermek için kısa gecikme
    setTimeout(() => {
      console.log("Seçilen Filtreler:", currentFilters);

      const mainCategories = ['food', 'activity', 'game', 'watch'];
      const selectedCategory = currentFilters.find(f => mainCategories.includes(f));

      let candidates = selectedCategory 
        ? MASTER_DATA.filter(item => item.tags.includes(selectedCategory))
        : MASTER_DATA;

      const isSolo = currentFilters.includes('solo');
      const isGroup = currentFilters.includes('group');

      if (isSolo) {
        candidates = candidates.filter(item => {
            const requiresGroup = item.tags.includes('group') && !item.tags.includes('solo');
            return !requiresGroup; 
        });
      } 
      else if (isGroup) {
        candidates = candidates.filter(item => {
            const strictlySolo = item.tags.includes('solo') && !item.tags.includes('group');
            return !strictlySolo;
        });
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
      
    }, 2500); // Analiz süresini biraz uzattım (reklamdan sonra loading biraz daha anlamlı görünsün)
  };

  const resetApp = () => {
    // Animasyonla çıkış
    Animated.timing(fadeAnim, { toValue: 0, duration: 200, useNativeDriver: true }).start(() => {
        setFilters([]);
        setFinalChoice(null);
        setIsFinished(false);
        setIsCalculating(false);
        setCurrentStepId('START');
        
        // Animasyonla giriş
        slideAnim.setValue(50);
        Animated.parallel([
            Animated.timing(fadeAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
            Animated.spring(slideAnim, { toValue: 0, friction: 5, useNativeDriver: true })
        ]).start();
    });
  };

  // --- ARAYÜZ PARÇALARI ---

  const renderQuestion = () => {
    const step = WIZARD_STEPS[currentStepId];
    if (!step) return null;

    return (
      <View style={styles.questionContainer}>
        <Text style={styles.stepIndicator}>ADIM {filters.length + 1}</Text>
        <Text style={styles.questionText}>{step.text}</Text>
        
        <View style={styles.optionsContainer}>
          {step.options.map((opt: any, index: number) => (
            <WizardButton 
              key={index} 
              label={opt.label} 
              onPress={() => changeStep(opt.nextStep, opt.value)} 
            />
          ))}
        </View>
        
        {filters.length > 0 && (
          <TouchableOpacity onPress={resetApp} style={styles.restartLink}>
            <Text style={styles.restartLinkText}>Başa Dön</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const renderLoading = () => (
    <View style={styles.resultContainer}>
      <Text style={styles.calculatingTitle}>Analiz Yapılıyor...</Text>
      <Text style={styles.calculatingSubtitle}>
        {filters.includes('food') ? 'Mideler taranıyor...' : 
         filters.includes('game') ? 'Oyun kütüphanesi açılıyor...' :
         filters.includes('watch') ? 'IMDB puanları kontrol ediliyor...' :
         'En iyi seçenekler eleniyor...'}
      </Text>
      <View style={styles.loaderBox}>
        <Text style={{fontSize: 80}}>🧠</Text>
      </View>
    </View>
  );

  const renderResult = () => (
    <View style={styles.resultContainer}>
      <Text style={styles.winnerHeader}>SİZİN İÇİN SEÇTİM</Text>
      
      <View style={styles.winnerCard}>
        <Text style={styles.winnerIcon}>{finalChoice?.icon}</Text>
        <Text style={styles.winnerTitle}>{finalChoice?.title}</Text>
        <Text style={styles.winnerDesc}>{finalChoice?.description}</Text>
        
        <View style={styles.tagsRow}>
          {finalChoice?.tags.slice(0,3).map((t, i) => (
            <View key={i} style={styles.tagBadge}>
              <Text style={styles.tagText}>#{t}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={{marginTop: 40}}>
        <WizardButton 
            label="Beğenmedim, Başka Öner 🎲" 
            // Başka öner derken tekrar reklam göstermek isteyebilirsin, 
            // ama şimdilik direkt analize yolluyoruz:
            onPress={() => calculateResult()} 
            variant="secondary" 
        />
        <WizardButton label="Baştan Başla 🔄" onPress={resetApp} />
      </View>
    </View>
  );

  return (
    <View style={[styles.mainContainer, { backgroundColor: isFinished ? BG_COLORS.Result : BG_COLORS.START }]}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1}}>
        
        {/* Header Logo */}
        {!isFinished && (
          <View style={styles.header}>
            <IconSymbol name="wand.and.stars" size={30} color="#4ECDC4" />
            <Text style={styles.headerTitle}>Fark Etmez <Text style={{color:'#4ECDC4'}}>GENIUS</Text></Text>
          </View>
        )}

        <Animated.View 
          style={[
            styles.content, 
            { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }
          ]}
        >
          {!isFinished 
            ? renderQuestion() 
            : isCalculating 
              ? renderLoading() 
              : renderResult()
          }
        </Animated.View>

      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#1A1A2E' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 20, gap: 10 },
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: '900', letterSpacing: 1 },
  content: { flex: 1, paddingHorizontal: 20 },
  
  // Soru Alanı
  questionContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  stepIndicator: { color: '#4ECDC4', fontWeight: 'bold', marginBottom: 10, letterSpacing: 2 },
  questionText: { color: '#fff', fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 40, lineHeight: 40 },
  optionsContainer: { width: '100%', alignItems: 'center' },
  restartLink: { marginTop: 30 },
  restartLinkText: { color: '#666', textDecorationLine: 'underline' },

  // Yükleniyor Alanı
  calculatingTitle: { color: '#fff', fontSize: 28, fontWeight: 'bold', textAlign: 'center' },
  calculatingSubtitle: { color: '#eee', fontSize: 18, marginTop: 10, opacity: 0.8, textAlign: 'center' },
  loaderBox: { marginTop: 50, alignItems: 'center', justifyContent: 'center', height: 200 },

  // Sonuç Alanı
  resultContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  winnerHeader: { color: 'rgba(255,255,255,0.8)', fontSize: 16, fontWeight: 'bold', marginBottom: 20, letterSpacing: 3 },
  winnerCard: { 
    backgroundColor: '#fff', width: '100%', borderRadius: 30, padding: 30, 
    alignItems: 'center', shadowColor: "#000", shadowOffset: {width:0, height:10}, 
    shadowOpacity: 0.3, shadowRadius: 20, elevation: 10 
  },
  winnerIcon: { fontSize: 80, marginBottom: 20 },
  winnerTitle: { fontSize: 32, fontWeight: '900', color: '#333', textAlign: 'center', marginBottom: 10 },
  winnerDesc: { fontSize: 18, color: '#666', textAlign: 'center', marginBottom: 20, lineHeight: 24 },
  tagsRow: { flexDirection: 'row', gap: 8, flexWrap: 'wrap', justifyContent: 'center' },
  tagBadge: { backgroundColor: '#f0f0f0', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 },
  tagText: { color: '#888', fontSize: 12, fontWeight: 'bold' },
});