import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const servicios = [
  {
    id: '1',
    titulo: 'Servicio de Notificación Telefónica',
    descripcion: 'Abrir servicios telefónicos.',
    icono: 'phone',
  },
  {
    id: '2',
    titulo: 'Protección Inteligente',
    descripcion: 'Protege la seguridad.',
    icono: 'shield',
  },
  {
    id: '3',
    titulo: 'Compras',
    descripcion: 'Encuentra todo lo disponible para comprar.',
    icono: 'cart',
  },
  {
    id: '4',
    titulo: 'Maestro de Iluminación',
    descripcion: 'Iluminación personalizada basada en IA.',
    icono: 'account-cog-outline',
  },
];

export default function ListaServicios() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
      <Text style={styles.title}>Nuestros Servicios</Text>

      {servicios.map(({ id, titulo, descripcion, icono }) => (
        <View key={id} style={styles.card}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name={icono} size={40} color="#fff" />
          </View>
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
    backgroundColor: '#eef2f3', // Fondo suave
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#222',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 20,
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
    backgroundColor: '#90756eff', // Color vibrante
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  cardContent: { flex: 1 },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#444',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: '#76564dff',
    borderRadius: 6,
  },
});
