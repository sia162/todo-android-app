import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Sandox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  );
};

export default Sandox;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingTop: 40,
    backgroundColor: "#ddd",
  },

  //flex items
  boxOne: {
    flex: 2,
    backgroundColor: "violet",
    padding: 20,
  },
  boxTwo: {
    flex: 1,
    backgroundColor: "gold",
    padding: 30,
  },
  boxThree: {
    flex: 1,
    backgroundColor: "coral",
    padding: 60,
  },
  boxFour: {
    flex: 1,
    backgroundColor: "skyblue",
    padding: 10,
  },
});
