import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Imagen */}
      <Image style={styles.imagen} source={require('./assets/estado-civil.png')} />

      {/* Título */}
      {/*<Text style={styles.titulo}>¡Bienvenido a BodaPlan! 💍</Text>*/}
      <Text style={styles.titulo}>¡Bienvenido a mi App💍! JLTH</Text>

      {/* Descripción */}
      <Text style={styles.parrafo}>
        Organiza tu boda de ensueño con facilidad. Explora herramientas de planificación,
        presupuestos y más.
      </Text>

      {/* Botón estilizado */}
      <TouchableOpacity style={styles.boton} onPress={() => Alert.alert('¡Botón de bodas presionado!')}>
        <Text style={styles.botonTexto}>Empezar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8d7da', // Fondo rosa pastel
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    color: '#d63384', // Rosa oscuro elegante
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 10,
  },

  parrafo: {
    color: '#6c757d', // Gris elegante
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontStyle: 'italic',
  },

  imagen: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },

  boton: {
    backgroundColor: '#d63384', // Rosa fuerte elegante
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },

  botonTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});