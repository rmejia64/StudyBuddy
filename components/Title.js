import { Text, StyleSheet } from "react-native";
import React from "react";

export function Title(props) {
  const { show, text } = props;

  return (
    <Text
      style={[
        styles.title,
        {
          display: show ? "block" : "none",
        },
      ]}
    >
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: "5%",
    fontSize: "40pt",
    fontWeight: "bold",
    alignItems: "center",
  },
});
