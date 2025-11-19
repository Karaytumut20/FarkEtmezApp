// constants/gameData.ts

export type CategoryType = {
  id: string;
  title: string;
  icon: string;
  color: string;
  options: string[];
};

export const GAME_DATA: CategoryType[] = [
  {
    id: 'food',
    title: 'Ne Yesek?',
    icon: '🍔',
    color: '#FF6B6B', // Kırmızımsı
    options: [
      "İskender 🥙", "Hamburger 🍔", "Pizza 🍕", "Lahmacun 🍋", 
      "Sushi 🍣", "Tavuk Döner 🌯", "Adana Kebap 🌶️", "Makarna 🍝", 
      "Salata (Diyet) 🥗", "Mantı 🥟", "Tost & Çay 🥪", "Çiğ Köfte 🌯",
      "Kokoreç 🥖", "Ev Yemeği 🍲", "Kumpir 🥔"
    ]
  },
  {
    id: 'watch',
    title: 'Ne İzlesek?',
    icon: '🎬',
    color: '#4ECDC4', // Turkuaz
    options: [
      "Korku Filmi 👻", "Bilim Kurgu 👽", "Romantik Komedi 💘", 
      "Aksiyon & Macera 💥", "Belgesel 🌍", "Animasyon 🧸", 
      "Eski Türk Filmi 🎥", "Suç & Gizem 🕵️‍♂️", "Netflix Dizisi 📺", 
      "Youtube Vlog 📹"
    ]
  },
  {
    id: 'activity',
    title: 'Ne Yapsak?',
    icon: '🎉',
    color: '#FFE66D', // Sarı
    options: [
      "Sahilde Yürüyüş 🌊", "Bowling Oyna 🎳", "Kahve İçmeye Git ☕", 
      "AVM Gezmesi 🛍️", "Evde Oyun Gecesi 🎮", "Sinemaya Git 🍿", 
      "Kitap Oku 📚", "Bisiklet Sür 🚲", "Müze Gez 🏛️", "Sadece Uyu 😴"
    ]
  },
  {
    id: 'coin',
    title: 'Yazı Tura',
    icon: '🪙',
    color: '#A06CD5', // Mor
    options: ["YAZI", "TURA"]
  },
  {
    id: 'dice',
    title: 'Zar At',
    icon: '🎲',
    color: '#FF9F43', // Turuncu
    options: ["1", "2", "3", "4", "5", "6"]
  }
];