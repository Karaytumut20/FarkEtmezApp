// constants/wizardSteps.ts

export const WIZARD_STEPS: Record<string, any> = {
  // ADIM 1: KİMLERLEYİZ? (Sadece etiket belirler, akışı dallandırmaz)
  'START': {
    id: 'step_who',
    text: 'Selam! 👋\nKimlerleyiz bugün?',
    options: [
      { label: 'Tek Tabancayım 🤠', value: 'solo', nextStep: 'CATEGORY' },
      { label: 'Kankamla / Manitayla 👯', value: 'group', nextStep: 'CATEGORY' }, // 'duo' yerine group etiketi kullandık ki verilerle eşleşsin
      { label: 'Kalabalık (Grup) 🎉', value: 'group', nextStep: 'CATEGORY' },
    ]
  },

  // ADIM 2: KATEGORİ (Tek merkez, tekrar yok)
  'CATEGORY': {
    id: 'step_category',
    text: 'Canınız ne istiyor?',
    options: [
      { label: 'Karnımız Aç (Yemek) 🍔', value: 'food', nextStep: 'BUDGET' },
      { label: 'Aktivite / Gezme 🏃', value: 'activity', nextStep: 'LOCATION' },
      { label: 'Oyun Oynayalım 🎮', value: 'game', nextStep: 'PLATFORM' }, // DÜZELTME: 'gaming' yerine 'game' yaptık
      { label: 'Bir Şeyler İzleyelim 🎬', value: 'watch', nextStep: 'FINISH' },
    ]
  },

  // ADIM 3: DETAYLAR
  
  // Yemek -> Bütçe
  'BUDGET': {
    id: 'step_budget',
    text: 'Cüzdanlar ne durumda?',
    options: [
      { label: 'Öğrenci İşi (Ucuz) 💸', value: 'low-budget', nextStep: 'FINISH' },
      { label: 'Orta Halli 💳', value: 'mid-budget', nextStep: 'FINISH' },
      { label: 'Krallar Gibi (Lüks) 👑', value: 'high-budget', nextStep: 'FINISH' },
    ]
  },

  // Aktivite -> Mekan
  'LOCATION': {
    id: 'step_location',
    text: 'Nerede takılalım?',
    options: [
      { label: 'Evde / Kapalı 🏠', value: 'home', nextStep: 'FINISH' },
      { label: 'Dışarıda / Açık Hava 🌳', value: 'outdoor', nextStep: 'FINISH' },
    ]
  },

  // Oyun -> Platform (İşte PC'yi burada seçiyoruz)
  'PLATFORM': {
    id: 'step_platform',
    text: 'Hangi platform?',
    options: [
      { label: 'Bilgisayar (PC) 🖥️', value: 'pc', nextStep: 'FINISH' },
      { label: 'Konsol (PS/Xbox) 🎮', value: 'console', nextStep: 'FINISH' },
      { label: 'Mobil 📱', value: 'mobile', nextStep: 'FINISH' },
    ]
  }
};