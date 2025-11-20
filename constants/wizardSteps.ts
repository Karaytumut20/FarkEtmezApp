// constants/wizardSteps.ts

export const WIZARD_STEPS: Record<string, any> = {
  'START': {
    id: 'step1',
    text: 'Selam Kardeşim! 👋\nBugün ortam nasıl?',
    options: [
      { label: 'Tek Tabancayım 🤠', value: 'solo', nextStep: 'MOOD_SOLO' },
      { label: 'Kankamla/Manitayla 👯', value: 'duo', nextStep: 'MOOD_GROUP' },
      { label: 'Aşiret Gibiyiz (Kalabalık) 🎉', value: 'group', nextStep: 'MOOD_GROUP' },
    ]
  },
  'MOOD_SOLO': {
    id: 'step2_solo',
    text: 'Peki, modun nasıl?',
    options: [
      { label: 'Kurt Gibi Açım 🐺', value: 'hungry', nextStep: 'BUDGET' },
      { label: 'Atıştırmalık Bir Şeyler 🍪', value: 'snack', nextStep: 'BUDGET' },
      { label: 'Sıkıldım, Aktivite Lazım 🥱', value: 'bored', nextStep: 'ENERGY' },
      { label: 'Kafamı Dinleyeceğim 🧘', value: 'relax', nextStep: 'LOCATION_HOME' },
      { label: 'Oyun Oynayalım 🎮', value: 'gaming', nextStep: 'PLATFORM' },
      { label: 'Bir Şeyler İzleyelim 📺', value: 'watch', nextStep: 'FINISH' },
    ]
  },
  'MOOD_GROUP': {
    id: 'step2_group',
    text: 'Ekibin havası nasıl?',
    options: [
      { label: 'Herkes Açlıktan Ölüyor 🍕', value: 'hungry', nextStep: 'BUDGET' },
      { label: 'Tatlı / Kahve Yapalım ☕', value: 'snack', nextStep: 'BUDGET' },
      { label: 'Eğlenmek İstiyoruz 🥳', value: 'fun', nextStep: 'ENERGY' },
      { label: 'Laklak Yapalım 🗣️', value: 'talk', nextStep: 'LOCATION_OUT' },
      { label: 'Oyun Gecesi 🎮', value: 'gaming', nextStep: 'PLATFORM' },
    ]
  },
  'BUDGET': {
    id: 'step3_budget',
    text: 'Cüzdanlar ne durumda?',
    options: [
      { label: 'Ay sonu (Öğrenci İşi) 💸', value: 'low-budget', nextStep: 'FINISH' },
      { label: 'Esnaf İşi (Orta) 💳', value: 'mid-budget', nextStep: 'FINISH' },
      { label: 'Maaş Yattı (Krallar Gibi) 👑', value: 'high-budget', nextStep: 'FINISH' },
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
    text: 'Evde ne yapalım?',
    options: [
      { label: 'Evden çıkmam 🏠', value: 'home', nextStep: 'FINISH' },
      { label: 'Sadece chill takılalım 🛋️', value: 'home', nextStep: 'FINISH' },
    ]
  },
  'LOCATION_OUT': {
    id: 'step4_out',
    text: 'Dışarıda ne yapalım?',
    options: [
      { label: 'Açık hava olsun ☀️', value: 'outdoor', nextStep: 'FINISH' },
      { label: 'Kapalı mekan olsun 🏢', value: 'indoor', nextStep: 'FINISH' },
    ]
  },
  'PLATFORM': {
    id: 'step4_platform',
    text: 'Hangi platformdasın?',
    options: [
      { label: 'PC Master Race 🖥️', value: 'pc', nextStep: 'FINISH' },
      { label: 'Konsol (PS/Xbox) 🎮', value: 'console', nextStep: 'FINISH' },
      { label: 'Mobil 📱', value: 'mobile', nextStep: 'FINISH' },
    ]
  }
};