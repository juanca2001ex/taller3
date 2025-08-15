import { useState, useEffect } from 'react';
import { View, FlatList, Image, TextInput, StyleSheet } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
import { router } from 'expo-router';

const datosEjemplo = [
  {
    id: 1,
    titulo: 'Desarrollo Web en PHP',
    descripcion: 'Aprende a crear sitios web dinámicos y seguros con PHP y MySQL.',
    urlImagen: 'https://www.php.net/images/logos/new-php-logo.svg'
  },
  {
    id: 2,
    titulo: 'Desarrollo en JavaScript',
    descripcion: 'Domina JavaScript para crear aplicaciones web interactivas.',
    urlImagen: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
  },
  {
    id: 3,
    titulo: 'Aplicaciones Móviles',
    descripcion: 'Crea apps modernas con React Native y Expo.',
    urlImagen: 'https://reactnative.dev/img/header_logo.svg'
  }
];

export default function ListaElementos() {
  const [textoBuscar, setTextoBuscar] = useState('');
  const [listaFiltrada, setListaFiltrada] = useState(datosEjemplo);

  useEffect(() => {
    const filtrados = datosEjemplo.filter(item =>
      item.titulo.toLowerCase().includes(textoBuscar.toLowerCase())
    );
    setListaFiltrada(filtrados);
  }, [textoBuscar]);

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="titleLarge" style={styles.titulo}>{item.titulo}</Text>
        <View style={styles.row}>
          <Image source={{ uri: item.urlImagen }} style={styles.img} />
          <View style={styles.textContainer}>
            <Text>{item.descripcion}</Text>
            <Button
              mode="contained"
              style={styles.btn}
              onPress={() => router.push(`/detalle-elemento?id=${item.id}`)}
            >
              Ver más
            </Button>
          </View>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar por título"
        value={textoBuscar}
        onChangeText={setTextoBuscar}
        style={styles.input}
      />
      <FlatList
        data={listaFiltrada}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
    borderRadius: 8
  },
  card: { marginBottom: 12, backgroundColor: '#f9f9ff', borderRadius: 10, elevation: 3 },
  row: { flexDirection: 'row', alignItems: 'center' },
  img: { width: 80, height: 80, borderRadius: 8 },
  textContainer: { flex: 1, marginLeft: 10 },
  titulo: { fontWeight: 'bold', marginBottom: 6 },
  btn: { marginTop: 8, backgroundColor: '#4A55A2' }
});
