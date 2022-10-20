import { View, Image, StyleSheet } from "react-native";
import React from "react";

export function Carousel(props) {
  const { show } = props;

  return (
    <View style={[styles.container, { display: show ? "flex-flow" : "none" }]}>
      <Image
        style={styles.img}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <Image
        style={styles.img}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <Image
        style={styles.img}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "auto",
    width: "auto",
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  img: {
    height: 75,
    width: 75,
    marginLeft: 20,
    marginRight: 20,
  },
});
