import { View, Text, StyleSheet } from "react-native";
import React from "react";

export function Header(props) {
  const { show, text } = props;

  return (
    <View
      style={[
        styles.container,
        {
          display: show ? "none" : "block",
        },
      ]}
    >
      <Text style={styles.heading}>{text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "90%",
    margin: "auto",
    alignItems: "center",
  },
  heading: {
    width: "80%",
    fontSize: "24pt",
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    padding: "5%",
  },
});
