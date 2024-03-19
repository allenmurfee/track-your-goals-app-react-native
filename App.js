// import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInput(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoal() {
    // the below is a callback function that receives the current state (here the parameter for the state is currentCourseGoals) and then creates a new array. This is better than updating the state directly with just setCourseGoals( [...courseGoals, enteredGoalText]) because it can lead to unexpected behavior
    setCourseGoals((currentCourseGoals) => [...courseGoals, enteredGoalText]);
  }

  return (
    <View style={styles.appContainer}>
      {/* Input area for Goal */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your goal."
          style={styles.textGoalInput}
          onChangeText={goalInput}
        />
        {/* No styling prop supported on Button component */}
        <Button title="Add Goal" onPress={addGoal} />
      </View>
      {/* List view for all goals */}
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal, index) => (
          <Text key={index}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 100,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textGoalInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 4,
  },
});
