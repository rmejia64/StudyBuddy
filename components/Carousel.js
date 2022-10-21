import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { React, useState } from "react";

export function Carousel(props) {
  const { show } = props;

  {
    /* ++++++++++++++++++++++++++++++++ */
  }
  const total = 2;
  const [page, changePage] = useState(0);
  console.log("------------>carousel_page:" + page);
  {
    /* ++++++++++++++++++++++++++++++++ */
  }
  return (
    <View style={[styles.container, { display: show ? "flex-flow" : "none" }]}>
      {/* ++++++++++++++page1+++++++++++++ */}
      <View
        style={[
          styles.container,
          {
            display: page === 0 ? "auto" : "none",
          },
        ]}
      >
        <Image style={styles.img} source={require("../assets/notes.png")} />
        <Image
          style={styles.img}
          source={require("../assets/pencil_book.png")}
        />
        <Image style={styles.img} source={require("../assets/cards.png")} />
        <Image style={styles.img} source={require("../assets/test.png")} />
      </View>
      {/* ++++++++++++++++++++++++++++++++ */}

      {/* ++++++++++++++page2+++++++++++++ */}

      <View
        style={[
          styles.container,
          {
            display: page === 1 ? "auto" : "none",
          },
        ]}
      >
        <Image style={styles.img} source={require("../assets/time_test.png")} />
        <Image style={styles.img} source={require("../assets/open_book.png")} />
        <Image
          style={styles.img}
          source={require("../assets/certificate.png")}
        />
        <Image
          style={styles.img}
          source={require("../assets/bell_plain.png")}
        />
      </View>
      {/* ++++++++++++++++++++++++++++++++ */}

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
          style={[styles.left, {}]}
        >
          <Image
            style={styles.bg}
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
          style={[styles.right, {}]}
        >
          <Image
            style={styles.bg}
            source={require("../assets/right-arrow.png")}
          />
        </TouchableOpacity>

        {/* ++++++++++++++++++++++++++++++++ */}
      </View>

      {/* ++++++++++++++++++++++++++++++++ */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "auto",
    width: "90%",
    backgroundColor: "grey",
    padding: 5,
    margin: 25,
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
    alignItems: "center",
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  left: {
    height: 50,
    width: 50,
  },
  right: {
    height: 50,
    width: 50,
  },
  bg: {
    width: "100%",
    height: "100%",
  },
});
