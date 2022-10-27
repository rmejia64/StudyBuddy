import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React from "react";
import { Header } from "./Header";

export function Profile(props) {
  const { show, user, color, picture, onPress } = props;

  if (show) {
    console.log("..rendered Profile Info\n");
  }

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: color, display: show ? "auto" : "none" },
      ]}
    >
      <Pressable onPress={onPress}>
        <Image style={styles.img} source={picture} />
      </Pressable>
      <Header show={show} text={user} color={"white"} size={"18pt"} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "auto",
    margin: 15,
    alignItems: "center",
    borderRadius: "20%",
  },
  img: {
    height: 85,
    width: 85,
    margin: 15,
    borderRadius: "50%",
  },
});
