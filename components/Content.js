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
    width: "100%",
    height: "auto",
    alignItems: "center",
    padding: "5%",
  },

  paragraph: {
    width: "100%",
    fontSize: "16pt",
    fontWeight: "bold",
    color: "gray",
    textAlign: "center",
    padding: "10%",
  },
});
