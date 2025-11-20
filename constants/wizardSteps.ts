// constants/wizardSteps.ts

export const WIZARD_STEPS: Record<string, any> = {
  // ADIM 1: KİMLERLEYİZ?
  'START': {
    id: 'step_who',
    text: 'Selam! 👋\nKimlerleyiz bugün?',
    options: [
      { label: 'Tek Tabancayım 🤠', value: 'solo', nextStep: 'CATEGORY' },
      { label: 'Kankamla / Sevgilimle 👯', value: 'group', nextStep: 'CATEGORY' },
      { label: 'Kalabalık (Grup) 🎉', value: 'group', nextStep: 'CATEGORY' },
    ]
  },

  // ADIM 2: KATEGORİ (Tek Merkez)
  'CATEGORY': {
    id: 'step_category',
    text: 'Canınız ne istiyor?',
    options: [
      { label: 'Karnımız Aç (Yemek) 🍔', value: 'food', nextStep: 'BUDGET' },
      { label: 'Aktivite / Gezme 🏃', value: 'activity', nextStep: 'LOCATION' },
      { label: 'Oyun Oynayalım 🎮', value: 'game', nextStep: 'PLATFORM' }, // DÜZELTİLDİ: 'gaming' -> 'game'
      { label: 'Bir Şeyler İzleyelim 🎬', value: 'watch', nextStep: 'FINISH' },
    ]
  },

  // ADIM 3: DETAY SORULARI
  'BUDGET': {
    id: 'step_budget',
    text: 'Cüzdanlar ne durumda?',
    options: [
      { label: 'Öğrenci İşi (Ucuz) 💸', value: 'low-budget', nextStep: 'FINISH' },
      { label: 'Orta Halli 💳', value: 'mid-budget', nextStep: 'FINISH' },
      { label: 'Krallar Gibi (Lüks) 👑', value: 'high-budget', nextStep: 'FINISH' },
    ]
  },

  'LOCATION': {
    id: 'step_location',
    text: 'Nerede takılalım?',
    options: [
      { label: 'Evde / Kapalı 🏠', value: 'home', nextStep: 'FINISH' },
      { label: 'Dışarıda / Açık Hava 🌳', value: 'outdoor', nextStep: 'FINISH' },
    ]
  },

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