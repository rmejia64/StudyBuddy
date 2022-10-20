import { Text, StyleSheet, Pressable } from "react-native";
import React from "react";

export function Link(props) {
  const { show, text, onPress } = props;

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.link,
        {
          display: show ? "block" : "none",
        },
      ]}
    >
      <Text style={styles.link_text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  link: {
    borderWidth: 1,
    marginTop: "3%",
    padding: 10,
  },
  link_text: {
    fontWeight: "bold",
    color: "white",
    fontSize: "18pt",
    textAlign: "center",
  },
});
