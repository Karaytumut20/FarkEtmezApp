// constants/masterData.ts

export type ItemType = {
  id: string;
  title: string;
  icon: string;
  tags: string[]; // Algoritma için etiketler
  description: string;
};

export const MASTER_DATA: ItemType[] = [
  // =================================================================
  // 🌯 SOKAK LEZZETLERİ & FAST FOOD (Hızlı, Ucuz, Doyurucu)
  // =================================================================
  { id: 'f1', title: 'Tavuk Döner & Ayran', icon: '🌯', tags: ['food', 'hungry', 'low-budget', 'fast', 'student'], description: 'Soğanlı, bol soslu, çift lavaş.' },
  { id: 'f2', title: 'Yarım Ekmek Kokoreç', icon: '🥖', tags: ['food', 'hungry', 'mid-budget', 'street', 'night'], description: 'İri kıyım, bol baharatlı.' },
  { id: 'f3', title: 'Midye Dolma (20 Tane)', icon: '🦪', tags: ['food', 'snack', 'low-budget', 'street', 'group'], description: 'Limonu sık, durmadan göm.' },
  { id: 'f4', title: 'Islak Hamburger', icon: '🍔', tags: ['food', 'snack', 'low-budget', 'street', 'fast'], description: 'Taksim usulü, en az 3 tane.' },
  { id: 'f5', title: 'Çiğ Köfte Dürüm', icon: '🍋', tags: ['food', 'hungry', 'low-budget', 'spicy', 'vegan'], description: 'Nar ekşisi sel olsun aksın.' },
  { id: 'f6', title: 'Tavuk Pilav & Turşu', icon: '🍚', tags: ['food', 'hungry', 'low-budget', 'street', 'fast'], description: 'Seyyar arabadan, bol karabiberli.' },
  { id: 'f7', title: 'Kumpir', icon: '🥔', tags: ['food', 'hungry', 'mid-budget', 'outdoor'], description: 'İçine her malzemeden koydur.' },
  { id: 'f8', title: 'Balık Ekmek', icon: '🐟', tags: ['food', 'hungry', 'low-budget', 'outdoor', 'view'], description: 'Deniz kenarında, soğanlı.' },
  { id: 'f9', title: 'Sosisli Sandviç (Gengen)', icon: '🌭', tags: ['food', 'snack', 'low-budget', 'fast'], description: 'Salçalı soslu klasik büfe lezzeti.' },
  { id: 'f10', title: 'Pide (Kuşbaşılı)', icon: '🥙', tags: ['food', 'hungry', 'mid-budget', 'group'], description: 'Kenarları kıtır, yağı bol.' },
  { id: 'f11', title: 'Lahmacun (3 Tane)', icon: '🍕', tags: ['food', 'hungry', 'mid-budget', 'group'], description: 'Bol yeşillik ve limonla dür.' },
  { id: 'f12', title: 'Adana Dürüm', icon: '🌶️', tags: ['food', 'hungry', 'mid-budget', 'spicy'], description: 'Acısı sonradan çıkar.' },
  { id: 'f13', title: 'Kumru', icon: '🥪', tags: ['food', 'hungry', 'mid-budget', 'fast'], description: 'İzmir usulü, bol malzemeli.' },
  { id: 'f14', title: 'Tantuni (Yoğurtlu)', icon: '🌮', tags: ['food', 'hungry', 'mid-budget', 'fast'], description: 'Mersin ateşi, yağlı ve leziz.' },
  { id: 'f15', title: 'Arnavut Ciğeri Ekmek', icon: '🧅', tags: ['food', 'hungry', 'mid-budget', 'street'], description: 'Sumaklı soğanla efsane olur.' },
  { id: 'f16', title: 'Boyoz & Yumurta', icon: '🥚', tags: ['food', 'snack', 'low-budget', 'morning'], description: 'İzmir kahvaltısının kralı.' },
  { id: 'f17', title: 'Gözleme & Çay', icon: '🥞', tags: ['food', 'snack', 'low-budget', 'cafe'], description: 'Patatesli mi, peynirli mi?' },
  { id: 'f18', title: 'Kır Pidesi', icon: '🥟', tags: ['food', 'snack', 'low-budget', 'fast'], description: 'Sıcak sıcak, yanında meyve suyu.' },
  { id: 'f19', title: 'Börek (Kıymalı)', icon: '🥧', tags: ['food', 'hungry', 'mid-budget', 'morning'], description: 'Çıtır çıtır, yağı el yakar.' },
  { id: 'f20', title: 'Patso', icon: '🍟', tags: ['food', 'hungry', 'low-budget', 'student'], description: 'Ekmek arası patates, karbonhidrat şoku.' },

  // =================================================================
  // 🥘 EV YEMEĞİ & ESNAF LOKANTASI (Anne Eli Değmiş Gibi)
  // =================================================================
  { id: 'e1', title: 'Kuru Fasulye & Pilav', icon: '🍲', tags: ['food', 'hungry', 'mid-budget', 'home'], description: 'Milli ikilimiz, turşu şart.' },
  { id: 'e2', title: 'Mantı', icon: '🥟', tags: ['food', 'hungry', 'mid-budget', 'home'], description: 'Sarımsaklı yoğurt ve naneli sos.' },
  { id: 'e3', title: 'Karnıyarık & Cacık', icon: '🍆', tags: ['food', 'hungry', 'mid-budget', 'home'], description: 'Patlıcanın en güzel hali.' },
  { id: 'e4', title: 'Yaprak Sarma', icon: '🍇', tags: ['food', 'snack', 'mid-budget', 'home', 'labor'], description: 'Tencere tencere yenir.' },
  { id: 'e5', title: 'Mercimek Köftesi', icon: '🧆', tags: ['food', 'snack', 'low-budget', 'home', 'group'], description: 'Günlerin vazgeçilmezi.' },
  { id: 'e6', title: 'Menemen', icon: '🍳', tags: ['food', 'hungry', 'low-budget', 'home', 'fast'], description: 'Soğanlı mı, soğansız mı?' },
  { id: 'e7', title: 'Tarhana Çorbası', icon: '🥣', tags: ['food', 'light', 'low-budget', 'home'], description: 'Şifa kaynağı, içini ısıtır.' },
  { id: 'e8', title: 'İçli Köfte', icon: '🍖', tags: ['food', 'hungry', 'high-budget', 'home'], description: 'Haşlama mı, kızartma mı?' },
  { id: 'e9', title: 'Hünkar Beğendi', icon: '👑', tags: ['food', 'hungry', 'high-budget', 'luxury'], description: 'Saraylara layık lezzet.' },
  { id: 'e10', title: 'Fırın Sütlaç', icon: '🍮', tags: ['food', 'dessert', 'mid-budget', 'home'], description: 'Üstü nar gibi kızarmış.' },

  // =================================================================
  // 💎 KEYİF & LÜKS (Maaş Günü / Özel Gün)
  // =================================================================
  { id: 'l1', title: 'Serpme Kahvaltı', icon: '🧀', tags: ['food', 'hungry', 'high-budget', 'morning', 'group'], description: 'Masada boş yer kalmasın.' },
  { id: 'l2', title: 'Ocakbaşı (Kebap)', icon: '🍢', tags: ['food', 'hungry', 'high-budget', 'group', 'alcohol'], description: 'Köz kokusu, mezeler, şalgam.' },
  { id: 'l3', title: 'Rakı & Balık', icon: '🐟', tags: ['food', 'hungry', 'high-budget', 'group', 'alcohol', 'view'], description: 'Deniz kenarında dertleşmece.' },
  { id: 'l4', title: 'Nusret Tarzı Steak', icon: '🥩', tags: ['food', 'hungry', 'high-budget', 'luxury'], description: 'Lokum gibi et, tuzlu hesap.' },
  { id: 'l5', title: 'Sushi Night', icon: '🍣', tags: ['food', 'hungry', 'high-budget', 'luxury'], description: 'Çubuk kullanmayı dene.' },
  { id: 'l6', title: 'İtalyan Pizza & Şarap', icon: '🍷', tags: ['food', 'hungry', 'high-budget', 'romance'], description: 'İnce hamur, kaliteli malzeme.' },
  { id: 'l7', title: 'Çikolata Şelalesi', icon: '🍫', tags: ['food', 'dessert', 'mid-budget', 'cafe'], description: 'Meyveleri çikolataya bandır.' },
  { id: 'l8', title: 'Künefe & Kaymak', icon: '🥞', tags: ['food', 'dessert', 'mid-budget', 'group'], description: 'Peyniri uzadıkça uzasın.' },

  // =================================================================
  // 🏠 AKTİVİTE - EVDE / TEMBEL (Pijama Terlik TV)
  // =================================================================
  { id: 'h1', title: 'Müge Anlı İzle', icon: '🕵️‍♀️', tags: ['activity', 'lazy', 'home', 'solo'], description: 'Katil kim? Türkiye bunu merak ediyor.' },
  { id: 'h2', title: 'Çekirdek & Dizi', icon: '🌻', tags: ['activity', 'lazy', 'home', 'solo', 'duo'], description: 'Dudaklar tuzlanana kadar çitle.' },
  { id: 'h3', title: 'Balkon Keyfi', icon: '☕', tags: ['activity', 'lazy', 'home', 'relax'], description: 'Çayını al, geleni geçeni izle.' },
  { id: 'h4', title: 'Okey 101 (Telefonda)', icon: '📱', tags: ['activity', 'lazy', 'home', 'solo'], description: 'Seri seri oyna, çip kazan.' },
  { id: 'h5', title: 'Eski Türk Filmi', icon: '🎥', tags: ['activity', 'lazy', 'home', 'family'], description: 'Tosun Paşa veya Hababam Sınıfı.' },
  { id: 'h6', title: 'Temizlik Yap', icon: '🧹', tags: ['activity', 'energetic', 'home', 'productive'], description: 'Dip köşe giriş, terapi gibidir.' },
  { id: 'h7', title: 'Dolap Düzenle', icon: '👕', tags: ['activity', 'energetic', 'home', 'productive'], description: 'Giymediklerini ayır.' },
  { id: 'h8', title: 'Yemeksepeti Gezintisi', icon: '🛵', tags: ['activity', 'lazy', 'home', 'hungry'], description: 'Sipariş verme, sadece menülere bak.' },
  { id: 'h9', title: 'Kedi/Köpek Sev', icon: '🐈', tags: ['activity', 'lazy', 'home', 'relax'], description: 'Varsa sev, yoksa videolarını izle.' },
  { id: 'h10', title: 'Kısır Günü Yap', icon: '🥗', tags: ['activity', 'lazy', 'home', 'group', 'food'], description: 'Altın günü modunu aç.' },
  { id: 'h11', title: 'Türk Kahvesi & Fal', icon: '🔮', tags: ['activity', 'lazy', 'home', 'duo'], description: 'Üç vakte kadar yolun var.' },
  { id: 'h12', title: 'Pes / Fifa At', icon: '🎮', tags: ['activity', 'lazy', 'home', 'group'], description: 'Kolu bozuk olan kaybetsin.' },
  { id: 'h13', title: 'Dedikodu Seansı', icon: '🗣️', tags: ['activity', 'lazy', 'home', 'group', 'talk'], description: 'Kim kiminle ne yapmış?' },
  { id: 'h14', title: 'Akustik Müzik Dinle', icon: '🎸', tags: ['activity', 'lazy', 'home', 'relax'], description: 'Zeynep Bastık coverları falan.' },
  { id: 'h15', title: 'Korku Hikayeleri', icon: '👻', tags: ['activity', 'lazy', 'home', 'group', 'thrill'], description: 'Işıkları kapatıp anlatın.' },

  // =================================================================
  // 🌳 AKTİVİTE - DIŞARI / SOSYAL (Gezme Tozma)
  // =================================================================
  { id: 'o1', title: 'Halı Saha Maçı', icon: '⚽', tags: ['activity', 'energetic', 'outdoor', 'group'], description: 'Maç sonu baklavayı kim alacak?' },
  { id: 'o2', title: 'Sahilde Yürüyüş', icon: '🌊', tags: ['activity', 'energetic', 'outdoor', 'relax', 'free'], description: 'Çekirdek çitleyerek piyasa yap.' },
  { id: 'o3', title: 'AVM Gezmesi', icon: '🛍️', tags: ['activity', 'lazy', 'indoor', 'walk'], description: 'Klima serinliğinde vitrin bak.' },
  { id: 'o4', title: 'Nargile Kafe', icon: '💨', tags: ['activity', 'lazy', 'outdoor', 'group', 'smoke'], description: 'Elmalı nane, köz getir abim.' },
  { id: 'o5', title: 'Okey Oyna (Kafede)', icon: '🎲', tags: ['activity', 'lazy', 'indoor', 'group'], description: 'Hesap kaybedene!' },
  { id: 'o6', title: 'Bowling', icon: '🎳', tags: ['activity', 'energetic', 'indoor', 'group'], description: 'Topu yan kanala atma.' },
  { id: 'o7', title: 'Sinema', icon: '🍿', tags: ['activity', 'lazy', 'indoor', 'group'], description: 'Mısırın büyüğünü al.' },
  { id: 'o8', title: 'Lunapark', icon: '🎡', tags: ['activity', 'energetic', 'outdoor', 'fun'], description: 'Gondola binip çığlık at.' },
  { id: 'o9', title: 'Hamam / Sauna', icon: '🧖‍♂️', tags: ['activity', 'lazy', 'indoor', 'relax'], description: 'Kese attır, pamuk gibi ol.' },
  { id: 'o10', title: 'Piknik / Mangal', icon: '🍖', tags: ['activity', 'energetic', 'outdoor', 'group', 'food'], description: 'Yellerim yellerim bitmez.' },
  { id: 'o11', title: 'Pazara Git', icon: '🍅', tags: ['activity', 'energetic', 'outdoor', 'crowd'], description: 'Akşam pazarı ucuzluğu kovala.' },
  { id: 'o12', title: 'Balık Tutmak', icon: '🎣', tags: ['activity', 'lazy', 'outdoor', 'relax'], description: 'Galata köprüsünde sabır testi.' },
  { id: 'o13', title: 'Go-Kart', icon: '🏎️', tags: ['activity', 'energetic', 'outdoor', 'fun'], description: 'İçindeki trafik canavarını sal.' },
  { id: 'o14', title: 'Müze Gez', icon: '🏛️', tags: ['activity', 'energetic', 'indoor', 'culture'], description: 'Müze kartın varsa bedava.' },
  { id: 'o15', title: 'Vapur Turu', icon: '🚢', tags: ['activity', 'lazy', 'outdoor', 'view'], description: 'Martılara simit at.' },
  { id: 'o16', title: 'İnternet Kafe', icon: '💻', tags: ['activity', 'energetic', 'indoor', 'group'], description: 'CS:GO veya LoL kapışması.' },
  { id: 'o17', title: 'Kütüphane', icon: '📚', tags: ['activity', 'lazy', 'indoor', 'quiet'], description: 'Ders çalışır gibi yap.' },
  { id: 'o18', title: 'Bilardo', icon: '🎱', tags: ['activity', 'energetic', 'indoor', 'group'], description: 'Amerikan mı, 3 bant mı?' },
  { id: 'o19', title: 'Canlı Müzik / Fasıl', icon: '🎻', tags: ['activity', 'energetic', 'indoor', 'high-budget', 'alcohol'], description: 'Dertli şarkılarda ağla.' },
  { id: 'o20', title: 'Fotoğraf Yürüyüşü', icon: '📸', tags: ['activity', 'energetic', 'outdoor', 'art'], description: 'Instagram için malzeme çıkar.' },

  // =================================================================
  // 🎬 İZLEME & KÜLTÜR (Ne İzlesek?)
  // =================================================================
  { id: 'w1', title: 'Kurtlar Vadisi (İlk 97)', icon: '🔫', tags: ['activity', 'lazy', 'home', 'series'], description: 'Bu bir mafya dizisidir.' },
  { id: 'w2', title: 'Aşk-ı Memnu (Tekrar)', icon: '💍', tags: ['activity', 'lazy', 'home', 'series'], description: 'Bihter\'in ölüşünü 100. kez izle.' },
  { id: 'w3', title: 'Gibi', icon: '🗿', tags: ['activity', 'lazy', 'home', 'series', 'comedy'], description: 'Yılmaz, İlkkan, Ersoy üçlüsü.' },
  { id: 'w4', title: 'Avrupa Yakası', icon: '🏢', tags: ['activity', 'lazy', 'home', 'series', 'comedy'], description: 'Burhan Altıntop replikleri.' },
  { id: 'w5', title: 'Korku Filmi (Dabbe)', icon: '👻', tags: ['activity', 'lazy', 'home', 'thrill'], description: 'Gece ışıkları kapatıp izle.' },
  { id: 'w6', title: 'Kemal Sunal Klasikleri', icon: '😄', tags: ['activity', 'lazy', 'home', 'comedy'], description: 'Tosun Paşa, Süt Kardeşler.' },
  { id: 'w7', title: 'Yemek Belgeseli', icon: '🥘', tags: ['activity', 'lazy', 'home', 'hungry'], description: 'İzlerken acıkacaksın.' },
  { id: 'w8', title: 'Survivor', icon: '🌴', tags: ['activity', 'lazy', 'home', 'contest'], description: 'Kaos, kavga, parkur.' },
  { id: 'w9', title: 'Masterchef', icon: '👨‍🍳', tags: ['activity', 'lazy', 'home', 'contest'], description: 'Evet şef, hayır şef!' },
  { id: 'w10', title: 'YouTube Vlog', icon: '📹', tags: ['activity', 'lazy', 'home', 'short'], description: 'Gezgin videoları izle.' },
  { id: 'w11', title: 'Stand-up Gösterisi', icon: '🎤', tags: ['activity', 'lazy', 'home', 'comedy'], description: 'Cem Yılmaz veya yeniler.' },
  { id: 'w12', title: 'Animasyon Filmi', icon: '🧸', tags: ['activity', 'lazy', 'home', 'kids'], description: 'Pixar veya Disney.' },
  { id: 'w13', title: 'True Crime (Suç)', icon: '🔪', tags: ['activity', 'lazy', 'home', 'thrill'], description: 'Seri katil belgeselleri.' },
  { id: 'w14', title: 'Bilim Kurgu', icon: '👽', tags: ['activity', 'lazy', 'home', 'scifi'], description: 'Beyin yakan filmler.' },
  { id: 'w15', title: 'Futbol Maçı Özeti', icon: '⚽', tags: ['activity', 'lazy', 'home', 'sport'], description: 'Tartışmalı pozisyonlar.' }
];

