// Rodrigo Mejia
// COEN 174
// StudyBuddy
// 2022

//++++++++++++++++imports++++++++++
import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Link } from "./Link";
import { Icons } from "./Icons";

export function Footer(props) {
  const { show, text, color, clickable_logos, social_links, color_br } = props;

  if (show) {
    console.log("..rendered Footer\n");
    console.log("[############################]\n");
  }

  //++++++++++++++++jsx+++++++++++++
  return (
    <View
      style={[
        styles.container,
        {
          display: show ? "auto" : "none",
          backgroundColor: color,
          borderColor: color_br,
        },
      ]}
    >
      <Image
        style={[styles.up_arrow]}
        source={require("../assets/up-arrow.png")}
      />
      <Text allowFontScaling={false} style={styles.footer_text}>
        {text}
      </Text>
      <Icons handlers={social_links} icons={clickable_logos} />
      <View style={styles.link_container}>
        <View style={styles.section}>
          <Text style={styles.section_header}>Questions</Text>
          <Link
            show={show}
            color={"gray"}
            size={"12pt"}
            onPress={() => {
              console.log("...[FAQ] link clicked");
            }}
            text={"FAQ"}
          />
          <Link
            show={show}
            color={"gray"}
            size={"12pt"}
            onPress={() => {
              console.log("...[Help] link clicked");
            }}
            text={"Help"}
          />
          <Link
            show={show}
            color={"gray"}
            size={"12pt"}
            onPress={() => {
              console.log("...[Email Us] link clicked");
            }}
            text={"Email Us"}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.section_header}>About Us</Text>
          <Link
            show={show}
            color={"gray"}
            size={"12pt"}
            onPress={() => {
              console.log("...[Mission] link clicked");
            }}
            text={"Mission"}
          />
          <Link
            show={show}
            color={"gray"}
            size={"12pt"}
            onPress={() => {
              console.log("...[Research] link clicked");
            }}
            text={"Research"}
          />
          <Link
            show={show}
            color={"gray"}
            size={"12pt"}
            onPress={() => {
              console.log("...[License] link clicked");
            }}
            text={"License"}
          />
          <Link
            show={show}
            color={"gray"}
            size={"12pt"}
            onPress={() => {
              console.log("...[Terms & Conditions] link clicked");
            }}
            text={"Terms & Conditions"}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.section_header}>Learn More</Text>
          <Link
            show={show}
            color={"gray"}
            size={"12pt"}
            onPress={() => {
              console.log("...[Other Apps] link clicked");
            }}
            text={"Other Apps"}
          />
          <Link
            show={show}
            color={"gray"}
            size={"12pt"}
            onPress={() => {
              console.log("...[Study Tips] link clicked");
            }}
            text={"Study Tips"}
          />
          <Link
            show={show}
            color={"gray"}
            size={"12pt"}
            onPress={() => {
              console.log("...[Tutorial] link clicked");
            }}
            text={"Tutorial"}
          />
        </View>
      </View>
      <Text allowFontScaling={false} style={styles.copyright}>
        {"Computer Engineering 174"}
      </Text>
      <Text allowFontScaling={false} style={styles.copyright}>
        {"Santa Clara University © 2022"}
      </Text>
    </View>
  );
}

//++++++++++++++++styles++++++++++
const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    marginVertical: 50,
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 5,
  },
  footer_text: {
    width: "100%",
    fontSize: "16pt",
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    margin: 5,
  },
  copyright: {
    width: "100%",
    fontSize: "12pt",
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    paddingTop: "10%",
  },
  link_container: {
    height: "auto",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "no-wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    paddingVertical: 5,
    borderRadius: 20,
  },
  section: {
    width: "30%",
    height: "90%",
    borderRadius: 20,
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 150,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  section_header: {
    fontWeight: "bold",
    fontSize: "18pt",
    textAlign: "center",
    marginBottom: 25,
    color: "black",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  up_arrow: {
    height: 30,
    width: 30,
    margin: 5,
  },
});
