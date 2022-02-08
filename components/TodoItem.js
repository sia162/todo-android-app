import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const TodoItem = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={24} color="black" />
        <Text style={styles.text}> {item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    fontSize: 15,
    backgroundColor: "#EEEEEE",
  },
  text: {
    marginLeft: 10,
  },
});
