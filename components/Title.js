// Rodrigo Mejia
// COEN 174
// StudyBuddy
// 2022

//++++++++++++++++imports++++++++++
import { Text, StyleSheet } from "react-native";
import React from "react";

export function Title(props) {
  const { show, text, color, size } = props;

  //++++++++++++++++jsx+++++++++++++
  return (
    <Text
      allowFontScaling={false}
      style={[
        styles.title,
        {
          color: color,
          display: show ? "auto" : "none",
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
  title: {
    margin: 50,
    fontWeight: "bold",
    alignItems: "center",
  },
});
