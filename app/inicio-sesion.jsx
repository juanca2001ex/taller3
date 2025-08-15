import React from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { TextInput, Button, Text, IconButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import usuarios from '../assets/usuarios.json';

export default function InicioSesion() {
  const router = useRouter();
  const [correo, setCorreo] = React.useState('');
  const [clave, setClave] = React.useState('');

  const iniciarSesion = () => {
    const usuario = usuarios.find((u) => u.email === correo);

    if (!usuario) {
      Alert.alert('Error', 'El usuario no está creado');
      return;
    }

    if (usuario.clave !== clave) {
      Alert.alert('Error', 'Datos de acceso incorrectos');
      return;
    }

    Alert.alert('Éxito', `Bienvenido, ${usuario.nombre}`);
    console.log('Sesión iniciada por:', usuario.nombre);
  };

  return (
    <LinearGradient colors={['#4A55A2', '#6A5ACD']} style={estilos.contenedor}>
      
      {/* Botón Atrás */}
      <IconButton
        icon="arrow-left"
        size={28}
        iconColor="#fff"
        style={estilos.botonAtras}
        onPress={() => router.push('/')}
      />

      <Text style={estilos.titulo}>Iniciar Sesión</Text>

      <TextInput
        label="Correo electrónico"
        value={correo}
        onChangeText={setCorreo}
        mode="outlined"
        style={estilos.campo}
        left={<TextInput.Icon icon="email" />}
        theme={{ colors: { primary: '#FFA500' } }}
      />

      <TextInput
        label="Contraseña"
        value={clave}
        onChangeText={setClave}
        mode="outlined"
        secureTextEntry
        style={estilos.campo}
        left={<TextInput.Icon icon="lock" />}
        theme={{ colors: { primary: '#FFA500' } }}
      />

      <TouchableOpacity>
        <Text style={estilos.olvidoClave}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>

      <Button
        mode="contained"
        onPress={iniciarSesion}
        style={estilos.botonPrincipal}
        textColor="white"
      >
        INICIAR SESIÓN
      </Button>

      <View style={estilos.divisor}>
        <Text style={{ color: '#fff' }}>O ingresa con</Text>
      </View>

      <View style={estilos.redesContainer}>
        <Button
          icon="google"
          mode="contained"
          onPress={() => Alert.alert('Google')}
          style={[estilos.botonRed, { backgroundColor: '#DB4437' }]}
          textColor="white"
        >
          Google
        </Button>

        <Button
          icon="facebook"
          mode="contained"
          onPress={() => Alert.alert('Facebook')}
          style={[estilos.botonRed, { backgroundColor: '#1877F2' }]}
          textColor="white"
        >
          Facebook
        </Button>

        <Button
          icon="apple"
          mode="contained"
          onPress={() => Alert.alert('Apple')}
          style={[estilos.botonRed, { backgroundColor: '#000000' }]}
          textColor="white"
        >
          Apple
        </Button>
      </View>
    </LinearGradient>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
  },
  botonAtras: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 10,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 30,
    color: '#fff',
  },
  campo: {
    marginBottom: 15,
    backgroundColor: '#f4f4f8',
    borderRadius: 8,
  },
  olvidoClave: {
    alignSelf: 'flex-end',
    color: '#FFA500',
    marginBottom: 20,
  },
  botonPrincipal: {
    marginBottom: 20,
    paddingVertical: 5,
    borderRadius: 8,
    backgroundColor: '#FFA500',
  },
  divisor: {
    alignItems: 'center',
    marginBottom: 15,
  },
  redesContainer: {
    gap: 10,
  },
  botonRed: {
    borderRadius: 8,
  },
});
