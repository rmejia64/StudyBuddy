import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React from "react";

export function Icons(props) {
  const { handlers, icons } = props;

  return (
    <View style={[styles.container, {}]}>
      <Pressable style={[styles.icon, {}]} onPress={handlers[0]}>
        <Image style={[styles.img, {}]} source={icons[0]} />
      </Pressable>
      <Pressable style={[styles.icon, {}]} onPress={handlers[1]}>
        <Image style={[styles.img, {}]} source={icons[1]} />
      </Pressable>
      <Pressable style={[styles.icon, {}]} onPress={handlers[2]}>
        <Image style={[styles.img, {}]} source={icons[2]} />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    height: "auto",
    margin: 15,
  },
  icon: {
    width: 50,
    height: 50,
    backgroundColor: "gray",
    borderRadius: "50%",
  },
  img: {
    width: "100%",
    height: "100%",
  },
});
