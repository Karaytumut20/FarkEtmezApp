import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { INFINITY_DATA, OptionType } from '@/constants/infinityData';

export default function EliminationGameScreen() {
  const router = useRouter();
  const { categoryId } = useLocalSearchParams();
  const category = INFINITY_DATA.find(c => c.id === categoryId);

  // Oyun Durumu: 'LOBBY' -> 'ELIMINATE' (Oyuncu 1) -> 'SELECT' (Oyuncu 2) -> 'WINNER'
  const [gameState, setGameState] = useState<'LOBBY' | 'ELIMINATE' | 'SELECT' | 'WINNER'>('LOBBY');
  const [activeOptions, setActiveOptions] = useState<OptionType[]>([]);
  
  // Animasyonlar
  const fadeAnim = new Animated.Value(1);

  // Oyunu Başlat: Rastgele 5 seçenek seç
  const startGame = () => {
    if (!category) return;
    // Diziyi karıştır ve ilk 5'i al
    const shuffled = [...category.data].sort(() => 0.5 - Math.random());
    setActiveOptions(shuffled.slice(0, 5));
    setGameState('ELIMINATE');
  };

  // Seçenek Elemek (Oyuncu 1)
  const handleEliminate = (id: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    const newOptions = activeOptions.filter(o => o.id !== id);
    setActiveOptions(newOptions);

    // 3 seçenek kalınca sıra diğer oyuncuya geçer
    if (newOptions.length === 3) {
      Alert.alert("Sıra Değişiyor! 🔄", "Telefonu diğer arkadaşına ver. Şimdi seçim sırası onda!");
      setGameState('SELECT');
    }
  };

  // Kazananı Seçmek (Oyuncu 2)
  const handleSelectWinner = (id: string) => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    const winner = activeOptions.find(o => o.id === id);
    if (winner) {
      setActiveOptions([winner]);
      setGameState('WINNER');
    }
  };

  if (!category) return null;

  return (
    <ThemedView style={[styles.container, { backgroundColor: gameState === 'WINNER' ? category.color : '#1A1A1A' }]}>
      
      {/* ÜST BİLGİ ALANI */}
      <View style={styles.header}>
        {gameState !== 'LOBBY' && (
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <IconSymbol name="arrow.left" size={24} color="#fff" />
          </TouchableOpacity>
        )}
        <Text style={styles.categoryTitle}>{category.title}</Text>
      </View>

      {/* LOBİ EKRANI */}
      {gameState === 'LOBBY' && (
        <View style={styles.centerContent}>
          <View style={[styles.iconBox, { backgroundColor: category.color }]}>
            <Text style={{ fontSize: 60 }}>{category.icon}</Text>
          </View>
          <Text style={styles.instructionTitle}>Nasıl Oynanır?</Text>
          <Text style={styles.instructionText}>
            1. Sistem rastgele 5 seçenek sunacak.{"\n"}
            2. İlk kişi beğenmediği 2 tanesini <Text style={{color: '#FF6B6B', fontWeight: 'bold'}}>ELEYECEK.</Text>{"\n"}
            3. Telefonu arkadaşına verecek.{"\n"}
            4. İkinci kişi kalanlardan birini <Text style={{color: '#4ECDC4', fontWeight: 'bold'}}>SEÇECEK.</Text>
          </Text>
          <TouchableOpacity style={[styles.bigButton, { backgroundColor: category.color }]} onPress={startGame}>
            <Text style={styles.bigButtonText}>BAŞLA 🔥</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* OYUN ALANI (KARTLAR) */}
      {(gameState === 'ELIMINATE' || gameState === 'SELECT') && (
        <View style={styles.gameArea}>
          <Text style={styles.turnText}>
            {gameState === 'ELIMINATE' 
              ? `❌ İstemediğin ${activeOptions.length - 3} tanesini sil!` 
              : `✅ Son karar! Hangisi olsun?`}
          </Text>
          
          <View style={styles.optionsGrid}>
            {activeOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={[styles.optionCard, { borderColor: category.color }]}
                onPress={() => gameState === 'ELIMINATE' ? handleEliminate(option.id) : handleSelectWinner(option.id)}
              >
                <Text style={styles.optionText}>{option.text}</Text>
                <IconSymbol 
                  name={gameState === 'ELIMINATE' ? "trash" : "checkmark.circle.fill"} 
                  size={24} 
                  color={gameState === 'ELIMINATE' ? "#FF6B6B" : "#4ECDC4"} 
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}

      {/* KAZANAN EKRANI */}
      {gameState === 'WINNER' && (
        <View style={styles.centerContent}>
          <IconSymbol name="star.fill" size={80} color="#fff" />
          <Text style={styles.winnerTextTitle}>KARAR VERİLDİ!</Text>
          <View style={styles.winnerCard}>
            <Text style={styles.winnerText}>{activeOptions[0].text}</Text>
          </View>
          <TouchableOpacity style={styles.restartButton} onPress={() => router.back()}>
            <Text style={styles.restartText}>Ana Menüye Dön</Text>
          </TouchableOpacity>
        </View>
      )}

    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { flexDirection: 'row', alignItems: 'center', marginTop: 40, marginBottom: 20 },
  backButton: { padding: 10, marginRight: 10, backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 12 },
  categoryTitle: { fontSize: 24, fontWeight: '900', color: '#fff' },
  
  centerContent: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 },
  iconBox: { width: 120, height: 120, borderRadius: 60, justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  instructionTitle: { fontSize: 22, fontWeight: 'bold', color: '#fff' },
  instructionText: { color: '#ccc', textAlign: 'center', lineHeight: 24, fontSize: 16 },
  bigButton: { width: '100%', padding: 20, borderRadius: 20, alignItems: 'center', marginTop: 20 },
  bigButtonText: { color: '#000', fontSize: 20, fontWeight: '900' },

  gameArea: { flex: 1, justifyContent: 'center' },
  turnText: { fontSize: 20, fontWeight: 'bold', color: '#fff', textAlign: 'center', marginBottom: 30 },
  optionsGrid: { gap: 15 },
  optionCard: { 
    backgroundColor: '#2A2A2A', padding: 20, borderRadius: 16, 
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    borderWidth: 1, borderColor: '#333'
  },
  optionText: { color: '#fff', fontSize: 18, fontWeight: '600' },

  winnerTextTitle: { color: '#fff', fontSize: 28, fontWeight: '900', marginTop: 20 },
  winnerCard: { backgroundColor: '#fff', padding: 30, borderRadius: 24, width: '100%', alignItems: 'center', marginTop: 20 },
  winnerText: { fontSize: 32, fontWeight: 'bold', color: '#333', textAlign: 'center' },
  restartButton: { marginTop: 40, backgroundColor: 'rgba(0,0,0,0.2)', padding: 15, borderRadius: 30, paddingHorizontal: 30 },
  restartText: { color: '#fff', fontWeight: 'bold' }
});