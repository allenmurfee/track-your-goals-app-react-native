// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      {/* Input area for Goal */}
      <View>
        <TextInput placeholder="Enter your goal." />
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
    flex: 1,
    backgroundColor: "#fff",
  },
  textStyle: {
    marginBottom: 20,
    borderWidth: 2,
    padding: 16,
  },
});
