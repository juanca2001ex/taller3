import { View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const usuarios = [
  { id: 1, nombre: 'Juan Carlos Romaña Sánchez', email: 'juan.romana@example.com', rol: 'Administrador', foto: 'https://scontent.feoh2-1.fna.fbcdn.net/v/t39.30808-6/441966345_460291986532160_4368293133115753519_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=adRca9ecGaAQ7kNvwHiM4NB&_nc_oc=AdnHrqJvAXPU_bze144lwa5luDHDiUBw1tDIHap-UEwk5RfJL9PM4t6V3xw977aMKJY&_nc_zt=23&_nc_ht=scontent.feoh2-1.fna&_nc_gid=HnCy5tQ4TmiY0Ld2oB-_Rg&oh=00_AfUrElY3ZyCLpRE5x80_GTm6l1yN6fVIfVAJn1EIZroZgg&oe=68A526F8' },
  { id: 2, nombre: 'María López', email: 'maria.lopez@example.com', rol: 'Diseñadora', foto: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { id: 3, nombre: 'Carlos Gómez', email: 'carlos.gomez@example.com', rol: 'Desarrollador', foto: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { id: 4, nombre: 'Laura Torres', email: 'laura.torres@example.com', rol: 'Marketing', foto: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { id: 5, nombre: 'Pedro Ramírez', email: 'pedro.ramirez@example.com', rol: 'Soporte Técnico', foto: 'https://randomuser.me/api/portraits/men/15.jpg' },
  { id: 6, nombre: 'Ana María González', email: 'ana.gonzalez@example.com', rol: 'Analista de Datos', foto: 'https://randomuser.me/api/portraits/women/12.jpg' },
  { id: 7, nombre: 'Jorge Castillo', email: 'jorge.castillo@example.com', rol: 'QA Tester', foto: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { id: 8, nombre: 'Sofía Herrera', email: 'sofia.herrera@example.com', rol: 'Project Manager', foto: 'https://randomuser.me/api/portraits/women/26.jpg' },
];

export default function PerfilUsuario() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {usuarios.map((usuario) => (
        <TouchableOpacity
          key={usuario.id}
          style={styles.cardWrapper}
          onPress={() =>
            router.push({
              pathname: '/detalle-usuario',
              params: { id: usuario.id },
            })
          }
        >
          <LinearGradient
            colors={['#4e54c8', '#8f94fb']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.card}
          >
            <Image source={{ uri: usuario.foto }} style={styles.avatar} />
            <View style={styles.info}>
              <Text style={styles.name}>{usuario.nombre}</Text>
              <Text style={styles.email}>{usuario.email}</Text>
              <Text style={styles.role}>{usuario.rol || 'Usuario'}</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8ecf4',
    padding: 16,
  },
  cardWrapper: {
    marginBottom: 18,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#fff',
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#f0f0f0',
    marginBottom: 2,
  },
  role: {
    fontSize: 13,
    color: '#dcdcdc',
    fontStyle: 'italic',
  },
});
