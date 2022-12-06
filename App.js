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
  const [courseGoals, setCourseGoals] = useState([]);
  const [onAddMode, setOnAddMode] = useState(false)

  const courseGoalHandler = (enteredGoal) => {
    setCourseGoals((currGoals) => [
      ...currGoals,
      { uid: Math.random().toString(), value: enteredGoal },
    ]);
    setOnAddMode(false);
  };

  const cancelGoalHandler = () =>{
    setOnAddMode(false)
  }

  const removeGoalHandler = goalId => {
    console.log(goalId);
    setCourseGoals(currGoals => currGoals.filter(goal=>goal.uid!=goalId));
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={()=> setOnAddMode(true)}/>
      <GoalInput
        visible={onAddMode}
        onAddGoal={courseGoalHandler}
        onCancelGoal={cancelGoalHandler}
      />
      <FlatList
        data={courseGoals}
        keyExtractor={(item, index) => index}
        initialNumToRender={4}
        renderItem={(itemData) => <GoalItem id={itemData.item.uid} title={itemData.item.value} onDelete={removeGoalHandler} />}
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
