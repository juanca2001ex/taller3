import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { useLocalSearchParams } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

// Lista de usuarios con imágenes
const usuarios = [
  { id: 1, nombre: 'Juan Carlos Romaña Sánchez', email: 'juan.romana@example.com', rol: 'Administrador', telefono: '+57 311 621 0020', direccion: 'Quibdó, Chocó', avatar: 'https://scontent.feoh2-1.fna.fbcdn.net/v/t39.30808-6/441966345_460291986532160_4368293133115753519_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=adRca9ecGaAQ7kNvwHiM4NB&_nc_oc=AdnHrqJvAXPU_bze144lwa5luDHDiUBw1tDIHap-UEwk5RfJL9PM4t6V3xw977aMKJY&_nc_zt=23&_nc_ht=scontent.feoh2-1.fna&_nc_gid=HnCy5tQ4TmiY0Ld2oB-_Rg&oh=00_AfUrElY3ZyCLpRE5x80_GTm6l1yN6fVIfVAJn1EIZroZgg&oe=68A526F8' },
  { id: 2, nombre: 'María López', email: 'maria.lopez@example.com', rol: 'Diseñadora', telefono: '+57 301 234 5678', direccion: 'Medellín, Antioquia', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { id: 3, nombre: 'Carlos Gómez', email: 'carlos.gomez@example.com', rol: 'Desarrollador', telefono: '+57 310 876 5432', direccion: 'Bogotá, Cundinamarca', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { id: 4, nombre: 'Laura Torres', email: 'laura.torres@example.com', rol: 'Marketing', telefono: '+57 322 345 9876', direccion: 'Cali, Valle del Cauca', avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { id: 5, nombre: 'Pedro Ramírez', email: 'pedro.ramirez@example.com', rol: 'Soporte Técnico', telefono: '+57 300 112 2334', direccion: 'Barranquilla, Atlántico', avatar: 'https://randomuser.me/api/portraits/men/15.jpg' },
];

export default function DetalleUsuario() {
  const { id } = useLocalSearchParams();
  const usuario = usuarios.find((u) => u.id.toString() === id);

  if (!usuario) {
    return (
      <View style={styles.container}>
        <Text>Usuario no encontrado</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#1f2253ff', '#8f94fb']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <Image
          source={{ uri: usuario.avatar }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{usuario.nombre}</Text>
        <Text style={styles.role}>{usuario.rol}</Text>
      </LinearGradient>

      <View style={styles.details}>
        <Text style={styles.info}>📧 {usuario.email}</Text>
        <Text style={styles.info}>📞 {usuario.telefono}</Text>
        <Text style={styles.info}>📍 {usuario.direccion}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  header: {
    paddingVertical: 30,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 12,
  },
  name: { fontSize: 22, fontWeight: 'bold', color: '#fff', textAlign: 'center' },
  role: { fontSize: 16, color: '#e5e7eb', textAlign: 'center', marginBottom: 10 },
  details: { paddingHorizontal: 20 },
  info: { fontSize: 16, marginBottom: 12, color: '#444' },
});
