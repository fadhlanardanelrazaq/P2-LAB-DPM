import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default function App() {
  const animatedValue = new Animated.Value(0);

  // Animasi berulang untuk kotak
  Animated.loop(
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ])
  ).start();

  const pulse = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.15],
  });

  const fade = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.7],
  });

  return (
    <View style={styles.container}>
      {/* Teks judul */}
      <Text style={styles.text}>💼 Ketua Kelas F 💼</Text>

      {/* Dua kotak dengan animasi */}
      <View style={styles.row}>
        {/* Kotak kiri dengan animasi */}
        <Animated.View
          style={[
            styles.box,
            styles.boxLeft,
            { transform: [{ scale: pulse }], opacity: fade },
          ]}
        />
        <Text style={styles.text1}>✨ Tugas Harian</Text>

        {/* Kotak kanan dengan animasi */}
        <Animated.View
          style={[
            styles.box,
            styles.boxRight,
            { transform: [{ scale: pulse }], opacity: fade },
          ]}
        />
        <Text style={styles.text2}>🌟 Kegiatan</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    color: '#333',
    fontWeight: 'bold',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    padding: 15,
    textAlign: 'center',
    marginBottom: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginTop: 20,
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  boxLeft: {
    backgroundColor: 'linear-gradient(135deg, #6C63FF, #9E65FF)', // Gradasi warna untuk kotak kiri
  },
  boxRight: {
    backgroundColor: 'linear-gradient(135deg, #00C897, #00E0A1)', // Gradasi warna untuk kotak kanan
  },
  text1: {
    position: 'absolute',
    left: 20,
    bottom: -50,
    color: '#6C63FF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  text2: {
    position: 'absolute',
    right: 20,
    bottom: -50,
    color: '#00C897',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
