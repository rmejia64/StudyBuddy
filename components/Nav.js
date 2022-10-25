// Rodrigo Mejia
// COEN 174
// StudyBuddy
// 2022

//++++++++++++++++imports++++++++++
import { StyleSheet, Text, View } from "react-native";
import React from "react";

export function Nav(props) {
  const { show } = props;

  //++++++++++++++++jsx+++++++++++++
  return (
    <View style={[{ display: show ? "block" : "none" }, styles.navbar]}>
      <Text style={[{}, styles.nav_text]}>~ Navbar here ~</Text>
    </View>
  );
}

//++++++++++++++++styles++++++++++
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
