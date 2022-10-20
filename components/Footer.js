import { View, Text, StyleSheet } from "react-native";
import React from "react";

export function Footer(props) {
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
      <Text style={styles.footer}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    margin: "auto",
    alignItems: "center",
  },
  footer: {
    width: "100%",
    fontSize: "16pt",
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    margin: "auto",
    padding: "10%",
  },
});
