
// constants/masterData.ts

export type ItemType = {
  id: string;
  title: string;
  icon: string;
  tags: string[]; // 'food', 'activity', 'low-budget', 'high-energy', 'indoor' vb.
  description: string;
};

// Bu veriyi istediğin kadar büyütebilirsin. Algoritma buradan seçecek.
export const MASTER_DATA: ItemType[] = [
  // --- YİYECEK (DÜŞÜK BÜTÇE) ---
  { id: 'f1', title: 'Tavuk Döner', icon: '🌯', tags: ['food', 'hungry', 'low-budget', 'fast'], description: 'Öğrenci dostu, hızlı ve doyurucu.' },
  { id: 'f2', title: 'Simit & Ayran', icon: '🥯', tags: ['food', 'snack', 'low-budget', 'fast'], description: 'Klasik, ucuz ve lezzetli.' },
  { id: 'f3', title: 'Evde Makarna', icon: '🍝', tags: ['food', 'hungry', 'low-budget', 'home'], description: 'Ketçap mayonez ile şenlendir.' },
  { id: 'f4', title: 'Çiğ Köfte', icon: '🍋', tags: ['food', 'hungry', 'low-budget', 'spicy'], description: 'Nar ekşisini bol tut.' },

  // --- YİYECEK (ORTA/YÜKSEK BÜTÇE) ---
  { id: 'f5', title: 'İskender', icon: '🥩', tags: ['food', 'hungry', 'high-budget', 'luxury'], description: 'Tereyağı sesini duyar gibisin.' },
  { id: 'f6', title: 'Sushi', icon: '🍣', tags: ['food', 'hungry', 'high-budget', 'luxury'], description: 'Bugün biraz havalı takılalım.' },
  { id: 'f7', title: 'Büyük Boy Pizza', icon: '🍕', tags: ['food', 'hungry', 'mid-budget', 'group'], description: 'Paylaşmak için ideal.' },
  { id: 'f8', title: 'Hamburger Menü', icon: '🍔', tags: ['food', 'hungry', 'mid-budget', 'fast'], description: 'Yanına soğan halkası da al.' },

  // --- AKTİVİTE (DÜŞÜK ENERJİ / EV) ---
  { id: 'a1', title: 'Film Gecesi', icon: '🎬', tags: ['activity', 'lazy', 'home', 'low-budget'], description: 'Mısır patlat, ışıkları kapat.' },
  { id: 'a2', title: 'Kutu Oyunu', icon: '🎲', tags: ['activity', 'lazy', 'home', 'group'], description: 'Monopoly veya Tabu zamanı.' },
  { id: 'a3', title: 'Dedikodu Saati', icon: '☕', tags: ['activity', 'lazy', 'anywhere', 'talk'], description: 'Kahveleri alın, dökülün.' },
  { id: 'a4', title: 'Kitap Okuma', icon: '📚', tags: ['activity', 'lazy', 'home', 'solo'], description: 'Kafa dinlemek için birebir.' },

  // --- AKTİVİTE (YÜKSEK ENERJİ / DIŞARI) ---
  { id: 'a5', title: 'Bowling', icon: '🎳', tags: ['activity', 'energetic', 'outdoor', 'group'], description: 'Strike yapmaya hazır mısın?' },
  { id: 'a6', title: 'Sahil Yürüyüşü', icon: '🌊', tags: ['activity', 'energetic', 'outdoor', 'low-budget'], description: 'Temiz hava, bol oksijen.' },
  { id: 'a7', title: 'Lunapark', icon: '🎡', tags: ['activity', 'energetic', 'outdoor', 'fun'], description: 'Adrenalin tutkunları buraya.' },
  { id: 'a8', title: 'Go-Kart', icon: '🏎️', tags: ['activity', 'energetic', 'outdoor', 'mid-budget'], description: 'Hız sınırlarını zorla.' },
  { id: 'a9', title: 'Konser / Canlı Müzik', icon: '🎸', tags: ['activity', 'energetic', 'outdoor', 'high-budget'], description: 'Müziğin ritmine kapıl.' },
  { id: 'a10', title: 'Müze Gezisi', icon: '🏛️', tags: ['activity', 'energetic', 'outdoor', 'culture'], description: 'Biraz kültürlenelim.' },
];

// SİHİRBAZ SORULARI
export type QuestionType = {
  id: string;
  text: string;
  options: { label: string; value: string; nextStep: string | 'FINISH' }[];
};

export const WIZARD_STEPS: Record<string, QuestionType> = {
  'START': {
    id: 'step1',
    text: 'Selam! 👋\nBugün kaç kişiyiz?',
    options: [
      { label: 'Tek Tabancayım 🤠', value: 'solo', nextStep: 'MOOD_SOLO' },
      { label: 'İki Kişiyiz 👯', value: 'duo', nextStep: 'MOOD_GROUP' },
      { label: 'Kalabalığız 🎉', value: 'group', nextStep: 'MOOD_GROUP' },
    ]
  },
  'MOOD_SOLO': {
    id: 'step2_solo',
    text: 'Peki, şu an modun nasıl?',
    options: [
      { label: 'Karnım Aç 😋', value: 'hungry', nextStep: 'BUDGET' },
      { label: 'Sıkıldım, Aktivite Arıyorum 🥱', value: 'bored', nextStep: 'ENERGY' },
    ]
  },
  'MOOD_GROUP': {
    id: 'step2_group',
    text: 'Ekibin durumu nedir?',
    options: [
      { label: 'Herkes Aç! 🍕', value: 'hungry', nextStep: 'BUDGET' },
      { label: 'Eğlenmek İstiyoruz 🥳', value: 'bored', nextStep: 'ENERGY' },
    ]
  },
  'BUDGET': {
    id: 'step3_budget',
    text: 'Cüzdanın durumu ne alemde?',
    options: [
      { label: 'Ay sonu geldi... (Ucuz) 💸', value: 'low-budget', nextStep: 'FINISH' },
      { label: 'Orta karar bişeyler 💳', value: 'mid-budget', nextStep: 'FINISH' },
      { label: 'Krallar gibi harcarım 👑', value: 'high-budget', nextStep: 'FINISH' },
    ]
  },
  'ENERGY': {
    id: 'step3_energy',
    text: 'Enerjiniz ne seviyede?',
    options: [
      { label: 'Pil bitik, yorma bizi 🪫', value: 'lazy', nextStep: 'LOCATION_HOME' },
      { label: 'Enerji tavan, uçarız! 🔋', value: 'energetic', nextStep: 'LOCATION_OUT' },
    ]
  },
  'LOCATION_HOME': {
    id: 'step4_home',
    text: 'Nerede takılmak istersin?',
    options: [
      { label: 'Evden çıkmam 🏠', value: 'home', nextStep: 'FINISH' },
      { label: 'Sakin bi dış mekan 🌳', value: 'outdoor', nextStep: 'FINISH' },
    ]
  },
  'LOCATION_OUT': {
    id: 'step4_out',
    text: 'Mekan tercihin?',
    options: [
      { label: 'Açık hava olsun ☀️', value: 'outdoor', nextStep: 'FINISH' },
      { label: 'Kapalı mekan olsun 🏢', value: 'indoor', nextStep: 'FINISH' },
    ]
  }
};