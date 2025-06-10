
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.inputContainer}>
      <Text>Hello World </Text>
      <Button title="Add Goal!" style={styles.textInput} palceholder="your course goal!" />
    </View>
    <View>
      <Text>List  of goals...</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:50,
  },
  inputContainer: {
    flexDirection:'row',
    justifyContent:'',
  },
  textInput: {
    borderWidth: 1,
    borderColor:'#cccccc',
    width:'80%',

  }
});
