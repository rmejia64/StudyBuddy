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
      <Text style={styles.small}>{"Rodrigo Mejia © 2022"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    margin: "auto",
    marginTop: 300,
    alignItems: "center",
  },
  footer: {
    width: "100%",
    fontSize: "16pt",
    fontWeight: "bold",
    color: "gray",
    textAlign: "center",
    padding: "10%",
  },
  small: {
    width: "100%",
    fontSize: "12pt",
    fontWeight: "bold",
    color: "gray",
    textAlign: "center",
    padding: "10%",
  },
});
