import { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { Text, Switch } from 'react-native-paper';
import { router } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Configuracion() {
  const [notificaciones, setNotificaciones] = useState(false);

  const handleCerrarSesion = () => {
    Alert.alert(
      'Cerrar sesión',
      '¿Estás seguro de que quieres cerrar sesión?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sí, cerrar sesión', onPress: () => console.log('Sesión cerrada') },
      ]
    );
  };

  const renderOption = (icon, title, onPress, rightElement = null) => (
    <TouchableOpacity style={styles.optionBox} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.optionLeft}>
        <MaterialCommunityIcons name={icon} size={24} color="#4A55A2" />
        <Text style={styles.optionText}>{title}</Text>
      </View>
      {rightElement}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Encabezado con degradado */}
      <LinearGradient colors={['#4A55A2', '#6C79D4']} style={styles.header}>
        <Text style={styles.headerTitle}>Ajustes</Text>
      </LinearGradient>

      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {renderOption('account-circle', 'Cuenta', () => router.push('/cuenta'))}

        {renderOption(
          'bell-ring',
          'Notificaciones',
          null,
          <Switch
            value={notificaciones}
            onValueChange={() => setNotificaciones(!notificaciones)}
            color="#4A55A2"
          />
        )}

        {renderOption('shield-lock', 'Privacidad', () => router.push('/privacidad'))}
        {renderOption('security', 'Seguridad', () => router.push('/seguridad'))}
        {renderOption('help-circle', 'Ayuda', () => router.push('/ayuda'))}

        {/* Botón de cerrar sesión */}
        <TouchableOpacity onPress={handleCerrarSesion} style={styles.logoutBtn} activeOpacity={0.8}>
          <MaterialCommunityIcons name="logout" size={22} color="#fff" />
          <Text style={styles.logoutText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f6fc' },
  header: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 4,
  },
  headerTitle: { fontSize: 26, fontWeight: 'bold', color: '#fff' },
  optionBox: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },
  optionLeft: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  optionText: { fontSize: 16, color: '#333' },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E74C3C',
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 30,
  },
  logoutText: { color: '#fff', fontSize: 16, fontWeight: 'bold', marginLeft: 8 },
});
