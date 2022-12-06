import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from "react-native";

export default function GoalItem(props) {
  return (
    <TouchableHighlight activeOpacity={.7} onPress={props.onDelete}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableHighlight>
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
