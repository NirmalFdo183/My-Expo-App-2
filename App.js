import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <View style={styles.box}>
        <Text>1</Text>
      </View>

      <View style={styles.box}>
        <Text>2</Text>
      </View>

      <View style={styles.box}>
        <Text>3</Text>
      </View>

      <View style={styles.box}>
        <Text>4</Text>
      </View>

      <View style={styles.box}>
        <Text>5</Text>
      </View>

      <View style={styles.box}>
        <Text>6</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flexDirection: 'column',
    gap: 20,
  },

  box: {
    backgroundColor: '#548945',
    width: 150,
    height: 150,
    padding: 10,
    marginLeft: 10,
  },
});