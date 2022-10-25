// Rodrigo Mejia
// COEN 174
// StudyBuddy
// 2022

//++++++++++++++++imports++++++++++
import { Text, StyleSheet, Pressable } from "react-native";
import React from "react";

export function Link(props) {
  const { show, text, onPress, size, color } = props;

  //++++++++++++++++jsx+++++++++++++
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
      <Text
        allowFontScaling={false}
        style={[styles.link_text, { fontSize: size, color: color }]}
      >
        {text}
      </Text>
    </Pressable>
  );
}

//++++++++++++++++styles++++++++++
const styles = StyleSheet.create({
  link: {
    margin: 5,
    padding: 5,
  },
  link_text: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
