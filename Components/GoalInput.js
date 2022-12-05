import React from "react";

import { View, TextInput, StyleSheet, Button } from "react-native";

export default function GoalInput(props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={props.enteredGoalHandler}
        value={props.enteredGoal}
      />
      <Button title="Add" onPress={props.courseGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: { width: "80%", borderColor: "black", borderWidth: 1, padding: 10 },
});
