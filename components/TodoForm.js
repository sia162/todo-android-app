import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

const TodoForm = ({ addtodohandler }) => {
  const [todotext, setTodotext] = useState("");

  const changeHandler = (val) => {
    setTodotext(val);
  };

  return (
    <View style={styles.form}>
      <Text style={styles.todohead}>add todo.</Text>
      <TextInput
        style={styles.todotext}
        placeholder="learn something."
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => addtodohandler(todotext)}
        title="add"
        color="#041562"
      />
    </View>
  );
};

export default TodoForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 26,
    marginHorizontal: 10,
  },
  todotext: {
    marginTop: 8,
    marginBottom: 10,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  todohead: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#11468F",
  },
});
