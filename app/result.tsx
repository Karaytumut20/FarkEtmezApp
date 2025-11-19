import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { categories } from '@/constants/content';

export default function ResultScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  // Parametreden gelen ID'ye göre doğru kategoriyi bul
  const categoryData = categories.find(c => c.id === params.categoryId);

  const [result, setResult] = useState<any>(null);
  const [animValue] = useState(new Animated.Value(0));

  const pickRandom = () => {
    if (!categoryData) return;

    // Animasyon efekti
    animValue.setValue(0);
    Animated.sequence([
      Animated.timing(animValue, { toValue: 0.1, duration: 50, useNativeDriver: true }),
      Animated.timing(animValue, { toValue: 1, duration: 500, useNativeDriver: true, easing: Easing.bounce })
    ]).start();

    const items = categoryData.data;
    const randomIndex = Math.floor(Math.random() * items.length);
    setResult(items[randomIndex]);
  };

  useEffect(() => {
    pickRandom();
  }, []);

  if (!categoryData || !result) return null;

  return (
    <View style={[styles.container, { backgroundColor: categoryData.color }]}>
      
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>← Geri Dön</Text>
      </TouchableOpacity>

      <View style={styles.contentContainer}>
        <Text style={styles.label}>Fark Etmez Dediğin İçin:</Text>
        
        <Animated.View style={{ transform: [{ scale: animValue }], opacity: animValue, alignItems: 'center' }}>
          <Text style={styles.bigIcon}>{result.icon}</Text>
          <Text style={styles.resultTitle}>{result.title}</Text>
          <View style={styles.sloganContainer}>
            <Text style={styles.slogan}>"{result.slogan}"</Text>
          </View>
        </Animated.View>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button} onPress={pickRandom}>
          <Text style={styles.buttonText}>Beğenmedim, Tekrar Seç! 🎲</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 60,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 10,
  },
  backText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 20,
    marginBottom: 20,
    fontWeight: '600',
  },
  bigIcon: {
    fontSize: 100,
    marginBottom: 10,
  },
  resultTitle: {
    fontSize: 42,
    fontWeight: '900',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  sloganContainer: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    padding: 20,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  slogan: {
    fontSize: 18,
    color: '#fff',
    fontStyle: 'italic',
    textAlign: 'center',
    fontWeight: '600',
  },
  bottomContainer: {
    marginBottom: 30,
    width: '100%',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
});