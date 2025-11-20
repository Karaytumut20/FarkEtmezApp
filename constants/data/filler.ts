import { ItemType } from '../types';

const FILLER_CATEGORIES = [
  { prefix: 'genF', icon: '🍜', title: 'Rastgele Hızlı Yemek', tags: ['food', 'snack', 'fast', 'low-budget'] },
  { prefix: 'genA', icon: '🏃', title: 'Rastgele Hafif Aktivite', tags: ['activity', 'lazy', 'home'] },
  { prefix: 'genG', icon: '🕹️', title: 'Rastgele Kısa Oyun', tags: ['game', 'mobile', 'solo'] },
  { prefix: 'genW', icon: '🎞️', title: 'Rastgele Film/Dizi', tags: ['watch', 'lazy', 'home', 'random'] },
  { prefix: 'genO', icon: '🏞️', title: 'Rastgele Dış Aktivite', tags: ['activity', 'energetic', 'outdoor'] },
];

export const generateFillerData = (): ItemType[] => {
  const fillerData: ItemType[] = [];
  const neededCount = 1250; 
  let fillerIdCounter = 1;

  for (let i = 0; i < neededCount; i++) {
    const cat = FILLER_CATEGORIES[i % FILLER_CATEGORIES.length];
    const tags = [...cat.tags, (i % 2 === 0 ? 'group' : 'solo')];
    const newId = `${cat.prefix}_${fillerIdCounter++}`; 

    fillerData.push({
      id: newId,
      title: `${cat.title} Öneri ${i + 1}`,
      icon: cat.icon,
      tags: tags,
      description: `Bu ${cat.title} rastgele seçilmiş ve filtrelere uyan bir öneridir. Detay ID: ${newId}.`,
    });
  }

  // Ek 300 ultra jenerik
  for (let i = 0; i < 300; i++) {
      const newId = `ultrA_${i + 1}`;
      fillerData.push({
          id: newId,
          title: `Ultra Jenerik Karar ${i + 1}`,
          icon: '✅',
          tags: ['random', 'any', 'low-budget'],
          description: 'En zor anlar için süper jenerik karar. Dene ve Gör!',
      });
  }
  
  return fillerData;
};