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
  
  // İSTEK: TabBar arka planı kırmızı olsun
  const tabBackgroundColor = '#1A1A2E'; 

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
            backgroundColor: tabBackgroundColor, // Kırmızı yapıldı
            borderTopWidth: 0,
          },
          default: {
            backgroundColor: tabBackgroundColor, // Kırmızı yapıldı
            borderTopWidth: 0,
            elevation: 0, // Android gölgesini kaldır
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Anasayfaya Dön',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}