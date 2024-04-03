import { StyleSheet } from "react-native";

function GoalItem(props) {
  <View style={styles.individualGoal}>
    <Text style={styles.goalText}>{itemData.item.text}</Text>
  </View>;
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
