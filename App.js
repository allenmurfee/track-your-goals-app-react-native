// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      {/* Input area for Goal */}
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter your goal." style={styles.textInput} />
        <Button title="Add Goal" />
      </View>
      {/* List view for all goals */}
      <View>
        <Text>List of Goals...</Text>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 100,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
  },
});
