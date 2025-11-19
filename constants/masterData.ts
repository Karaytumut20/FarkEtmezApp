// constants/masterData.ts

export type ItemType = {
  id: string;
  title: string;
  icon: string;
  tags: string[]; // Algoritma için anahtar kelimeler
  description: string;
};

export const MASTER_DATA: ItemType[] = [
  // =================================================================
  // 🌯 SOKAK LEZZETLERİ & FAST FOOD (Hızlı, Ucuz, Doyurucu)
  // =================================================================
  { id: 'f1', title: 'Tavuk Döner & Ayran', icon: '🌯', tags: ['food', 'hungry', 'low-budget', 'fast', 'student'], description: 'Bol soslu, çift lavaş, turşu yanında.' },
  { id: 'f2', title: 'Yarım Ekmek Kokoreç', icon: '🥖', tags: ['food', 'hungry', 'mid-budget', 'street', 'night'], description: 'İri kıyım, bol kimyonlu, çeyrek yetmez.' },
  { id: 'f3', title: 'Midye Dolma (30 Tane)', icon: '🦪', tags: ['food', 'snack', 'low-budget', 'street', 'group'], description: 'Limonu sık, durmadan göm. Saymayı bırak.' },
  { id: 'f4', title: 'Islak Hamburger', icon: '🍔', tags: ['food', 'snack', 'low-budget', 'street', 'fast'], description: 'Taksim usulü, en az 3 tane yenecek.' },
  { id: 'f5', title: 'Çiğ Köfte Dürüm', icon: '🍋', tags: ['food', 'hungry', 'low-budget', 'spicy', 'vegan'], description: 'Nar ekşisi sel olsun aksın, çift lavaş.' },
  { id: 'f6', title: 'Tavuk Pilav & Turşu', icon: '🍚', tags: ['food', 'hungry', 'low-budget', 'street', 'fast'], description: 'Seyyar arabadan, bol karabiberli.' },
  { id: 'f7', title: 'Ortaköy Kumpir', icon: '🥔', tags: ['food', 'hungry', 'mid-budget', 'outdoor'], description: 'İçine her malzemeden koydur, karıştır.' },
  { id: 'f8', title: 'Balık Ekmek', icon: '🐟', tags: ['food', 'hungry', 'low-budget', 'outdoor', 'view'], description: 'Eminönü havasında, bol soğanlı.' },
  { id: 'f9', title: 'Goralı / Sosisli', icon: '🌭', tags: ['food', 'snack', 'low-budget', 'fast'], description: 'Salçalı soslu klasik büfe lezzeti.' },
  { id: 'f10', title: 'Pide (Kuşbaşılı)', icon: '🥙', tags: ['food', 'hungry', 'mid-budget', 'group'], description: 'Kenarları kıtır, tereyağı üzerinde erisin.' },
  { id: 'f11', title: 'Lahmacun (Acılı)', icon: '🍕', tags: ['food', 'hungry', 'mid-budget', 'group'], description: 'İçine köz patlıcan koyup dür.' },
  { id: 'f12', title: 'Adana Dürüm', icon: '🌶️', tags: ['food', 'hungry', 'mid-budget', 'spicy'], description: 'Acısı sonradan çıkar, şalgamla iç.' },
  { id: 'f13', title: 'Çeşme Kumru', icon: '🥪', tags: ['food', 'hungry', 'mid-budget', 'fast'], description: 'Sayas peynirli, bol malzemeli.' },
  { id: 'f14', title: 'Tantuni (Yoğurtlu)', icon: '🌮', tags: ['food', 'hungry', 'mid-budget', 'fast'], description: 'Mersin ateşi, yağlı ve leziz. Çift lavaş.' },
  { id: 'f15', title: 'Arnavut Ciğeri', icon: '🧅', tags: ['food', 'hungry', 'mid-budget', 'street'], description: 'Sumaklı soğanla efsane olur.' },
  { id: 'f16', title: 'Boyoz & Yumurta', icon: '🥚', tags: ['food', 'snack', 'low-budget', 'morning'], description: 'İzmir kahvaltısının kralı.' },
  { id: 'f17', title: 'Gözleme & Çay', icon: '🥞', tags: ['food', 'snack', 'low-budget', 'cafe'], description: 'Patatesli, kaşarlı, otlu karışık.' },
  { id: 'f18', title: 'Kır Pidesi', icon: '🥟', tags: ['food', 'snack', 'low-budget', 'fast'], description: 'Sıcak sıcak, yanında soğuk meyve suyu.' },
  { id: 'f19', title: 'Sarıyer Böreği', icon: '🥧', tags: ['food', 'hungry', 'mid-budget', 'morning'], description: 'Çıtır çıtır, kıyması bol, yağı el yakar.' },
  { id: 'f20', title: 'Patso (Kaşarlı)', icon: '🍟', tags: ['food', 'hungry', 'low-budget', 'student'], description: 'Ekmek arası karbonhidrat şoku.' },
  { id: 'f21', title: 'Köfte Ekmek', icon: '🚌', tags: ['food', 'hungry', 'low-budget', 'street'], description: 'Maç çıkışı seyyar arabada.' },
  { id: 'f22', title: 'Taco & Nachos', icon: '🌮', tags: ['food', 'snack', 'mid-budget', 'group'], description: 'Meksika ateşi, guacamole soslu.' },
  { id: 'f23', title: 'Noodle Box', icon: '🥡', tags: ['food', 'hungry', 'mid-budget', 'fast'], description: 'Çin usulü, soya soslu, çubukla ye.' },
  { id: 'f24', title: 'Waffle', icon: '🧇', tags: ['food', 'dessert', 'mid-budget', 'cafe'], description: 'Meyve bombası, çikolata krizi.' },

  // =================================================================
  // 🥘 EV YEMEĞİ & GELENEKSEL (Sıcak ve Samimi)
  // =================================================================
  { id: 'e1', title: 'Kuru Fasulye & Pilav', icon: '🍲', tags: ['food', 'hungry', 'mid-budget', 'home'], description: 'Milli ikilimiz, yanında turşu şart.' },
  { id: 'e2', title: 'Mantı', icon: '🥟', tags: ['food', 'hungry', 'mid-budget', 'home'], description: 'Sarımsaklı yoğurt, naneli yağ sosu.' },
  { id: 'e3', title: 'Karnıyarık', icon: '🍆', tags: ['food', 'hungry', 'mid-budget', 'home'], description: 'Patlıcanın en güzel hali, yanında cacık.' },
  { id: 'e4', title: 'Zeytinyağlı Sarma', icon: '🍇', tags: ['food', 'snack', 'mid-budget', 'home'], description: 'Limon sıkıp tencereyi bitir.' },
  { id: 'e5', title: 'Mercimek Köftesi', icon: '🧆', tags: ['food', 'snack', 'low-budget', 'home', 'group'], description: 'Günlerin vazgeçilmezi, marulla ye.' },
  { id: 'e6', title: 'Menemen', icon: '🍳', tags: ['food', 'hungry', 'low-budget', 'home', 'fast'], description: 'Soğanlı mı soğansız mı tartışmayın, ekmek banın.' },
  { id: 'e7', title: 'İskender Kebap', icon: '🥙', tags: ['food', 'hungry', 'high-budget', 'traditional'], description: 'Tereyağını üzerine cos diye döktür.' },
  { id: 'e8', title: 'Hünkar Beğendi', icon: '👑', tags: ['food', 'hungry', 'high-budget', 'luxury'], description: 'Saraylara layık, patlıcan yatağında et.' },
  { id: 'e9', title: 'Cağ Kebabı', icon: '🥩', tags: ['food', 'hungry', 'high-budget', 'traditional'], description: 'Erzurum usulü, şişleri sayma.' },
  { id: 'e10', title: 'Beyran Çorbası', icon: '🥣', tags: ['food', 'hungry', 'mid-budget', 'spicy'], description: 'Antep usulü, gribi söker atar.' },
  { id: 'e11', title: 'Tarhana Çorbası', icon: '🥄', tags: ['food', 'light', 'low-budget', 'home'], description: 'Anne eli değmiş gibi, şifa.' },
  { id: 'e12', title: 'Lahana Sarması', icon: '🥬', tags: ['food', 'hungry', 'mid-budget', 'home'], description: 'Karadeniz usulü, yoğurtla.' },

  // =================================================================
  // 💎 LÜKS & KEYİF (Maaş Günü / Date)
  // =================================================================
  { id: 'l1', title: 'Serpme Kahvaltı', icon: '🧀', tags: ['food', 'hungry', 'high-budget', 'morning', 'group'], description: 'Masada boş yer kalmasın, çay sınırsız.' },
  { id: 'l2', title: 'Ocakbaşı & Meze', icon: '🍢', tags: ['food', 'hungry', 'high-budget', 'group', 'alcohol'], description: 'Köz kokusu, atom, şakşuka.' },
  { id: 'l3', title: 'Rakı & Balık', icon: '🐟', tags: ['food', 'hungry', 'high-budget', 'group', 'alcohol', 'view'], description: 'Deniz kenarında dertleşmece.' },
  { id: 'l4', title: 'Steakhouse Burger', icon: '🍔', tags: ['food', 'hungry', 'high-budget', 'luxury'], description: 'Eti az pişmiş, karamelize soğanlı.' },
  { id: 'l5', title: 'Sushi Date', icon: '🍣', tags: ['food', 'hungry', 'high-budget', 'luxury', 'duo'], description: 'California Roll ile başla.' },
  { id: 'l6', title: 'İtalyan Pizza', icon: '🍷', tags: ['food', 'hungry', 'high-budget', 'romance'], description: 'İncecik hamur, mozarella, fesleğen.' },
  { id: 'l7', title: 'Künefe & Kaymak', icon: '🥞', tags: ['food', 'dessert', 'mid-budget', 'group'], description: 'Sıcak şerbet, uzayan peynir.' },
  { id: 'l8', title: 'San Sebastian', icon: '🍰', tags: ['food', 'dessert', 'mid-budget', 'cafe'], description: 'Üzerine akışkan çikolata sos.' },
  { id: 'l9', title: 'Fine Dining', icon: '🍽️', tags: ['food', 'hungry', 'high-budget', 'luxury', 'romance'], description: 'Tabakta az yemek, çok sanat.' },

  // =================================================================
  // 🏠 AKTİVİTE - EVDE / TEMBEL (Chill Mode)
  // =================================================================
  { id: 'h1', title: 'Dedikodu Kazanı', icon: '🗣️', tags: ['activity', 'lazy', 'home', 'group', 'talk'], description: 'Kim kiminle ne yapmış? Stalk time.' },
  { id: 'h2', title: 'Korku Gecesi', icon: '👻', tags: ['activity', 'lazy', 'home', 'group', 'thrill'], description: 'Işıkları kapat, Dabbe serisine başla.' },
  { id: 'h3', title: 'Balkon Keyfi', icon: '☕', tags: ['activity', 'lazy', 'home', 'relax'], description: 'Çayını al, geleni geçeni izle, hayatı sorgula.' },
  { id: 'h4', title: 'Telefonda Okey/Batak', icon: '📱', tags: ['activity', 'lazy', 'home', 'solo'], description: 'Seri seri oyna, çip kazan.' },
  { id: 'h5', title: 'Eski Türk Filmi', icon: '🎥', tags: ['activity', 'lazy', 'home', 'family'], description: 'Tosun Paşa veya Süt Kardeşler izle.' },
  { id: 'h6', title: 'Dip Köşe Temizlik', icon: '🧹', tags: ['activity', 'energetic', 'home', 'productive'], description: 'Müziği aç, evi pırıl pırıl yap.' },
  { id: 'h7', title: 'Gardırop Detoksu', icon: '👕', tags: ['activity', 'energetic', 'home', 'productive'], description: 'Giymediklerini ayır, ferahla.' },
  { id: 'h8', title: 'Sanal Menü Turu', icon: '🛵', tags: ['activity', 'lazy', 'home', 'hungry'], description: 'Sipariş verme, sadece yemeklere bakıp hayal kur.' },
  { id: 'h9', title: 'Kedi/Köpek Videoları', icon: '🐈', tags: ['activity', 'lazy', 'home', 'relax'], description: 'YouTube\'a gir, saatlerce çıkama.' },
  { id: 'h10', title: 'Altın Günü Modu', icon: '🥗', tags: ['activity', 'lazy', 'home', 'group', 'food'], description: 'Kısır yap, çay demle, gıybet yap.' },
  { id: 'h11', title: 'Türk Kahvesi & Fal', icon: '🔮', tags: ['activity', 'lazy', 'home', 'duo'], description: 'Faladdin\'e at veya kendin salla.' },
  { id: 'h12', title: 'FIFA / PES Turnuvası', icon: '🎮', tags: ['activity', 'lazy', 'home', 'group'], description: 'Kolu bozuk olan kaybetsin.' },
  { id: 'h13', title: '90lar Türkçe Pop', icon: '🎸', tags: ['activity', 'lazy', 'home', 'relax'], description: 'Tarkan, Mustafa Sandal, dans!' },
  { id: 'h14', title: 'Kutu Oyunu (Monopoly)', icon: '🎲', tags: ['activity', 'lazy', 'home', 'group'], description: 'Arkadaşlarını iflas ettir, kavga çıkar.' },
  { id: 'h15', title: 'Sessiz Sinema', icon: '🤫', tags: ['activity', 'energetic', 'home', 'group'], description: 'En zor filmi anlatmaya çalış.' },
  { id: 'h16', title: 'Cilt Bakımı', icon: 'mask', tags: ['activity', 'lazy', 'home', 'solo'], description: 'Maskeni yap, salatalıkları gözüne koy.' },
  { id: 'h17', title: 'Yoga / Meditasyon', icon: '🧘', tags: ['activity', 'lazy', 'home', 'relax'], description: '10 dakika nefes egzersizi yap.' },
  
  // =================================================================
  // 🌳 AKTİVİTE - DIŞARI / SOSYAL (Gezme Tozma)
  // =================================================================
  { id: 'o1', title: 'Halı Saha Maçı', icon: '⚽', tags: ['activity', 'energetic', 'outdoor', 'group'], description: 'Maç sonu baklavayı kaybeden öder.' },
  { id: 'o2', title: 'Sahilde Yürüyüş', icon: '🌊', tags: ['activity', 'energetic', 'outdoor', 'relax', 'free'], description: 'Çekirdek çitleyerek piyasa yap.' },
  { id: 'o3', title: 'AVM Turu', icon: '🛍️', tags: ['activity', 'lazy', 'indoor', 'walk'], description: 'Klima serinliğinde vitrin bak, hiçbir şey alma.' },
  { id: 'o4', title: 'Nargile Kafe', icon: '💨', tags: ['activity', 'lazy', 'outdoor', 'group', 'smoke'], description: 'Elmalı nane, köz getir abim.' },
  { id: 'o5', title: 'Okey Salonu', icon: '🎲', tags: ['activity', 'lazy', 'indoor', 'group'], description: 'Taş çalma, çaylar şirketten.' },
  { id: 'o6', title: 'Bowling Kapışması', icon: '🎳', tags: ['activity', 'energetic', 'indoor', 'group'], description: 'Topu yan kanala atma rekoru kır.' },
  { id: 'o7', title: 'Sinema Keyfi', icon: '🍿', tags: ['activity', 'lazy', 'indoor', 'group'], description: 'Mısırın en büyüğünü al.' },
  { id: 'o8', title: 'Lunapark Adrenalini', icon: '🎡', tags: ['activity', 'energetic', 'outdoor', 'fun'], description: 'Gondola binip çığlık at, kamikaze yap.' },
  { id: 'o9', title: 'Hamam / Spa', icon: '🧖‍♂️', tags: ['activity', 'lazy', 'indoor', 'relax'], description: 'Kese attır, pamuk gibi ol.' },
  { id: 'o10', title: 'Mangal Partisi', icon: '🍖', tags: ['activity', 'energetic', 'outdoor', 'group', 'food'], description: 'Yellerim yellerim bitmez.' },
  { id: 'o11', title: 'Semt Pazarı', icon: '🍅', tags: ['activity', 'energetic', 'outdoor', 'crowd'], description: 'Akşam pazarı ucuzluğu kovala, taze meyve al.' },
  { id: 'o12', title: 'Balık Tutmak', icon: '🎣', tags: ['activity', 'lazy', 'outdoor', 'relax'], description: 'Galata köprüsünde sabır testi.' },
  { id: 'o13', title: 'Go-Kart', icon: '🏎️', tags: ['activity', 'energetic', 'outdoor', 'fun'], description: 'İçindeki trafik canavarını piste sal.' },
  { id: 'o14', title: 'Müze Gezisi', icon: '🏛️', tags: ['activity', 'energetic', 'indoor', 'culture'], description: 'Müze kartın varsa bedava, kültürlen.' },
  { id: 'o15', title: 'Vapur Sefası', icon: '🚢', tags: ['activity', 'lazy', 'outdoor', 'view'], description: 'Dışarıda otur, martılara simit at.' },
  { id: 'o16', title: 'İnternet Kafe', icon: '💻', tags: ['activity', 'energetic', 'indoor', 'group'], description: 'CS:GO veya LoL kapışması.' },
  { id: 'o17', title: 'Kütüphane', icon: '📚', tags: ['activity', 'lazy', 'indoor', 'quiet'], description: 'Ders çalışır gibi yap, etrafı kes.' },
  { id: 'o18', title: 'Bilardo', icon: '🎱', tags: ['activity', 'energetic', 'indoor', 'group'], description: 'Amerikan mı, 3 bant mı? Şansını dene.' },
  { id: 'o19', title: 'Fasıl Gecesi', icon: '🎻', tags: ['activity', 'energetic', 'indoor', 'high-budget', 'alcohol'], description: 'Dertli şarkılarda ağla, göbek at.' },
  { id: 'o20', title: 'Fotoğraf Turu', icon: '📸', tags: ['activity', 'energetic', 'outdoor', 'art'], description: 'Instagram için malzeme çıkar, gün batımını yakala.' },
  { id: 'o21', title: 'Korku Evi', icon: '🧟', tags: ['activity', 'energetic', 'indoor', 'group', 'thrill'], description: 'Çığlık atma garantili, şifreleri çöz.' },
  { id: 'o22', title: 'Escape Room', icon: '🔐', tags: ['activity', 'energetic', 'indoor', 'group', 'brain'], description: 'Odadan kaçış, zekanı kullan.' },
  { id: 'o23', title: 'Konser', icon: '🎵', tags: ['activity', 'energetic', 'outdoor', 'crowd'], description: 'Sevdiğin grup gelmiş, kaçırma.' },
  { id: 'o24', title: 'Kamp Yap', icon: '⛺', tags: ['activity', 'energetic', 'outdoor', 'nature'], description: 'Şehirden kaç, ateş yak, yıldızları izle.' }
];

// SİHİRBAZ SORULARI (Değişmeden kalabilir, veri ile uyumlu)
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