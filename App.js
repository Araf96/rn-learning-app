import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const enteredGoalHandler = (val) => {
    setEnteredGoal(val);
  };

  const courseGoalHandler = () => {
    setCourseGoals((currGoals) => [...courseGoals, enteredGoal]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={enteredGoalHandler}
          value={enteredGoal}
        />
        <Button title="Add" onPress={courseGoalHandler} />
      </View>
      <ScrollView>
        {courseGoals.map((goal, id) => (
          <View key={id} style={styles.listItem}><Text>{goal}</Text></View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: { width: "80%", borderColor: "black", borderWidth: 1, padding: 10 },
  listItem:{
    padding:10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor:'black',
    borderWidth: 1
  }
});
