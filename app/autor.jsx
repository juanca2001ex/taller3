import { View, StyleSheet, Image } from 'react-native';
import { Text, Button, Divider } from 'react-native-paper';
import { router } from 'expo-router';

export default function Autor() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Imagen */}
        <Image
          source={require('../img/juanca.jpg')}
          style={styles.avatar}
        />

        {/* Datos */}
        <View style={styles.datos}>
          <Text variant="headlineMedium" style={styles.nombre}>
            Juan Carlos R. Sánchez
          </Text>
          <Text style={styles.subtitulo}>Ingeniero y Peluquero</Text>
          <Divider style={styles.divider} />
          <Text style={styles.info}>💻 Desarrollador de aplicaciones móviles</Text>
          <Text style={styles.info}>📧 Correo: juancarlosflow55@hotmail.com</Text>
          <Text style={styles.info}>📞 Teléfono: 3116210020</Text>
        </View>
      </View>

      {/* Botón centrado y amplio */}
      <Button
        mode="contained"
        style={styles.btnVolver}
        labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
        onPress={() => router.back()}
      >
        Volver
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#f5f6fa', 
    justifyContent: 'flex-start'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 30
  },
  avatar: { 
    width: 120, 
    height: 120, 
    borderRadius: 60, 
    borderWidth: 3, 
    borderColor: '#3f51b5', 
    marginRight: 20 
  },
  datos: {
    flex: 1
  },
  nombre: { 
    fontWeight: 'bold', 
    marginBottom: 3, 
    fontSize: 22, 
    color: '#2c3e50' 
  },
  subtitulo: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#8e44ad',
    marginBottom: 6
  },
  divider: {
    marginVertical: 8,
    backgroundColor: '#ddd'
  },
  info: { 
    fontSize: 15, 
    marginBottom: 5, 
    color: '#34495e' 
  },
  btnVolver: { 
    backgroundColor: '#767ea8ff', 
    paddingVertical: 8,
    borderRadius: 8
  }
});
