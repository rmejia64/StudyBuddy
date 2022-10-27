// Rodrigo Mejia
// COEN 174
// StudyBuddy
// 2022

//++++++++++++++++imports++++++++++
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { React, useState } from "react";
import { Header } from "./Header";

export function Carousel(props) {
  const { show, pages, onPress, color, title } = props;

  //++++++++++++++++hooks+++++++++++
  const total = pages.total;
  const [page, changePage] = useState(0);

  if (show) {
    console.log("...loaded carousel");
    console.log("------------>carousel_page:" + page);
  }

  //++++++++++++++++jsx+++++++++++++
  return (
    <View
      style={[
        styles.container,
        { display: show ? "flex-flow" : "none", backgroundColor: color },
      ]}
    >
      <Header text={title} show={show} size={"16pt"} color={"white"} />
      <View
        style={[
          styles.sub_container,
          {
            display: page === 0 ? "auto" : "none",
          },
        ]}
      >
        <Pressable onPress={onPress}>
          <Image style={styles.img} source={pages.icons[0]} />
        </Pressable>
        <Pressable onPress={onPress}>
          <Image style={styles.img} source={pages.icons[1]} />
        </Pressable>
        <Pressable onPress={onPress}>
          <Image style={styles.img} source={pages.icons[2]} />
        </Pressable>
        <Pressable onPress={onPress}>
          <Image style={styles.img} source={pages.icons[3]} />
        </Pressable>
      </View>
      <View
        style={[
          styles.sub_container,
          {
            display: page === 1 ? "auto" : "none",
          },
        ]}
      >
        <Pressable onPress={onPress}>
          <Image style={styles.img} source={pages.icons[4]} />
        </Pressable>
        <Pressable onPress={onPress}>
          <Image style={styles.img} source={pages.icons[5]} />
        </Pressable>
        <Pressable onPress={onPress}>
          <Image style={styles.img} source={pages.icons[6]} />
        </Pressable>
        <Pressable onPress={onPress}>
          <Image style={styles.img} source={pages.icons[7]} />
        </Pressable>
      </View>

      {/* ++++++++++++buttons+++++++++++++ */}
      <View style={[styles.button_container, {}]}>
        {/* +++++++++++++++++left+++++++++++ */}
        <TouchableOpacity
          onPress={() => {
            if (page < 1) {
              changePage(page + total - 1);
            } else {
              changePage(page - 1);
            }
          }}
          style={[{ width: 50, height: 50 }]}
        >
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("../assets/left-arrow.png")}
          />
        </TouchableOpacity>
        {/* +++++++++++++++++right+++++++++ */}
        <TouchableOpacity
          onPress={() => {
            if (page > total - 2) {
              changePage(page - total + 1);
            } else {
              changePage(page + 1);
            }
          }}
          style={[{ width: 50, height: 50 }]}
        >
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("../assets/right-arrow.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

//++++++++++++++++styles++++++++++
const styles = StyleSheet.create({
  container: {
    height: "auto",
    width: "95%",
    padding: 5,
    margin: 25,
    borderRadius: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  sub_container: {
    height: "auto",
    width: "90%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 5,
    margin: 20,
    borderRadius: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  img: {
    height: 85,
    width: 85,
    margin: 25,
  },
  button_container: {
    width: "100%",
    height: "auto",
    position: "absolute",
    left: 5,
    top: "50%",
    alignItems: "center",
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
