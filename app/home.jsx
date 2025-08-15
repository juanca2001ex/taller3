import React from 'react';
import { View, StyleSheet, ImageBackground, Image, Linking } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function PantallaPrincipal() {
  const router = useRouter();

  const abrirFacebook = () => {
    Linking.openURL('https://www.facebook.com/profile.php?id=100076540866647');
  };

  return (
    <ImageBackground
      source={require('../img/fondo.jpg')} // Usa la imagen anterior guardada como barber-background.jpg
      style={styles.fondo}
      blurRadius={2}
    >
      <View style={styles.overlay}>
        <Image
          source={require('../img/juanca.jpg')}
          style={styles.avatar}
        />
        <Text style={styles.nombre}>Juan Carlos R. Sánchez</Text>
        <Text style={styles.profesion}>Ingeniero & Peluquero Profesional</Text>
        <Text style={styles.descripcion}>
          Apasionado por la mezcla de tecnología y estilo. Ofrezco diseños únicos con calidad e innovación.
        </Text>

        <Button
          mode="contained"
          onPress={abrirFacebook}
          style={styles.boton}
          buttonColor="#FFD700"
          textColor="#000"
        >
          Visita mi Facebook
        </Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: '#FFD700',
    marginBottom: 20,
  },
  nombre: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 8,
  },
  profesion: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 12,
  },
  descripcion: {
    fontSize: 14,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  boton: {
    width: '80%',
    borderRadius: 8,
  },
});
