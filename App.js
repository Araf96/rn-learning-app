import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

import GoalItem from "./Components/GoalItem";
import GoalInput from "./Components/GoalInput";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const enteredGoalHandler = (val) => {
    setEnteredGoal(val);
  };

  const courseGoalHandler = () => {
    setCourseGoals((currGoals) => [
      ...courseGoals,
      { uid: Math.random.toString(), value: enteredGoal },
    ]);
    setEnteredGoal('')
  };

  return (
    <View style={styles.screen}>
      <GoalInput
        enteredGoal={enteredGoal}
        courseGoalHandler={courseGoalHandler}
        enteredGoalHandler={enteredGoalHandler}
      />
      <FlatList
        data={courseGoals}
        keyExtractor={(item, index) => index}
        initialNumToRender={4}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
