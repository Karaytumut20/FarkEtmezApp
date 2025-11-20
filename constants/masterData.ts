// constants/masterData.ts

import { ItemType } from './types';
import { FOOD_DATA } from './data/food';
import { ACTIVITY_DATA } from './data/activities';
import { GAME_DATA } from './data/games';
import { WATCH_DATA } from './data/watch';
import { CULTURE_DATA } from './data/culture';
// generateFillerData importu SİLİNDİ
import { WIZARD_STEPS } from './wizardSteps';

export { ItemType, WIZARD_STEPS };

// TEMİZLENMİŞ VERİ LİSTESİ
export const MASTER_DATA: ItemType[] = [
  ...FOOD_DATA,
  ...ACTIVITY_DATA,
  ...GAME_DATA,
  ...WATCH_DATA,
  ...CULTURE_DATA,
];