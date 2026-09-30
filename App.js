import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}></View>
      <View style={styles.box}></View>
      <View style={styles.box}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },

  box: {
    backgroundColor: '#548945',
    borderRadius: 30,
    width: 50,
    height: 50,
  },
});