import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const servicios = [
  {
    id: '1',
    titulo: 'Servicio de Notificación Telefónica',
    descripcion: 'Abrir servicios telefónicos.',
    icono: 'phone',
    color1: '#4A55A2',
    color2: '#6C79D4',
  },
  {
    id: '2',
    titulo: 'Protección Inteligente',
    descripcion: 'Protege la seguridad.',
    icono: 'shield',
    color1: '#4CB8C4',
    color2: '#3CD3AD',
  },
  {
    id: '3',
    titulo: 'Compras',
    descripcion: 'Encuentra todo lo disponible para comprar.',
    icono: 'cart',
    color1: '#F7971E',
    color2: '#FFD200',
  },
  {
    id: '4',
    titulo: 'Maestro de Iluminación',
    descripcion: 'Iluminación personalizada basada en IA.',
    icono: 'account-cog-outline',
    color1: '#FF5858',
    color2: '#FB8D41',
  },
];

export default function ListaServicios() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.title}>Nuestros Servicios</Text>

      {servicios.map(({ id, titulo, descripcion, icono, color1, color2 }) => (
        <View key={id} style={styles.card}>
          <LinearGradient colors={[color1, color2]} style={styles.iconContainer}>
            <MaterialCommunityIcons name={icono} size={30} color="#fff" />
          </LinearGradient>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{titulo}</Text>
            <Text style={styles.cardDescription}>{descripcion}</Text>
            <Button
              mode="contained"
              onPress={() =>
                router.push({ pathname: '/detalle-servicio', params: { id } })
              }
              style={styles.button}
              textColor="#fff"
              icon="arrow-right"
            >
              Ver más
            </Button>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6fc',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 4,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  cardContent: { flex: 1 },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#222',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  button: {
    alignSelf: 'flex-start',
    borderRadius: 6,
    backgroundColor: '#4A55A2',
  },
});
