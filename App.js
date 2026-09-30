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

      <View style={styles.box}>
        <Text>7</Text>
      </View>

      <View style={styles.box}>
        <Text>8</Text>
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
  },

  box: {
    backgroundColor: '#548945',
    borderWidth:5,
    borderColor: '#592312',
    width: 150,
    height: 150,
    padding: 10,
    marginLeft: 10,
  },
});