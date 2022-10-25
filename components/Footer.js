// Rodrigo Mejia
// COEN 174
// StudyBuddy
// 2022

//++++++++++++++++imports++++++++++
import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "./Link";

export function Footer(props) {
  const { show, text, color } = props;

  //++++++++++++++++jsx+++++++++++++
  return (
    <View
      style={[
        styles.container,
        {
          display: show ? "auto" : "none",
          backgroundColor: color,
        },
      ]}
    >
      <Text allowFontScaling={false} style={styles.footer_text}>
        {text}
      </Text>
      <View style={styles.link_container}>
        <View style={styles.section}>
          <Text style={styles.section_header}>Questions</Text>
          <Link
            show={show}
            color={"gray"}
            size={"12pt"}
            onPress={() => {}}
            text={"FAQ"}
          />
          <Link
            show={show}
            color={"gray"}
            size={"12pt"}
            onPress={() => {}}
            text={"Help"}
          />
          <Link
            show={show}
            color={"gray"}
            size={"12pt"}
            onPress={() => {}}
            text={"Email Us"}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.section_header}>About Us</Text>
          <Link
            show={show}
            color={"gray"}
            size={"12pt"}
            onPress={() => {}}
            text={"Mission"}
          />
          <Link
            show={show}
            color={"gray"}
            size={"12pt"}
            onPress={() => {}}
            text={"Research"}
          />
          <Link
            show={show}
            color={"gray"}
            size={"12pt"}
            onPress={() => {}}
            text={"License"}
          />
          <Link
            show={show}
            color={"gray"}
            size={"12pt"}
            onPress={() => {}}
            text={"Terms & Conditions"}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.section_header}>Learn More</Text>
          <Link
            show={show}
            color={"gray"}
            size={"12pt"}
            onPress={() => {}}
            text={"Other Apps"}
          />
          <Link
            show={show}
            color={"gray"}
            size={"12pt"}
            onPress={() => {}}
            text={"Study Tips"}
          />
          <Link
            show={show}
            color={"gray"}
            size={"12pt"}
            onPress={() => {}}
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
  },
  footer_text: {
    width: "100%",
    fontSize: "16pt",
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    padding: 50,
    borderRadius: 20,
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
    paddingVertical: 10,
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
});
