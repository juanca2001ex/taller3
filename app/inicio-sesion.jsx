import React from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { TextInput, Button, Text, IconButton } from 'react-native-paper';
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

  const iniciarConGoogle = () => {
    Alert.alert('Iniciar sesión con Google', '¿Deseas continuar con tu cuenta de Google?', [
      { text: 'Cancelar' },
      { text: 'Sí', onPress: () => console.log('Google login') },
    ]);
  };

  const iniciarConFacebook = () => {
    Alert.alert('Iniciar sesión con Facebook', '¿Deseas continuar con tu cuenta de Facebook?', [
      { text: 'Cancelar' },
      { text: 'Sí', onPress: () => console.log('Facebook login') },
    ]);
  };

  const iniciarConApple = () => {
    Alert.alert('Iniciar sesión con Apple', '¿Deseas continuar con tu cuenta de Apple?', [
      { text: 'Cancelar' },
      { text: 'Sí', onPress: () => console.log('Apple login') },
    ]);
  };

  return (
    <View style={estilos.contenedor}>
      {/* Botón Atrás flotante */}
      <IconButton
        icon="arrow-left"
        size={28}
        iconColor="#fff"
        style={estilos.botonAtras}
        onPress={() => router.push('/')}
      />

      <Text style={estilos.titulo}>INICIAR SESIÓN</Text>

      <TextInput
        label="Correo electrónico"
        value={correo}
        onChangeText={setCorreo}
        mode="outlined"
        style={estilos.campo}
        left={<TextInput.Icon icon="email" />}
      />

      <TextInput
        label="Contraseña"
        value={clave}
        onChangeText={setClave}
        mode="outlined"
        secureTextEntry
        style={estilos.campo}
        left={<TextInput.Icon icon="lock" />}
      />

      <TouchableOpacity>
        <Text style={estilos.olvidoClave}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>

      <Button
        mode="contained"
        onPress={iniciarSesion}
        style={estilos.botonIniciar}
        textColor="white"
        buttonColor="#4A90E2"
      >
        INICIAR SESIÓN
      </Button>

      <View style={estilos.divisor}>
        <Text>INGRESA</Text>
      </View>

      <Button
        mode="contained"
        icon="google"
        onPress={iniciarConGoogle}
        style={[estilos.botonAlternativo, { backgroundColor: '#DB4437' }]}
        textColor="white"
      >
        Google
      </Button>

      <Button
        mode="contained"
        icon="facebook"
        onPress={iniciarConFacebook}
        style={[estilos.botonAlternativo, { backgroundColor: '#1877F2' }]}
        textColor="white"
      >
        Facebook
      </Button>

      <Button
        mode="contained"
        icon="apple"
        onPress={iniciarConApple}
        style={[estilos.botonAlternativo, { backgroundColor: '#000000' }]}
        textColor="white"
      >
        Apple
      </Button>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f8', // Fondo más suave
  },
  botonAtras: {
    backgroundColor: '#4A90E2',
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
    color: '#333',
  },
  campo: {
    marginBottom: 15,
  },
  olvidoClave: {
    alignSelf: 'flex-end',
    color: '#4A90E2',
    marginBottom: 20,
  },
  botonIniciar: {
    marginBottom: 20,
    paddingVertical: 5,
    borderRadius: 8,
  },
  divisor: {
    alignItems: 'center',
    marginBottom: 15,
  },
  botonAlternativo: {
    marginBottom: 10,
    borderRadius: 8,
  },
});
