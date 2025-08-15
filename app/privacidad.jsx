import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default function Privacidad() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Pantalla de Privacidad</Text>
      <Text>Opciones y configuraciones de privacidad.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }
});
