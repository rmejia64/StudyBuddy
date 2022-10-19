import { StyleSheet, Text, View } from "react-native";
import React from "react";

export function Nav(props) {
  const { show } = props;

  return (
    <View style={[{ display: show ? "block" : "none" }, styles.navbar]}>
      <Text style={[{}, styles.nav_text]}>~ Navbar here ~</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    width: "75%",
    height: 50,
    backgroundColor: "grey",
    padding: 15,
    margin: 25,
  },
  nav_text: {
    color: "white",
    textAlign: "center",
  },
});
