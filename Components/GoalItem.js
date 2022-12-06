import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from "react-native";

export default function GoalItem(props) {
  return (
    <TouchableNativeFeedback activeOpacity={.7} onPress={props.onDelete}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
