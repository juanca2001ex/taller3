import { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import usuarios from '../assets/usuarios.json';

export default function Registro() {
  const router = useRouter();
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');

  const handleRegistro = () => {
    if (!nombre || !email || !contrasena || !confirmarContrasena) {
      Alert.alert('Error', 'Todos los campos son obligatorios.');
      return;
    }

    if (contrasena !== confirmarContrasena) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }

    const existe = usuarios.some(
      u => u.email?.toLowerCase() === email.toLowerCase()
    );

    if (existe) {
      Alert.alert('Advertencia', 'El usuario ya existe.');
      return;
    }

    Alert.alert('✅ Registro exitoso', 'Usuario registrado correctamente.');
    setNombre('');
    setEmail('');
    setContrasena('');
    setConfirmarContrasena('');
  };

  return (
    <LinearGradient colors={['#4e54c8', '#8f94fb']} style={styles.gradient}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <MaterialCommunityIcons name="arrow-left" size={28} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.title}>Crear Cuenta</Text>

        <TextInput
          label="Nombre"
          value={nombre}
          onChangeText={setNombre}
          style={styles.input}
          mode="outlined"
          left={<TextInput.Icon icon="account" />}
        />
        <TextInput
          label="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
          mode="outlined"
          left={<TextInput.Icon icon="email" />}
        />
        <TextInput
          label="Contraseña"
          value={contrasena}
          onChangeText={setContrasena}
          secureTextEntry
          style={styles.input}
          mode="outlined"
          left={<TextInput.Icon icon="lock" />}
        />
        <TextInput
          label="Confirmar contraseña"
          value={confirmarContrasena}
          onChangeText={setConfirmarContrasena}
          secureTextEntry
          style={styles.input}
          mode="outlined"
          left={<TextInput.Icon icon="lock-check" />}
        />

        <Button
          mode="contained"
          onPress={handleRegistro}
          style={styles.button}
          labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
        >
          Registrarse
        </Button>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    marginBottom: 16,
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  button: {
    marginTop: 12,
    backgroundColor: '#ff9800',
    borderRadius: 8,
    paddingVertical: 6,
  },
});
