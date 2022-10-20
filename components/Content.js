import { View, Text, StyleSheet } from "react-native";
import React from "react";

export function Content(props) {
  const { show, text } = props;

  return (
    <View
      style={[
        styles.container,
        {
          display: show ? "block" : "none",
        },
      ]}
    >
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "65%",
    height: "auto",
    alignItems: "center",
    padding: "5%",
  },

  paragraph: {
    textAlign: "left",
    fontSize: "12pt",
    fontWeight: "bold",
    color: "black",
  },
});
