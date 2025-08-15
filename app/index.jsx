import { ScrollView, StyleSheet, View } from 'react-native';
import { List, Text } from 'react-native-paper';
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';

export default function Index() {
  const router = useRouter();

  const items = [
    { title: 'Autor', icon: 'account-tie', color: '#ff7b54', route: '/autor' },
    { title: 'Inicio de Sesión', icon: 'lock-outline', color: '#ff2d55', route: '/inicio-sesion' },
    { title: 'Pantalla Principal', icon: 'home-outline', color: '#5e88fc', route: '/pantalla-principal' },
    { title: 'Lista de Elementos', icon: 'format-list-bulleted-square', color: '#ff9800', route: '/lista-elementos' },
    { title: 'Detalle de Elemento', icon: 'file-document-outline', color: '#9b59b6', route: '/detalle-elemento' },
    { title: 'Formulario de Registro', icon: 'account-plus-outline', color: '#4caf50', route: '/formulario-registro' },
    { title: 'Configuración', icon: 'cog-outline', color: '#363636', route: '/configuracion' },
    { title: 'Perfil de Usuario', icon: 'account-circle-outline', color: '#2196f3', route: '/perfil-usuario' },
    { title: 'Lista de Servicios', icon: 'briefcase-outline', color: '#00bcd4', route: '/lista-servicios' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>📱 Menú Principal</Text>

      {items.map((item, index) => (
        <Animatable.View
          key={index}
          animation="fadeInUp"
          delay={index * 100}
          duration={600}
        >
          <List.Item
            title={item.title}
            titleStyle={styles.title}
            style={styles.card}
            left={() => <List.Icon icon={item.icon} color={item.color} />}
            right={() => <List.Icon icon="chevron-right" color="#ccc" />}
            onPress={() => router.push(item.route)}
          />
        </Animatable.View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f6fc', padding: 20 },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    marginBottom: 12,
    padding: 4,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  title: { fontSize: 20, fontWeight: '600', color: '#333' },
});
