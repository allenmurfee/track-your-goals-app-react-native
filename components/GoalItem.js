import { StyleSheet, View, Text } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.individualGoal}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  individualGoal: {
    margin: 8,
    padding: 8,
    borderWidth: 2,
    backgroundColor: "turquoise",
    borderColor: "black",
    borderRadius: 6,
  },
  goalText: {
    color: "white",
  },
});
