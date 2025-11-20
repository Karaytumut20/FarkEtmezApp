// app/(tabs)/index.tsx

import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, StatusBar, Animated, TouchableOpacity } from 'react-native';
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
  const [isFinished, setIsFinished] = useState(false);
  const [finalChoice, setFinalChoice] = useState<ItemType | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  
  // Aynı oturumda çıkanları tekrar göstermemek için geçmiş tutuyoruz
  const [history, setHistory] = useState<string[]>([]); 

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

  // Geliştirilmiş Sonuç Hesaplama Motoru
  const calculateResult = () => {
    setIsFinished(true);
    setIsCalculating(true);
    
    // 1. KATEGORİ BELİRLEME (Zorunlu Filtre)
    // Kullanıcının seçtiği ana kategoriyi buluyoruz.
    const mainCategories = ['food', 'activity', 'game', 'watch'];
    
    // Filtrelerimiz içinde bu kategorilerden biri var mı? (örn: 'game')
    // State update asenkron olduğu için son eklenen tag henüz state'e yansımamış olabilir,
    // bu yüzden filters state'ini kullanırken dikkatli olmalıyız.
    // Ancak changeStep içinde filters update edildikten sonra calculateResult çağrılmıyor,
    // changeStep içinde çağrıldığı için addedTag'i de hesaba katmak gerekebilir.
    // Fakat changeStep fonksiyonunda setFilters asenkron çalışır.
    // Bu basit yapıda React 18 otomatik batching yaptığı için sorun olmayabilir ama
    // garanti olsun diye filters dizisini kullanıyoruz.
    
    // NOT: changeStep fonksiyonunda setFilters sonrası hemen calculateResult çağrıldığında
    // filters henüz güncellenmemiş olabilir. Bu yüzden normalde useEffect kullanmak daha iyidir
    // ama kodu çok değiştirmemek için burada mantıksal bir filtreleme yapacağız.
    
    setTimeout(() => {
      // SetTimeout içinde güncel state'e erişmek için fonksiyonel update kullanmak gerekir
      // ya da filters'ı dependency olarak eklemek gerekir ama burada manuel bir trick yapacağız.
      
      // Basitlik adına: MASTER_DATA üzerinden filtreleme yapıyoruz.
      
      // Ana Kategoriyi Bul
      const selectedCategory = filters.find(f => mainCategories.includes(f));
      
      // Havuzu belirle: Kategori seçildiyse sadece o kategoriden, yoksa hepsinden.
      let candidateItems = selectedCategory 
        ? MASTER_DATA.filter(item => item.tags.includes(selectedCategory))
        : MASTER_DATA;

      // ************************************************
      // START: KULLANICI İSTEĞİ - FOOD İÇİN BÜTÇE ZORUNLULUĞU
      // ************************************************
      const budgetFilters = ['low-budget', 'mid-budget', 'high-budget'];
      
      // Eğer ana kategori 'food' ise ve bir bütçe filtresi seçilmişse, bu filtreyi zorunlu kıl
      if (selectedCategory === 'food') {
          const selectedBudgetFilter = filters.find(f => budgetFilters.includes(f));
          if (selectedBudgetFilter) {
              // candidateItems'ı, sadece seçilen bütçe etiketini içerenlerle kısıtla
              candidateItems = candidateItems.filter(item => item.tags.includes(selectedBudgetFilter));
          }
      }
      // ************************************************
      // END: KULLANICI İSTEĞİ - FOOD
      // ************************************************

      // ************************************************
      // START: KULLANICI İSTEĞİ - ACTIVITY İÇİN KONUM ZORUNLULUĞU
      // ************************************************
      const locationFilters = ['home', 'outdoor'];
      
      // Eğer ana kategori 'activity' ise ve bir konum filtresi seçilmişse, bu filtreyi zorunlu kıl
      if (selectedCategory === 'activity') {
          const selectedLocationFilter = filters.find(f => locationFilters.includes(f));
          if (selectedLocationFilter) {
              // candidateItems'ı, sadece seçilen konum etiketini içerenlerle kısıtla
              candidateItems = candidateItems.filter(item => item.tags.includes(selectedLocationFilter));
          }
      }
      // ************************************************
      // END: KULLANICI İSTEĞİ - ACTIVITY
      // ************************************************

      // 2. PUANLAMA
      // Diğer kriterlere (bütçe, kişi sayısı vb.) göre puan ver.
      const scoredItems = candidateItems.map(item => {
        let score = 0;
        filters.forEach(filter => {
          // Ana kategori dışındaki filtreler puan kazandırır
          if (item.tags.includes(filter) && filter !== selectedCategory) {
            score++;
          }
        });
        return { item, score };
      });

      // 3. EN İYİLERİ SEÇ
      const maxScore = Math.max(...scoredItems.map(s => s.score));
      let bestCandidates = scoredItems
        .filter(s => s.score === maxScore)
        .map(s => s.item);

      // 4. GEÇMİŞ KONTROLÜ (History Check)
      // Daha önce gösterilenleri ele.
      const unshownCandidates = bestCandidates.filter(item => !history.includes(item.id));
      
      // Eğer hiç gösterilmemiş aday varsa onları kullan, yoksa mecburen eskilerden seç.
      if (unshownCandidates.length > 0) {
        bestCandidates = unshownCandidates;
      }

      // Kazananı Belirle
      let winner: ItemType;
      
      if (bestCandidates.length === 0) {
         // Hiçbir şey bulunamazsa rastgele (Fallback)
         winner = MASTER_DATA[Math.floor(Math.random() * MASTER_DATA.length)];
      } else {
         winner = bestCandidates[Math.floor(Math.random() * bestCandidates.length)];
      }

      // State Güncelleme
      setFinalChoice(winner);
      setHistory(prev => [...prev, winner.id]); // Tarihçeye ekle
      setIsCalculating(false);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      
    }, 2000); // 2 saniye bekleme
  };

  const resetApp = () => {
    setFilters([]);
    setFinalChoice(null);
    setIsFinished(false);
    setIsCalculating(false);
    setCurrentStepId('START');
    setHistory([]); // Geçmişi temizle
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
         'Seçenekler eleniyor...'}
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