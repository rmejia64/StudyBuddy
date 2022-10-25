// Rodrigo Mejia
// COEN 174
// StudyBuddy
// 2022

//++++++++++++++++imports++++++++++
import { Text, StyleSheet } from "react-native";
import React from "react";

export function Content(props) {
  const { show, text, color, size } = props;

  //++++++++++++++++jsx+++++++++++++
  return (
    <Text
      allowFontScaling={false}
      style={[
        styles.paragraph,
        {
          display: show ? "auto" : "none",
          color: color,
          fontSize: size,
        },
      ]}
    >
      {text}
    </Text>
  );
}

//++++++++++++++++styles++++++++++
const styles = StyleSheet.create({
  paragraph: {
    fontWeight: "bold",
    textAlign: "center",
    padding: 15,
    margin: 15,
  },
});
