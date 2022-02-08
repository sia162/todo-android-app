import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Header from "./components/Header";
// import Sandox from "./components/Sandox";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevtodos) => {
      return prevtodos.filter((item) => item.key !== key);
    });
  };

  const addtodohandler = (text) => {
    if (text.length > 3)
      setTodos([...todos, { text: text, key: Math.random().toString() }]);
    else {
      Alert.alert("OOPS!", "todos must be over 3 char long.", [
        { text: "understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    // <Sandox />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        // console.log("dismiss keyboard");
      }}
    >
      <View style={styles.container}>
        {/* header */}
        <Header />
        <View style={styles.content}>
          {/* to-do form */}
          <TodoForm addtodohandler={addtodohandler} />
          <View style={styles.list}>
            {/* list */}
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem
                  item={item}
                  pressHandler={pressHandler}
                  addtodohandler
                />
              )}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
    padding: 10,
  },
});
