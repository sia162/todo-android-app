import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>my todo list.</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "#041562",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    fontFamily: "sans-serif-condensed",
  },
});
