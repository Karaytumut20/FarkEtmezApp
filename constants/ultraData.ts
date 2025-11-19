// constants/ultraData.ts

export type CategoryType = {
  id: string;
  title: string;
  icon: string; // Emoji veya ikon adı
  color: string;
  mode: 'classic' | 'party' | 'utility'; // Kategorileri gruplamak için
  data: string[];
};

export const ULTRA_DATA: CategoryType[] = [
  // --- YEMEK KATEGORİLERİ ---
  {
    id: 'food_fast',
    title: 'Fast Food',
    icon: '🍔',
    color: '#FF6B6B',
    mode: 'classic',
    data: ["Hamburger 🍔", "Pizza 🍕", "Tavuk Döner 🌯", "Et Döner 🥩", "Lahmacun 🍋", "Pide 🥙", "Kumpir 🥔", "Çiğ Köfte 🌯", "Taco 🌮", "Sushi 🍣", "Noodle 🍜", "Sandviç 🥪", "Fried Chicken 🍗"]
  },
  {
    id: 'food_home',
    title: 'Ev Yemeği',
    icon: '🍲',
    color: '#FF8787',
    mode: 'classic',
    data: ["Kuru Fasulye & Pilav", "Mantı", "Karnıyarık", "Mercimek Çorbası", "Sarma", "Dolma", "Taze Fasulye", "Menemen", "Köfte Patates", "Makarna", "Ispanak"]
  },
  {
    id: 'dessert',
    title: 'Tatlı Krizi',
    icon: '🍩',
    color: '#F06595',
    mode: 'classic',
    data: ["Waffle 🧇", "Künefe", "Baklava", "Sütlaç", "Cheesecake 🍰", "Dondurma 🍦", "Çikolata 🍫", "Profiterol", "Tiramisu", "Magnolia", "Sufle", "Donut 🍩"]
  },

  // --- İZLEME & DİNLEME ---
  {
    id: 'watch_genre',
    title: 'Film Türü',
    icon: '🎬',
    color: '#4ECDC4',
    mode: 'classic',
    data: ["Korku & Gerilim 👻", "Bilim Kurgu 👽", "Romantik Komedi 💘", "Aksiyon 💥", "Psikolojik Drama 🧠", "Belgesel 🌍", "Animasyon 🧸", "Yeşilçam Klasikleri 🎥", "Suç & Gizem 🕵️‍♂️", "Fantastik 🧝‍♀️"]
  },
  {
    id: 'music',
    title: 'Ne Dinlesek?',
    icon: '🎧',
    color: '#20B2AA',
    mode: 'classic',
    data: ["90'lar Türkçe Pop", "Rock & Metal 🤘", "Rap & HipHop 🎤", "Klasik Müzik 🎻", "Jazz & Blues 🎷", "Akustik Türkçe", "Elektronik / Techno ⚡", "Arabesk Damar 🚬", "Lo-Fi (Ders Çalışmalık)"]
  },

  // --- AKTİVİTELER ---
  {
    id: 'activity_out',
    title: 'Dışarı Çıkalım',
    icon: '🌳',
    color: '#FFE66D',
    mode: 'classic',
    data: ["Sahilde Yürüyüş 🌊", "Bowling 🎳", "Sinema 🍿", "Lunapark 🎡", "AVM Gezmesi 🛍️", "Müze/Sergi Gez 🏛️", "Bisiklet Sür 🚲", "Piknik Yap 🧺", "Kahve İçmeye Git ☕", "Bilardo Oyna 🎱", "Go-Kart 🏎️"]
  },
  {
    id: 'activity_home',
    title: 'Evde Takılmaca',
    icon: '🏠',
    color: '#FFD93D',
    mode: 'classic',
    data: ["Film Gecesi 📺", "Kutu Oyunu Oyna 🎲", "Kitap Oku 📚", "Temizlik Yap 🧹", "Yeni Yemek Dene 👨‍🍳", "Yoga/Spor Yap 🧘", "Puzzle Yap 🧩", "Video Oyunu Oyna 🎮", "Sadece Uyu 😴"]
  },

  // --- PARTİ OYUNLARI (YENİ!) ---
  {
    id: 'party_dare',
    title: 'Cesaretlik Görevi',
    icon: '🔥',
    color: '#FF9F43',
    mode: 'party',
    data: ["Yanındaki kişinin DM kutusunu aç!", "Son aradığın kişiyi geri ara ve havla.", "Balkona çık ve 'Ben bir patatesim!' diye bağır.", "1 dakika boyunca plank yap.", "Solundaki kişinin taklidini yap.", "En utanç verici anını anlat.", "Galerindeki 10. fotoğrafı herkese göster."]
  },
  {
    id: 'party_who',
    title: 'Kim Daha Olası?',
    icon: 'uwu', // Özel ikon yoksa metin
    color: '#54A0FF',
    mode: 'party',
    data: ["Kim hapse girmeye daha meyilli?", "Kim ünlü olmaya daha yakın?", "Kim bir ıssız adada ilk ölür?", "Kim zengin olup bizi tanımaz?", "Kim en kötü şoför?", "Kim en çok yalan söyler?", "Kim en dağınık?"]
  },

  // --- ARAÇLAR ---
  {
    id: 'tool_dice',
    title: 'Zar At',
    icon: '🎲',
    color: '#A06CD5',
    mode: 'utility',
    data: ["1", "2", "3", "4", "5", "6"]
  },
  {
    id: 'tool_coin',
    title: 'Yazı Tura',
    icon: '🪙',
    color: '#84817a',
    mode: 'utility',
    data: ["YAZI", "TURA"]
  }
];