// SİHİRBAZ SORULARI (AYNI KALABİLİR)
export type QuestionType = {
  id: string;
  text: string;
  options: { label: string; value: string; nextStep: string | 'FINISH' }[];
};

export const WIZARD_STEPS: Record<string, QuestionType> = {
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
      { label: 'Sıkıldım, Aktivite Lazım 🥱', value: 'bored', nextStep: 'ENERGY' },
      { label: 'Kafamı Dinleyeceğim 🧘', value: 'relax', nextStep: 'LOCATION_HOME' },
    ]
  },
  'MOOD_GROUP': {
    id: 'step2_group',
    text: 'Ekibin havası nasıl?',
    options: [
      { label: 'Herkes Açlıktan Ölüyor 🍕', value: 'hungry', nextStep: 'BUDGET' },
      { label: 'Eğlenmek İstiyoruz 🥳', value: 'fun', nextStep: 'ENERGY' },
      { label: 'Laklak Yapalım 🗣️', value: 'talk', nextStep: 'LOCATION_OUT' },
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
    text: 'Nerede takılmak istersin?',
    options: [
      { label: 'Evden çıkmam 🏠', value: 'home', nextStep: 'FINISH' },
      { label: 'Belki balkona çıkarız 🌇', value: 'home', nextStep: 'FINISH' },
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