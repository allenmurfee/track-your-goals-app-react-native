// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Track Your Goals!</Text>
      {/* <StatusBar style="auto" /> */}
      <Button title="Add a Goal" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    marginBottom: 20,
    borderWidth: 2,
    padding: 16,
  },
});
