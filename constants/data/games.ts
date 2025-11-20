import { ItemType } from '../types';

export const GAME_DATA: ItemType[] = [
  // --- Mevcut ve Sürekli Popüler Olanlar (Rekabetçi, MMO, Sandbox) ---
  { id: 'g1', title: 'Valorant', icon: '🔫', tags: ['game', 'home', 'group', 'pc', 'fps', 'rekabetçi', 'e-spor'], description: 'Rank kasma zamanı, entry fragger ol. 5v5 taktiksel nişancı.' },
  { id: 'g2', title: 'League of Legends (LoL)', icon: '⚔️', tags: ['game', 'home', 'group', 'pc', 'moba', 'rekabetçi', 'e-spor'], description: 'Yeni meta ve şampiyonlarla zirveye oyna. 5v5 stratejik savaş.' },
  { id: 'g3', title: 'Counter-Strike 2 (CS2)', icon: '💣', tags: ['game', 'home', 'group', 'pc', 'fps', 'rekabetçi', 'e-spor'], description: 'Taktiksel nişancılığın zirvesi, Source 2 motoruyla rekabeti artır.' },
  { id: 'g4', title: 'Grand Theft Auto V (GTA V RP)', icon: '🚗', tags: ['game', 'home', 'pc', 'rpg', 'rol yapma', 'açık dünya'], description: 'Türk sunucularında rol yapma (RP) eğlencesine katıl, kendi hikayeni yaz.' },
  { id: 'g5', title: 'Minecraft', icon: '⛏️', tags: ['game', 'home', 'pc', 'hayatta kalma', 'sandbox', 'yaratıcılık'], description: 'Yaratıcılığını konuştur, bloklarla devasa yapılar inşa et.' },
  { id: 'g6', title: 'Fortnite', icon: '🎯', tags: ['game', 'home', 'pc', 'battle royale', 'aksiyon', 'ücretsiz'], description: 'İnşa et, savaş ve ayakta kalan son kişi ol. Kreatif modları keşfet.' },
  { id: 'g7', title: 'Apex Legends', icon: '🚀', tags: ['game', 'home', 'group', 'pc', 'battle royale', 'fps', 'ücretsiz'], description: 'Efsaneni seç, takımınla birlikte arenaya hükmet. Hızlı tempolu.' },
  { id: 'g8', title: 'Dota 2', icon: '🛡️', tags: ['game', 'home', 'group', 'pc', 'moba', 'rekabetçi'], description: 'Derin strateji ve mekaniklerle zorlu MOBA deneyimi.' },
  { id: 'g9', title: 'Roblox', icon: '🧱', tags: ['game', 'pc', 'çocuk', 'sandbox', 'ücretsiz'], description: 'Milyonlarca kullanıcı yapımı oyunu keşfet veya kendi oyununu yarat.' },
  { id: 'g10', title: 'PUBG: Battlegrounds', icon: '🚁', tags: ['game', 'home', 'pc', 'battle royale', 'hayatta kalma'], description: 'Oyun dünyasına battle royale modunu getiren efsane. Son kalan sen ol.' },
  { id: 'g11', title: 'Genshin Impact', icon: '🌟', tags: ['game', 'home', 'pc', 'rpg', 'açık dünya', 'anime', 'ücretsiz'], description: 'Teyvat dünyasını keşfet, elementleri kontrol et ve gizemleri çöz.' },
  { id: 'g12', title: 'Metin2', icon: '🐉', tags: ['game', 'pc', 'mmo', 'rpg', 'nostalji'], description: 'Efsanevi krallık savaşları devam ediyor. Ejderhalara karşı savaş.' },
  { id: 'g13', title: 'Zula', icon: '🇹🇷', tags: ['game', 'home', 'group', 'pc', 'fps', 'yerel'], description: 'Türkiye haritalarında geçen yerli FPS oyunu. Rekabete katıl.' },
  { id: 'g14', title: 'Elden Ring', icon: '🔥', tags: ['game', 'pc', 'rpg', 'soulslike', 'açık dünya'], description: 'FromSoftware’in destansı açık dünya RPG’si. Zorlu dövüş sanatında ustalaş.' },
  { id: 'g15', title: 'Cyberpunk 2077', icon: '🌃', tags: ['game', 'pc', 'rpg', 'aksiyon', 'hikaye'], description: 'Night City’nin fütüristik dünyasına dal. V olarak siber maceraya atıl.' },

  // --- 2025 Yılı Çıkışlı/Beklenen Oyunlar ---
  { id: 'g16', title: 'Grand Theft Auto VI (GTA VI)', icon: '🌴', tags: ['game', 'pc', 'beklenen', 'açık dünya', 'aksiyon'], description: 'Vice City\'e geri dön ve Rockstar\'ın en büyük açık dünyasını keşfet.' },
  { id: 'g17', title: 'Assassin\'s Creed Shadows', icon: '🥷', tags: ['game', 'pc', 'beklenen', 'aksiyon', 'rpg'], description: 'Feodal Japonya\'da Samuray veya Ninja olarak oyna. Serinin yeni heyecanı.' },
  { id: 'g18', title: 'Kingdom Come: Deliverance II', icon: '🏹', tags: ['game', 'pc', 'beklenen', 'rpg', 'orta çağ'], description: 'Gerçekçi Orta Çağ deneyimi, büyük bir açık dünya ve hikaye seni bekliyor.' },
  { id: 'g19', title: 'DOOM: The Dark Ages', icon: '⛓️', tags: ['game', 'pc', 'beklenen', 'fps', 'aksiyon'], description: 'Doom Slayer\'ın kökenlerini keşfet, şiddetli bir aksiyon fırtınasına hazırlan.' },
  { id: 'g20', title: 'Monster Hunter Wilds', icon: '🐉', tags: ['game', 'pc', 'beklenen', 'aksiyon', 'rpg'], description: 'Devasa canavarları avla, değişen dinamik çevreyi tecrübe et.' },
  { id: 'g21', title: 'Civilization VII', icon: '🏛️', tags: ['game', 'pc', 'beklenen', 'strateji', 'sıra tabanlı'], description: 'Yeni özelliklerle en büyük imparatorluğunu kur ve zamanın sınavından geç.' },
  { id: 'g22', title: 'Death Stranding 2: On the Beach', icon: '👶', tags: ['game', 'pc', 'beklenen', 'macera', 'hikaye'], description: 'Hideo Kojima imzalı sıra dışı macera devam ediyor. Sam Porter Bridges geri dönüyor.' },
  { id: 'g23', title: 'The Elder Scrolls VI', icon: '📜', tags: ['game', 'pc', 'beklenen', 'rpg', 'açık dünya', 'fantastik'], description: 'Bethesda\'nın efsanevi RPG serisinin merakla beklenen yeni halkası. Yeni toprakları keşfet.' },
  { id: 'g24', title: 'Fable', icon: '🧚', tags: ['game', 'pc', 'beklenen', 'rpg', 'fantastik'], description: 'Albion efsanesi geri dönüyor. Seçimlerinle şekillenen bir dünya.' },
  { id: 'g25', title: 'Dragon Age: Dreadwolf', icon: '🐺', tags: ['game', 'pc', 'beklenen', 'rpg', 'fantastik'], description: 'BioWare\'in fantastik evreninde yeni bir macera. Solas ile yüzleş.' },

  // --- Diğer Popüler Türler (Simülasyon, Strateji, Hayatta Kalma) ---
  { id: 'g26', title: 'Rust', icon: '🔨', tags: ['game', 'pc', 'hayatta kalma', 'mmo', 'multiplayer'], description: 'Açık dünyada hayatta kal, üs inşa et ve diğer oyunculara karşı savaş.' },
  { id: 'g27', title: 'The Sims 4', icon: '🏠', tags: ['game', 'pc', 'simülasyon', 'yaşam'], description: 'Sanal karakterler yarat, hayatlarını yönet ve hayallerini gerçekleştir.' },
  { id: 'g28', title: 'Hearts of Iron IV (HOI4)', icon: '🎖️', tags: ['game', 'pc', 'strateji', 'tarihsel'], description: '2. Dünya Savaşı\'nda bir ülkenin kontrolünü al, askeri ve siyasi stratejini yönet.' },
  { id: 'g29', title: 'Red Dead Redemption 2', icon: '🤠', tags: ['game', 'pc', 'açık dünya', 'aksiyon', 'western'], description: 'Vahşi Batı\'nın destansı hikayesi. Arthur Morgan olarak kanun kaçağı hayatını yaşa.' },
  { id: 'g30', title: 'Football Manager 2025', icon: '⚽', tags: ['game', 'pc', 'simülasyon', 'spor', 'strateji'], description: 'Kendi takımını yönet, taktiklerini belirle ve zafere ulaş.' },
  { id: 'g31', title: 'Diablo IV', icon: '😈', tags: ['game', 'pc', 'rpg', 'aksiyon', 'hack and slash'], description: 'Karanlık ve gotik dünyada iblislere karşı savaş, sonsuz ganimet peşinde koş.' },
  { id: 'g32', title: 'The Witcher 3: Wild Hunt', icon: '🐺', tags: ['game', 'pc', 'rpg', 'açık dünya', 'hikaye'], description: 'Geralt olarak Canavar Avcısı macerasına atıl. Gelmiş geçmiş en iyi RPG oyunlarından.' },



  { id: 'c1', title: 'God of War Ragnarök', icon: '🐻', tags: ['game', 'ps', 'exclusive', 'aksiyon', 'hikaye'], description: 'Kratos ve Atreus\'un İskandinav mitolojisindeki destansı yolculuğunun finali.' },
  { id: 'c2', title: 'Marvel\'s Spider-Man 2', icon: '🕸️', tags: ['game', 'ps', 'exclusive', 'aksiyon', 'süper kahraman'], description: 'Peter Parker ve Miles Morales ile New York\'un yeni tehditlerine karşı savaş.' },
  { id: 'c3', title: 'Horizon Forbidden West', icon: '🤖', tags: ['game', 'ps', 'exclusive', 'rpg', 'açık dünya'], description: 'Aloy ile makine dünyasının batı sınırlarını keşfet ve gizemi çöz.' },
  { id: 'c4', title: 'Ghost of Tsushima', icon: '⛩️', tags: ['game', 'ps', 'exclusive', 'aksiyon', 'samuray'], description: 'Moğol istilasına karşı savaşan son samuray Jin Sakai\'nin hikayesi.' },
  { id: 'c5', title: 'Demon\'s Souls Remake', icon: '💀', tags: ['game', 'ps', 'exclusive', 'soulslike', 'zorlu'], description: 'Zorlu ve karanlık RGP türünün modern grafikle yeniden doğuşu.' },
  { id: 'c6', title: 'The Last of Us Part I / Part II', icon: '🍄', tags: ['game', 'ps', 'exclusive', 'hikaye', 'hayatta kalma'], description: 'Duygusal derinliği olan post-apokaliptik bir hayatta kalma draması.' },
  { id: 'c7', title: 'Ratchet & Clank: Rift Apart', icon: '👾', tags: ['game', 'ps', 'exclusive', 'platform', 'aksiyon'], description: 'Boyutlar arası atlayışlar yaparak evreni kurtar. Hızlı ve görsel şölenli.' },
  { id: 'c8', title: 'Final Fantasy VII Rebirth', icon: '🗡️', tags: ['game', 'ps', 'exclusive', 'rpg', 'fantastik'], description: 'Efsanevi RPG serisinin yeniden yapım üçlemesinin ikinci bölümü.' },
  { id: 'c9', title: 'Returnal', icon: '🌑', tags: ['game', 'ps', 'exclusive', 'roguelike', 'bilim kurgu'], description: 'Sonsuz bir döngüde mahsur kalan bir astronotun hikayesi. Zorlu ve tekrar oynanabilir.' },
  { id: 'c10', title: 'Gran Turismo 7', icon: '🚦', tags: ['game', 'ps', 'exclusive', 'yarış', 'simülasyon'], description: 'Gerçekçi sürüş deneyimi sunan efsanevi yarış serisinin son halkası.' },

  // --- Xbox Exclusive ve Popüler Olanlar (Series X|S) ---
  { id: 'c11', title: 'Starfield', icon: '🌌', tags: ['game', 'xbox', 'pc', 'exclusive', 'rpg', 'uzay'], description: 'Bethesda\'nın ilk yeni evreni. 1000 gezegeni keşfet ve kendi maceranı yaz.' },
  { id: 'c12', title: 'Forza Horizon 5', icon: '🏎️', tags: ['game', 'xbox', 'pc', 'exclusive', 'yarış', 'açık dünya'], description: 'Meksika\'nın canlı ve dinamik dünyasında yüzlerce arabayla yarış.' },
  { id: 'c13', title: 'Halo Infinite', icon: '💚', tags: ['game', 'xbox', 'pc', 'exclusive', 'fps', 'bilim kurgu'], description: 'Master Chief olarak Zeta Halo\'da insanlığın kaderini belirle.' },
  { id: 'c14', title: 'Gears 5', icon: '⚙️', tags: ['game', 'xbox', 'pc', 'exclusive', 'aksiyon', 'third-person'], description: 'Kait Diaz ile Locust tehdidinin kökenini araştır.' },
  { id: 'c15', title: 'Microsoft Flight Simulator', icon: '✈️', tags: ['game', 'xbox', 'pc', 'simülasyon', 'gerçekçi'], description: 'Dünyanın herhangi bir yerinde ultra gerçekçi uçaklarla uç.' },
  { id: 'c16', title: 'Sea of Thieves', icon: '🏴‍☠️', tags: ['game', 'xbox', 'pc', 'macera', 'multiplayer', 'korsan'], description: 'Arkadaşlarınla korsan ol, hazine avla ve diğer gemilerle savaş.' },
  { id: 'c17', title: 'Hellblade II: Senua\'s Saga', icon: '🧠', tags: ['game', 'xbox', 'pc', 'exclusive', 'aksiyon', 'hikaye'], description: 'Senua\'nın hikayesi devam ediyor. Mitoloji ve psikoloji odaklı görsel şölen.' },
  { id: 'c18', title: 'Fable', icon: '🧚', tags: ['game', 'xbox', 'pc', 'beklenen', 'rpg', 'fantastik'], description: 'Albion efsanesi geri dönüyor. Seçimlerinle şekillenen bir dünya.' },
  { id: 'c19', title: 'Avowed', icon: '🔮', tags: ['game', 'xbox', 'pc', 'beklenen', 'rpg', 'fantastik'], description: 'Obsidian imzalı büyük bütçeli fantastik evrende geçen RPG.' },
  { id: 'c20', title: 'State of Decay 3', icon: '🧟', tags: ['game', 'xbox', 'pc', 'beklenen', 'hayatta kalma', 'zombi'], description: 'Zombi kıyametinde üs kurma ve hayatta kalma mücadelesi.' },

  // --- Konsol ve PC Çoklu Platform (Genel Popülerlik) ---
  { id: 'c21', title: 'Hogwarts Legacy', icon: '🪄', tags: ['game', 'ps', 'xbox', 'pc', 'rpg', 'fantastik'], description: '1800\'lü yılların Hogwarts\'ında kendi büyücülük hikayeni yarat.' },
  { id: 'c22', title: 'Call of Duty: Black Ops 6', icon: '💥', tags: ['game', 'ps', 'xbox', 'pc', 'fps', 'aksiyon'], description: 'Gelenekselleşmiş yıllık COD heyecanı, soğuk savaş dönemine odaklanıyor.' },
  { id: 'c23', title: 'Resident Evil 4 Remake', icon: '🧟', tags: ['game', 'ps', 'xbox', 'pc', 'korku', 'hayatta kalma'], description: 'Leon Kennedy ile İspanya kırsalında hayatta kalma mücadelesi.' },
  { id: 'c24', title: 'EA Sports FC 25', icon: '🥅', tags: ['game', 'ps', 'xbox', 'pc', 'spor', 'futbol'], description: 'Yıllık futbol simülasyonunun en güncel versiyonu. Kariyer moduna odaklan.' },
  { id: 'c25', title: 'Assassin\'s Creed Shadows', icon: '🥷', tags: ['game', 'ps', 'xbox', 'pc', 'beklenen', 'aksiyon', 'rpg'], description: 'Feodal Japonya\'da Samuray veya Ninja olarak oyna. Serinin yeni heyecanı.' },
  { id: 'c26', title: 'Cyberpunk 2077 (Ultimate Edition)', icon: '🌃', tags: ['game', 'ps', 'xbox', 'pc', 'rpg', 'aksiyon'], description: 'Night City’nin fütüristik dünyasına dal, Phantom Liberty eklentisi dahil.' },
  { id: 'c27', title: 'NBA 2K25', icon: '🏀', tags: ['game', 'ps', 'xbox', 'pc', 'spor', 'basketbol'], description: 'Basketbol simülasyonunun en iyisi. MyCareer moduyla yıldız ol.' },
  { id: 'c28', title: 'Destiny 2', icon: '👽', tags: ['game', 'ps', 'xbox', 'pc', 'fps', 'mmo', 'bilim kurgu'], description: 'Genişleyen evren, yeni eklentiler ve sürekli içerik akışı.' },
  { id: 'c29', title: 'Tekken 8', icon: '👊', tags: ['game', 'ps', 'xbox', 'pc', 'dövüş', 'rekabetçi'], description: 'Dövüş oyunu sevenlerin favorisi. Yeni mekanikler ve karakterler.' },
  { id: 'c30', title: 'Warzone/MWIII', icon: '🪖', tags: ['game', 'ps', 'xbox', 'pc', 'fps', 'battle royale'], description: 'Ücretsiz ve hızlı tempolu büyük çaplı battle royale ve çoklu oyuncu aksiyonu.' },
  { id: 'c31', title: 'Hitman World of Assassination', icon: '🤵', tags: ['game', 'ps', 'xbox', 'pc', 'gizlilik', 'aksiyon'], description: 'Ajan 47 olarak dünyayı dolaş ve yaratıcı suikast görevlerini tamamla.' },
  { id: 'c32', title: 'Metro Exodus', icon: '☢️', tags: ['game', 'ps', 'xbox', 'pc', 'hayatta kalma', 'fps', 'hikaye'], description: 'Nükleer sonrası Rusya\'da trenle yolculuk yaparak hayatta kalma mücadelesi.' },



  { id: 'm1', title: 'PUBG Mobile', icon: '🔫', tags: ['game', 'mobile', 'battle royale', 'aksiyon', 'çoklu oyuncu'], description: 'Mobil cihazlarda klasik Battle Royale deneyimi. Son kalan sen ol.' },
  { id: 'm2', title: 'Mobile Legends: Bang Bang', icon: '⚔️', tags: ['game', 'mobile', 'moba', 'rekabetçi', '5v5'], description: 'Hızlı tempolu mobil MOBA. Takımını kur ve zafer için savaş.' },
  { id: 'm3', title: 'Call of Duty Mobile (CoDM)', icon: '💥', tags: ['game', 'mobile', 'fps', 'aksiyon', 'çoklu oyuncu'], description: 'Call of Duty evreninin mobil versiyonu. Battle Royale ve klasik çoklu oyuncu modları.' },
  { id: 'm4', title: 'Brawl Stars', icon: '🌟', tags: ['game', 'mobile', 'aksiyon', 'supercell', 'kısa maçlar'], description: 'Supercell\'den hızlı 3v3 savaşlar ve çeşitli oyun modları.' },
  { id: 'm5', title: 'Garena Free Fire', icon: '🔥', tags: ['game', 'mobile', 'battle royale', 'hızlı maçlar', 'hafif'], description: 'Düşük sistem gereksinimleriyle popüler Battle Royale.' },
  { id: 'm6', title: 'Wild Rift (LoL Mobile)', icon: '🌀', tags: ['game', 'mobile', 'moba', 'rekabetçi', 'e-spor'], description: 'League of Legends deneyimini mobile taşıyan rekabetçi oyun.' },
  { id: 'm7', title: 'Clash Royale', icon: '👑', tags: ['game', 'mobile', 'strateji', 'kart', 'supercell'], description: 'Kart toplama ve kule savunma mekaniğini birleştiren strateji oyunu.' },
  
  // --- RPG ve Hikaye Odaklılar ---
  { id: 'm8', title: 'Genshin Impact Mobile', icon: '✨', tags: ['game', 'mobile', 'rpg', 'açık dünya', 'anime', 'gacha'], description: 'Geniş açık dünya RPG. Teyvat\'ı keşfet ve element ustası ol.' },
  { id: 'm9', title: 'Honkai: Star Rail', icon: '🚀', tags: ['game', 'mobile', 'rpg', 'sıra tabanlı', 'bilim kurgu'], description: 'HoYoverse\'den yeni nesil uzay temalı sıra tabanlı RPG.' },
  { id: 'm10', title: 'Diablo Immortal', icon: '😈', tags: ['game', 'mobile', 'rpg', 'hack and slash', 'mmo'], description: 'Diablo evrenini mobile taşıyan aksiyon RPG. Sonsuz ganimet peşinde koş.' },
  { id: 'm11', title: 'Black Desert Mobile', icon: '🐎', tags: ['game', 'mobile', 'mmo', 'rpg', 'açık dünya'], description: 'Yüksek grafikli ve detaylı MMORPG deneyimi.' },
  { id: 'm12', title: 'AFK Arena', icon: '🛡️', tags: ['game', 'mobile', 'rpg', 'idle', 'fantastik'], description: 'Basit oynanışa sahip, kahraman toplama odaklı RPG.' },

  // --- Strateji, Simülasyon ve Yapı Yönetimi ---
  { id: 'm13', title: 'Clash of Clans', icon: '🏘️', tags: ['game', 'mobile', 'strateji', 'base building', 'supercell'], description: 'Köyünü inşa et, birliklerini eğit ve diğer klanlara saldır.' },
  { id: 'm14', title: 'Lords Mobile', icon: '🏰', tags: ['game', 'mobile', 'strateji', 'rpg', 'çoklu oyuncu'], description: 'Krallığını kur, kahraman topla ve küresel savaşlara katıl.' },
  { id: 'm15', title: 'Rise of Kingdoms', icon: '🌍', tags: ['game', 'mobile', 'strateji', 'tarihsel', 'harita'], description: 'Tarihi medeniyetleri yönet ve geniş haritada imparatorluğunu büyüt.' },
  { id: 'm16', title: 'SimCity BuildIt', icon: '🏗️', tags: ['game', 'mobile', 'simülasyon', 'şehir kurma'], description: 'Kendi şehrini tasarla ve yönet. Vatandaşlarını mutlu et.' },
  { id: 'm17', title: 'Hay Day', icon: '🌾', tags: ['game', 'mobile', 'simülasyon', 'çiftlik', 'rahatlatıcı'], description: 'Kendi çiftliğini yönet, ürün yetiştir ve komşularla ticaret yap.' },
  
  // --- Hyper Casual ve Bulmaca ---
  { id: 'm18', title: 'Candy Crush Saga', icon: '🍬', tags: ['game', 'mobile', 'bulmaca', 'match-3', 'casual'], description: 'Tarihin en popüler bulmaca oyunu. Şekerleri eşleştir.' },
  { id: 'm19', title: 'Subway Surfers', icon: '🏃', tags: ['game', 'mobile', 'aksiyon', 'sonsuz koşu', 'casual'], description: 'Hızlı ve renkli sonsuz koşu oyunu. Trenlerden kaç.' },
  { id: 'm20', title: 'Gardenscapes/Homescapes', icon: '🏡', tags: ['game', 'mobile', 'bulmaca', 'hikaye', 'casual'], description: 'Match-3 bulmacaları çözerek ev veya bahçe yenileme.' },
  { id: 'm21', title: 'Royal Match', icon: '🧩', tags: ['game', 'mobile', 'bulmaca', 'match-3', 'popüler'], description: 'Son dönemin en popüler Match-3 oyunu. Krallığı yenile.' },
  { id: 'm22', title: 'Among Us!', icon: '🧑‍🚀', tags: ['game', 'mobile', 'sosyal', 'bulmaca', 'çoklu oyuncu'], description: 'Arkadaşlarınla oyna, mürettebat arasında haini bul.' },
  
  // --- Spor ve Niş Oyunlar ---
  { id: 'm23', title: 'Dream League Soccer (DLS)', icon: '⚽', tags: ['game', 'mobile', 'spor', 'futbol', 'simülasyon'], description: 'Kendi takımını kur ve rüya liginde zirveye oyna.' },
  { id: 'm24', title: 'eFootball 2025 Mobile', icon: '🥅', tags: ['game', 'mobile', 'spor', 'futbol', 'konami'], description: 'Konsol kalitesinde gerçekçi futbol deneyimi.' },
  { id: 'm25', title: 'Asphalt 9: Legends', icon: '🌃', tags: ['game', 'mobile', 'yarış', 'aksiyon', 'hızlı'], description: 'Yüksek grafikli, arcade tarzı yarış oyunu.' },
  { id: 'm26', title: 'CarX Drift Racing 2', icon: '🚗', tags: ['game', 'mobile', 'yarış', 'simülasyon', 'drift'], description: 'Mobil cihazlarda en iyi drift simülasyonlarından biri.' },

  // --- Yeni ve Trend Olanlar (2025) ---
  { id: 'm27', title: 'Wuthering Waves', icon: '🌪️', tags: ['game', 'mobile', 'rpg', 'açık dünya', 'gacha', 'beklenen'], description: 'Yeni nesil aksiyon mekaniklerine sahip açık dünya RPG.' },
  { id: 'm28', title: 'Monopoly GO!', icon: '💰', tags: ['game', 'mobile', 'masa oyunu', 'casual', 'popüler'], description: 'Klasik Monopoly oyununun hızlı ve sosyal mobil versiyonu.' },
  { id: 'm29', title: 'Pokémon GO', icon: '🥚', tags: ['game', 'mobile', 'artırılmış gerçeklik', 'rpg', 'macera'], description: 'Dışarı çık ve Artırılmış Gerçeklik ile Pokemon yakala.' },
  { id: 'm30', title: 'Toca Life World', icon: '👧', tags: ['game', 'mobile', 'eğitim', 'rol yapma', 'çocuk'], description: 'Çocuklar için yaratıcılığı teşvik eden popüler bir rol yapma oyunu.' },
];