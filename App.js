import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>Top</Text>
      </View>
      <View style={styles.box}>
        <Text>Top</Text>
      </View>
      <View style={styles.box}>
        <Text>Top</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },

  box: {
    backgroundColor: '#548945',
    width: 100,
    height: 100,
    marginTop:10,
    padding:10,
  },
});