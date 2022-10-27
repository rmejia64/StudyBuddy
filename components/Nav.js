// Rodrigo Mejia
// COEN 174
// StudyBuddy
// 2022

//++++++++++++++++imports++++++++++
import { Pressable, StyleSheet, Image, View } from "react-native";
import React from "react";

export function Nav(props) {
  const { show, settings, darkModeIcon, onDarkMode, onSettings } = props;

  if (show) {
    console.log("..rendered Nav\n");
  }

  //++++++++++++++++jsx+++++++++++++
  return (
    <View style={[{ display: show ? "block" : "none" }, styles.navbar]}>
      <Pressable style={styles.img_container} onPress={onDarkMode}>
        <Image style={styles.img} source={darkModeIcon} />
      </Pressable>
      <Pressable style={styles.img_container} onPress={onSettings}>
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
  img_container: {
    height: 40,
    width: 40,
    borderRadius: "50%",
    backgroundColor: "rgba(250, 250, 250, 0.8)",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "black",
  },
  img: {
    height: 25,
    width: 25,
    borderRadius: "50%",
    resizeMode: "contain",
  },
});
