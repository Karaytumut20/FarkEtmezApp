// app/(tabs)/index.tsx

import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, StatusBar, Animated, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { WizardButton } from '@/components/ui/WizardButton';
import { MASTER_DATA, WIZARD_STEPS, ItemType } from '@/constants/masterData';
import * as Haptics from 'expo-haptics';

// Animasyonlu arka plan renkleri
const BG_COLORS = {
  START: '#1A1A2E',
  FOOD: '#C0392B',
  ACTIVITY: '#2980B9',
  RESULT: '#27AE60'
};

export default function GeniusHomeScreen() {
  // --- STATE ---
  const [currentStepId, setCurrentStepId] = useState<string>('START');
  const [filters, setFilters] = useState<string[]>([]); // Seçilen etiketler (tags)
  const [results, setResults] = useState<ItemType[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [finalChoice, setFinalChoice] = useState<ItemType | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // --- ANIMASYON DEĞERLERİ ---
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;

  // --- FONKSİYONLAR ---

  // Adım Değiştirme Animasyonu
  const changeStep = (nextStepId: string, addedTag?: string) => {
    // 1. Ekranı kaybet
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 0, duration: 200, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: -50, duration: 200, useNativeDriver: true })
    ]).start(() => {
      
      // 2. Veriyi güncelle
      if (addedTag) {
        setFilters(prev => [...prev, addedTag]);
      }

      if (nextStepId === 'FINISH') {
        calculateResult();
      } else {
        setCurrentStepId(nextStepId);
      }

      // 3. Yeni ekranı getir (Pozisyonu sıfırla)
      slideAnim.setValue(50);
      Animated.parallel([
        Animated.timing(fadeAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
        Animated.spring(slideAnim, { toValue: 0, friction: 5, useNativeDriver: true })
      ]).start();
    });
  };

  // Sonuç Hesaplama Motoru
  const calculateResult = () => {
    setIsFinished(true);
    setIsCalculating(true);
    
    // Filtreleme Mantığı: 
    // Veri tabanındaki her bir öğe için, bizim seçtiğimiz filtrelerin (tags)
    // kaç tanesini içerdiğine bakarız.
    
    // Örn: Filtreler=['food', 'hungry', 'low-budget']
    // Item A tags=['food', 'low-budget'] -> Puan: 2
    
    const scoredItems = MASTER_DATA.map(item => {
      let score = 0;
      filters.forEach(filter => {
        if (item.tags.includes(filter)) score++;
      });
      return { item, score };
    });

    // En yüksek puanlıları al
    const maxScore = Math.max(...scoredItems.map(s => s.score));
    // Eğer hiç uyan yoksa, hepsini aday yap (fallback)
    const bestCandidates = maxScore > 0 
      ? scoredItems.filter(s => s.score === maxScore).map(s => s.item)
      : MASTER_DATA;

    setResults(bestCandidates);

    // Heyecanlı bekleyiş animasyonu (3 saniye)
    setTimeout(() => {
      // Rastgele birini seç
      const winner = bestCandidates[Math.floor(Math.random() * bestCandidates.length)];
      setFinalChoice(winner);
      setIsCalculating(false);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }, 2500);
  };

  const resetApp = () => {
    setFilters([]);
    setResults([]);
    setFinalChoice(null);
    setIsFinished(false);
    setIsCalculating(false);
    setCurrentStepId('START');
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
          {step.options.map((opt, index) => (
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
        {filters.includes('food') ? 'Mideler taranıyor...' : 'Aktiviteler hesaplanıyor...'}
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
        <WizardButton label="Beğenmedim, Başka Öner 🎲" onPress={calculateResult} variant="secondary" />
        <WizardButton label="Baştan Başla 🔄" onPress={resetApp} />
      </View>
    </View>
  );

  return (
    <View style={[styles.mainContainer, { backgroundColor: isFinished ? BG_COLORS.RESULT : BG_COLORS.START }]}>
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
  calculatingSubtitle: { color: '#eee', fontSize: 18, marginTop: 10, opacity: 0.8 },
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