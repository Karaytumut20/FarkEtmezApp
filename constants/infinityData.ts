// constants/infinityData.ts

export type OptionType = {
  id: string;
  text: string;
  tags?: string[]; // 'cheap', 'outdoor', 'lazy' vb.
};

export type CategoryType = {
  id: string;
  title: string;
  icon: string;
  description: string;
  color: string;
  data: OptionType[];
};

export const INFINITY_DATA: CategoryType[] = [
  {
    id: 'food_master',
    title: 'Gurme Masası',
    icon: '🍖',
    description: 'Açlık krizine kesin çözüm.',
    color: '#FF6B6B',
    data: [
      { id: 'f1', text: 'İskender (Tereyağlı) 🥩' }, { id: 'f2', text: 'Adana Kebap & Şalgam 🌶️' },
      { id: 'f3', text: 'Bol Malzemos Pizza 🍕' }, { id: 'f4', text: 'Ev Yapımı Hamburger 🍔' },
      { id: 'f5', text: 'Çıtır Lahmacun (Limonlu) 🍋' }, { id: 'f6', text: 'Sushi & Noodle Gecesi 🍣' },
      { id: 'f7', text: 'Sokak Lezzeti: Kokoreç 🥖' }, { id: 'f8', text: 'Tavuk Döner & Ayran 🌯' },
      { id: 'f9', text: 'Kumpir (Full Karışık) 🥔' }, { id: 'f10', text: 'Mantı (Sarımsaklı) 🥟' },
      { id: 'f11', text: 'Çiğ Köfte Dürüm (Acılı) 🌯' }, { id: 'f12', text: 'Kanat & Patates 🍗' },
      { id: 'f13', text: 'Etli Ekmek 🥘' }, { id: 'f14', text: 'Pide (Kaşarlı/Kuşbaşılı) 🥙' },
      { id: 'f15', text: 'Tantuni (Yoğurtlu) 🌮' }, { id: 'f16', text: 'Köfte & Piyaz 🥘' },
      { id: 'f17', text: 'Midye Dolma (Yarışma Yapın) 🦪' }, { id: 'f18', text: 'Menemen (Soğanlı/Soğansız) 🍳' },
      { id: 'f19', text: 'Waffle (Bol Çikolata) 🧇' }, { id: 'f20', text: 'Künefe & Süt 🧀' },
      { id: 'f21', text: 'Islak Hamburger (Taksim Usulü) 🍔' }, { id: 'f22', text: 'Beyran Çorbası 🥣' },
      { id: 'f23', text: 'Cağ Kebabı 🍢' }, { id: 'f24', text: 'Zeytinyağlı Sarma 🍇' },
      { id: 'f25', text: 'Kumru (Çeşme Usulü) 🥪' }, { id: 'f26', text: 'Fırın Sütlaç 🍮' },
      { id: 'f27', text: 'Taco & Nachos 🌮' }, { id: 'f28', text: 'Falafel Dürüm (Vegan) 🧆' },
      { id: 'f29', text: 'Makarna (Bol Soslu) 🍝' }, { id: 'f30', text: 'Börek (Kıymalı/Peynirli) 🥧' },
      { id: 'f31', text: 'Kuru Fasulye & Pilav 🍛' }, { id: 'f32', text: 'İçli Köfte 🍘' },
      { id: 'f33', text: 'Hünkar Beğendi 🍆' }, { id: 'f34', text: 'Profiterol 🍫' },
      { id: 'f35', text: 'San Sebastian Cheesecake 🍰' }
    ]
  },
  {
    id: 'watch_master',
    title: 'Sinema Kulübü',
    icon: '🎬',
    description: 'Netflix/YouTube başında saatlerce arama yapma.',
    color: '#4ECDC4',
    data: [
      { id: 'w1', text: 'Korku Filmi (Işıkları Kapat) 👻' }, { id: 'w2', text: '90lar Aksiyon Filmi 💥' },
      { id: 'w3', text: 'Zihin Yakan Bilim Kurgu 👽' }, { id: 'w4', text: 'Göz Yaşartan Drama 🎭' },
      { id: 'w5', text: 'Eski Türk Komedisi (Kemal Sunal) 🎥' }, { id: 'w6', text: 'Suç & Gizem Belgeseli 🕵️‍♂️' },
      { id: 'w7', text: 'Anime Filmi (Ghibli vb.) 🐉' }, { id: 'w8', text: 'Marvel/DC Maratonu 🦸' },
      { id: 'w9', text: 'Stand-up Gösterisi İzle 🎤' }, { id: 'w10', text: 'Kısa YouTube Belgeselleri 📹' },
      { id: 'w11', text: 'Harry Potter / Yüzüklerin Efendisi 🧙‍♂️' }, { id: 'w12', text: 'Zombi İstilası Temalı Film 🧟' },
      { id: 'w13', text: 'Tarantino Filmleri 🩸' }, { id: 'w14', text: 'Animasyon (Pixar/Disney) 🧸' },
      { id: 'w15', text: 'Gençlik Dizisi (Netflix) 🍿' }, { id: 'w16', text: 'Kore Dizisi (K-Drama) 🇰🇷' },
      { id: 'w17', text: 'Yemek Yarışması (Masterchef) 👨‍🍳' }, { id: 'w18', text: 'Survivor Kaos Anları 🌴' },
      { id: 'w19', text: 'Doğa Belgeseli 🌍' }, { id: 'w20', text: 'Dedektiflik Dizisi 🔍' },
      { id: 'w21', text: 'Müzikal Film 💃' }, { id: 'w22', text: 'Psikolojik Gerilim 🧠' },
      { id: 'w23', text: 'Tarihi Savaş Filmi ⚔️' }, { id: 'w24', text: 'Aşk-ı Memnu Tekrarları 💍' },
      { id: 'w25', text: 'Gibi (Exxen) 🗿' }, { id: 'w26', text: 'Kurtlar Vadisi İlk 97 Bölüm 🔫' }
    ]
  },
  {
    id: 'activity_social',
    title: 'Aktivite & Eğlence',
    icon: '🎉',
    description: 'Evde oturmaktan sıkılanlara.',
    color: '#FFE66D',
    data: [
      { id: 'a1', text: 'Sahilde Uzun Yürüyüş 🌊' }, { id: 'a2', text: 'Bowling Kapışması 🎳' },
      { id: 'a3', text: 'En Yakın Kahveciye Git ☕' }, { id: 'a4', text: 'Kutu Oyunu Oyna (Monopoly) 🎲' },
      { id: 'a5', text: 'Bilardo Oyna 🎱' }, { id: 'a6', text: 'Go-Kart Yarışı Yap 🏎️' },
      { id: 'a7', text: 'Lunaparka Git (Korku Tüneli) 🎡' }, { id: 'a8', text: 'Bisiklet Kirala ve Sür 🚲' },
      { id: 'a9', text: 'Sessiz Sinema Oyna 🤫' }, { id: 'a10', text: 'Karaoke Yap (Bağıra Çağıra) 🎤' },
      { id: 'a11', text: 'Birlikte Yemek Yapın 👨‍🍳' }, { id: 'a12', text: 'Puzzle Başla (1000 Parça) 🧩' },
      { id: 'a13', text: 'Müze/Sergi Gez 🏛️' }, { id: 'a14', text: 'Escape Room (Kaçış Evi) 🔐' },
      { id: 'a15', text: 'Paintball / Laser Tag 🔫' }, { id: 'a16', text: 'Piknik Yap (Termosunu Al) 🧺' },
      { id: 'a17', text: 'Vapur Turu Yap 🚢' }, { id: 'a18', text: 'AVM Vitrinlerine Bak 🛍️' },
      { id: 'a19', text: 'Fotoğraf Yürüyüşüne Çık 📸' }, { id: 'a20', text: 'Nargile Cafe (Közcü!) 💨' },
      { id: 'a21', text: 'Playstation Cafe (FIFA/PES) 🎮' }, { id: 'a22', text: 'Hamam / Sauna Keyfi 🧖‍♂️' },
      { id: 'a23', text: 'Balık Tutmaya Git 🎣' }, { id: 'a24', text: 'Sahilde Çekirdek Çitle 🌻' }
    ]
  },
  {
    id: 'deep_talk',
    title: 'Derin Mevzular',
    icon: '💬',
    description: 'Sessizliği boz, birbirinizi tanıyın.',
    color: '#A06CD5',
    data: [
      { id: 'd1', text: 'Çocukluğundaki en utanç verici anın ne? 😳' }, 
      { id: 'd2', text: 'Piyangodan büyük ikramiye çıksa ilk ne alırsın? 💸' },
      { id: 'd3', text: 'Hayatındaki en büyük pişmanlığın ne? 🤔' },
      { id: 'd4', text: 'Bir günlüğüne görünmez olsan ne yaparsın? 👻' },
      { id: 'd5', text: 'Hangi ünlüyle bir gün geçirmek isterdin? 🌟' },
      { id: 'd6', text: 'Dünyada bir şeyi değiştirebilsen bu ne olurdu? 🌍' },
      { id: 'd7', text: 'Issız bir adaya düşsen yanına alacağın 3 şey? 🏝️' },
      { id: 'd8', text: 'En son ne zaman ve neden ağladın? 😢' },
      { id: 'd9', text: 'Asla affetmeyeceğin bir hata nedir? 🚫' },
      { id: 'd10', text: 'Gelecekteki kendine bir not bırak. 📝' },
      { id: 'd11', text: 'Hayatının filmi çekilse adı ne olurdu? 🎬' },
      { id: 'd12', text: 'En garip yeteneğin ne? 🤹‍♂️' },
      { id: 'd13', text: 'Ölümsüz olmak ister miydin? Neden? 🧛' },
      { id: 'd14', text: 'En sevdiğin çocukluk çizgi filmi? 📺' },
      { id: 'd15', text: 'Bir hayvan olsan hangisi olurdun? 🦁' },
      { id: 'd16', text: 'Aşk mı, para mı, kariyer mi? ❤️💰💼' }
    ]
  },
  {
    id: 'dare_master',
    title: 'Cesaretin Var mı?',
    icon: '🔥',
    description: 'Sıkılanlar için adrenalin.',
    color: '#FF9F43',
    data: [
      { id: 'dr1', text: 'Son attığın 3 mesajı sesli oku. 📱' },
      { id: 'dr2', text: 'Rehberindeki rastgele birini ara ve havla. 🐕' },
      { id: 'dr3', text: '1 dakika boyunca plank yap. 💪' },
      { id: 'dr4', text: 'Yanındakinin taklidini yap. 🤡' },
      { id: 'dr5', text: 'Instagram hikayende utanç verici bir foto paylaş. 📸' },
      { id: 'dr6', text: 'Bir kaşık limon suyu iç (veya ekşi bir şey ye). 🍋' },
      { id: 'dr7', text: 'Pencereyi aç ve "Ben bir patatesim!" diye bağır. 🥔' },
      { id: 'dr8', text: 'Yanındakinin ayağını kokla. 🦶' },
      { id: 'dr9', text: 'Galerindeki 10. fotoğrafı herkese göster. 🖼️' },
      { id: 'dr10', text: 'Bebek sesiyle bir şarkı söyle. 👶' },
      { id: 'dr11', text: 'Eski sevgilini çaldır kapat (Riskli!). 📞' },
      { id: 'dr12', text: '1 dakika boyunca gözlerini kırpmadan dur. 👀' },
      { id: 'dr13', text: 'Kendi kendine dans et (müziksiz). 💃' },
      { id: 'dr14', text: 'Yanındakine masaj yap. 💆‍♂️' },
      { id: 'dr15', text: 'Ağzına su al ve güldürmeye çalışmalarına dayan. 💦' }
    ]
  }
];