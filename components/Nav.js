// Rodrigo Mejia
// COEN 174
// StudyBuddy
// 2022

//++++++++++++++++imports++++++++++
import { Pressable, StyleSheet, Image, View } from "react-native";
import React from "react";

export function Nav(props) {
  const { show, settings, account, onAccount, onSettings } = props;

  //++++++++++++++++jsx+++++++++++++
  return (
    <View style={[{ display: show ? "block" : "none" }, styles.navbar]}>
      <Pressable onPress={onAccount}>
        <Image style={styles.img} source={account} />
      </Pressable>
      <Pressable onPress={onSettings}>
        <Image style={styles.img} source={settings} />
      </Pressable>
    </View>
  );
}

//++++++++++++++++styles++++++++++
const styles = StyleSheet.create({
  navbar: {
    width: "100%",
    height: "auto",
    paddingHorizontal: 25,
    margin: 50,
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  img: {
    height: 30,
    width: 30,
    borderRadius: "50%",
    backgroundColor: "rgba(100, 180, 255, 0.4)",
    resizeMode: "contain",
  },
});
