import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
// import { Button } from "./Button";

export class Nav extends Component {
  render() {
    return (
      <View style={styles.navbar}>
        <Text style={styles.nav_text}>~ Navbar here ~</Text>
        {/* <Button /> */}
      </View>
    );
  }
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
