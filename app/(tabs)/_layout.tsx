import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  // Uygulamanın genel temasına uygun renkler
  const activeColor = '#4ECDC4'; // Genius Turkuazı
  const inactiveColor = '#888888'; // Pasif gri
  const tabBackgroundColor = colorScheme === 'dark' ? '#1A1A2E' : '#ffffff'; // Koyu modda lacivert, açık modda beyaz

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inactiveColor,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            // iOS için blur efekti ve şeffaflık
            position: 'absolute',
            backgroundColor: colorScheme === 'dark' ? 'rgba(26, 26, 46, 0.9)' : 'rgba(255, 255, 255, 0.9)',
            borderTopWidth: 0,
          },
          default: {
            backgroundColor: tabBackgroundColor,
            borderTopWidth: 0,
            elevation: 0, // Android gölgesini kaldır
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Anasayfaya Dön', // İstediğiniz değişiklik
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      {/* Explore sekmesi silindiği için buradaki Tabs.Screen tanımını siliyoruz */}
    </Tabs>
  );
}