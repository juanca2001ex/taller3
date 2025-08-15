import { View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import usuarios from '../assets/usuarios.json';
import { useRouter } from 'expo-router';

export default function PerfilUsuario() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {usuarios.map((usuario) => (
        <TouchableOpacity
          key={usuario.id}
          style={styles.card}
          onPress={() =>
            router.push({
              pathname: '/detalle-usuario',
              params: { id: usuario.id },
            })
          }
        >
          {usuario.foto ? (
            <Image source={{ uri: usuario.foto }} style={styles.avatar} />
          ) : (
            <MaterialCommunityIcons
              name="account-circle"
              size={70}
              color="#fff"
              style={styles.avatarPlaceholder}
            />
          )}

          <View style={styles.info}>
            <Text style={styles.name}>{usuario.nombre}</Text>
            <Text style={styles.email}>{usuario.email}</Text>
            <Text style={styles.role}>{usuario.rol || 'Usuario'}</Text>
          </View>
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
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4e54c8',
    background: 'linear-gradient(45deg, #4e54c8, #8f94fb)', // degradado
    borderRadius: 12,
    padding: 16,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#fff',
    marginRight: 16,
  },
  avatarPlaceholder: {
    backgroundColor: '#bbb',
    borderRadius: 35,
    padding: 2,
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
