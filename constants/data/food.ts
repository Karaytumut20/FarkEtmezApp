import { ItemType } from '../types';

export const FOOD_DATA: ItemType[] = [
  // =================================================================
  // 💸 LOW BUDGET (Öğrenci İşi / Uygun Fiyatlı)
  // =================================================================
  { id: 'f_low1', title: 'Tavuk Döner Dürüm', icon: '🌯', tags: ['food', 'hungry', 'low-budget', 'street', 'chicken'], description: 'Bol soslu, çift lavaş, öğrenci dostu.' },
  { id: 'f_low2', title: 'Yarım Ekmek Köfte', icon: '🍔', tags: ['food', 'hungry', 'low-budget', 'street', 'meat'], description: 'Maç önü klasiği, bol soğanlı.' },
  { id: 'f_low3', title: 'Çiğ Köfte Dürüm', icon: '🍋', tags: ['food', 'snack', 'low-budget', 'street', 'vegan', 'spicy'], description: 'Nar ekşili, atomlu, hızlı çözüm.' },
  { id: 'f_low4', title: 'Simit & Üçgen Peynir', icon: '🥯', tags: ['food', 'snack', 'low-budget', 'street', 'morning'], description: 'Martılarla paylaşmalık kahvaltı.' },
  { id: 'f_low5', title: 'Salçalı Makarna', icon: '🍝', tags: ['food', 'hungry', 'low-budget', 'home', 'student'], description: 'Öğrenci evinin milli yemeği, bol yoğurtlu.' },
  { id: 'f_low6', title: 'Patso (Patates Ekmek)', icon: '🍟', tags: ['food', 'hungry', 'low-budget', 'street', 'fast'], description: 'Karbonhidrat bombası, ketçap mayonezli.' },
  { id: 'f_low7', title: 'Menemen', icon: '🍳', tags: ['food', 'hungry', 'low-budget', 'home', 'morning'], description: 'Soğanlı mı soğansız mı tartışmasıyla beraber.' },
  { id: 'f_low8', title: 'Nohutlu Pilav', icon: '🍚', tags: ['food', 'hungry', 'low-budget', 'street', 'traditional'], description: 'Seyyar araba lezzeti, bol karabiberli.' },
  { id: 'f_low9', title: 'Tost & Çay', icon: '🥪', tags: ['food', 'snack', 'low-budget', 'street', 'morning'], description: 'Kaşarlı sucuklu, büfe tostu.' },
  { id: 'f_low10', title: 'Mercimek Çorbası', icon: '🥣', tags: ['food', 'light', 'low-budget', 'street', 'home'], description: 'Limon sıkıp içmelik, şifa niyetine.' },
  { id: 'f_low11', title: 'Kısır', icon: '🥗', tags: ['food', 'snack', 'low-budget', 'home', 'group', 'vegan'], description: 'Altın günlerinin yıldızı, bol ekşili.' },
  { id: 'f_low12', title: 'Bardakta Mısır', icon: '🌽', tags: ['food', 'snack', 'low-budget', 'street'], description: 'Bol tereyağlı, nar ekşili, baharatlı.' },

  // =================================================================
  // 💳 MID BUDGET (Orta Halli / Esnaf Lokantası / Restoran)
  // =================================================================
  { id: 'f_mid1', title: 'İskender Kebap', icon: '🍛', tags: ['food', 'hungry', 'mid-budget', 'street', 'meat', 'traditional'], description: 'Bol tereyağlı, yoğurtlu Bursa efsanesi.' },
  { id: 'f_mid2', title: 'Adana Kebap', icon: '🍢', tags: ['food', 'hungry', 'mid-budget', 'street', 'meat', 'spicy'], description: 'Acılı, yanında közlenmiş biber ve şalgamla.' },
  { id: 'f_mid3', title: 'Kıymalı Pide', icon: '🍕', tags: ['food', 'hungry', 'mid-budget', 'street', 'meat', 'traditional'], description: 'Taş fırından yeni çıkmış, kenarı çıtır.' },
  { id: 'f_mid4', title: 'Lahmacun (2 Adet)', icon: '🍕', tags: ['food', 'hungry', 'mid-budget', 'street', 'meat', 'traditional'], description: 'Bol yeşillik ve limonla dürüm yap.' },
  { id: 'f_mid5', title: 'Ev Yapımı Hamburger', icon: '🍔', tags: ['food', 'hungry', 'mid-budget', 'street', 'meat'], description: 'Kaliteli et, karamelize soğan, özel sos.' },
  { id: 'f_mid6', title: 'Mantı', icon: '🥟', tags: ['food', 'hungry', 'mid-budget', 'home', 'traditional'], description: 'Sarımsaklı yoğurt ve sumaklı sos ile.' },
  { id: 'f_mid7', title: 'Kuru Fasulye & Pilav', icon: '🍲', tags: ['food', 'hungry', 'mid-budget', 'street', 'traditional'], description: 'Esnaf lokantası usulü, yanında turşu.' },
  { id: 'f_mid8', title: 'Beyti Sarma', icon: '🌯', tags: ['food', 'hungry', 'mid-budget', 'street', 'meat'], description: 'Sarımsaklı yoğurt ve domates soslu.' },
  { id: 'f_mid9', title: 'Tantuni', icon: '🌮', tags: ['food', 'hungry', 'mid-budget', 'street', 'meat'], description: 'Mersin usulü, etli veya tavuklu, bol yağlı.' },
  { id: 'f_mid10', title: 'Pizza (Orta Boy)', icon: '🍕', tags: ['food', 'hungry', 'mid-budget', 'fast', 'group'], description: 'Karışık, bol malzemeli, kenarı dolgulu.' },
  { id: 'f_mid11', title: 'Izgara Köfte Porsiyon', icon: '🍖', tags: ['food', 'hungry', 'mid-budget', 'street', 'meat'], description: 'Yanında piyaz ve köz biber ile.' },
  { id: 'f_mid12', title: 'Künefe', icon: '🧀', tags: ['food', 'snack', 'mid-budget', 'street', 'sweet'], description: 'Hatay usulü, peyniri uzayan sıcak tatlı.' },

  // =================================================================
  // 👑 HIGH BUDGET (Lüks / Ziyafet / Özel Gün)
  // =================================================================
  { id: 'f_high1', title: 'Kuzu Tandır', icon: '🍖', tags: ['food', 'hungry', 'high-budget', 'luxury', 'meat', 'traditional'], description: 'Lokum gibi dağılan, saatlerce pişmiş et.' },
  { id: 'f_high2', title: 'Dallas Steak', icon: '🥩', tags: ['food', 'hungry', 'high-budget', 'luxury', 'meat'], description: 'Kalın kesim, mermerimsi doku, ızgara.' },
  { id: 'f_high3', title: 'Sushi Set (Mix)', icon: '🍣', tags: ['food', 'hungry', 'high-budget', 'luxury', 'fish', 'group'], description: 'Sashimi, Nigiri ve Roll karışık tabak.' },
  { id: 'f_high4', title: 'Levrek/Çupra Izgara', icon: '🐟', tags: ['food', 'light', 'high-budget', 'luxury', 'fish'], description: 'Deniz kenarında, roka salatası eşliğinde.' },
  { id: 'f_high5', title: 'Serpme Kahvaltı', icon: '🍳', tags: ['food', 'hungry', 'high-budget', 'luxury', 'morning', 'group'], description: 'Masada yer kalmayacak, hafta sonu keyfi.' },
  { id: 'f_high6', title: 'Kuzu Kafes', icon: '🍖', tags: ['food', 'hungry', 'high-budget', 'luxury', 'meat', 'group'], description: 'Görsel şölen, tam bir ziyafet yemeği.' },
  { id: 'f_high7', title: 'Istakoz / Karides Güveç', icon: '🦞', tags: ['food', 'hungry', 'high-budget', 'luxury', 'fish'], description: 'Tereyağlı, sarımsaklı, özel soslu.' },
  { id: 'f_high8', title: 'T-Bone Steak', icon: '🥩', tags: ['food', 'hungry', 'high-budget', 'luxury', 'meat'], description: 'Hem bonfile hem antrikot, devasa parça.' },
  { id: 'f_high9', title: 'Fıstıklı Baklava (Kilo)', icon: '🥐', tags: ['food', 'snack', 'high-budget', 'luxury', 'sweet', 'group'], description: 'Gaziantep\'ten özel, bol fıstıklı.' },
  { id: 'f_high10', title: 'Osso Buco', icon: '🥘', tags: ['food', 'hungry', 'high-budget', 'luxury', 'meat'], description: 'İtalyan usulü dana incik, gurme lezzet.' },
];