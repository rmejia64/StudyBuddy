// Rodrigo Mejia
// COEN 174
// StudyBuddy
// 2022

//++++++++++++++++imports++++++++++
import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { Link } from "./Link";
import { Icons } from "./Icons";

import { FAQ_Page } from "../pages/FAQ_Page.js";
import { Help_Page } from "../pages/Help_Page";
import { Mission_Page } from "../pages/Mission_Page";
import { Research_Page } from "../pages/Research_Page";
import { License_Page } from "../pages/License_Page";
import { Study_Page } from "../pages/Study_Page";
import { Terms_Page } from "../pages/Terms_Page";
import { Tutorial_Page } from "../pages/Tutorial_Page";
import { Other_Apps } from "../pages/Other_Apps";

export function Footer(props) {
  const { show, text, color, clickable_logos, social_links, color_br } = props;

  if (show) {
    console.log("..rendered Footer\n");
    console.log("[############################]\n");
  }

  const [FAQ, toggleFAQ] = useState(false);
  const [help, toggleHelp] = useState(false);
  const [email, toggleEmail] = useState(false);

  const [mission, toggleMission] = useState(false);
  const [research, toggleResearch] = useState(false);
  const [license, toggleLicense] = useState(false);
  const [terms, toggleTerms] = useState(false);

  const [other, toggleOther] = useState(false);
  const [tips, toggleTips] = useState(false);
  const [tutorial, toggleTutorial] = useState(false);

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
              toggleFAQ(!FAQ);
            }}
            text={"FAQ"}
          />
          <Link
            show={show}
            color={"gray"}
            size={"12pt"}
            onPress={() => {
              console.log("...[Help] link clicked");
              toggleHelp(!help);
            }}
            text={"Help"}
          />
          <Link
            show={show}
            color={"gray"}
            size={"12pt"}
            onPress={() => {
              console.log("...[Email Us] link clicked");
              toggleEmail(!email);
              alert("Email coming soon!");
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
              toggleMission(!mission);
            }}
            text={"Mission"}
          />
          <Link
            show={show}
            color={"gray"}
            size={"12pt"}
            onPress={() => {
              console.log("...[Research] link clicked");
              toggleResearch(!research);
            }}
            text={"Research"}
          />
          <Link
            show={show}
            color={"gray"}
            size={"12pt"}
            onPress={() => {
              console.log("...[License] link clicked");
              toggleLicense(!license);
            }}
            text={"License"}
          />
          <Link
            show={show}
            color={"gray"}
            size={"12pt"}
            onPress={() => {
              console.log("...[Terms & Conditions] link clicked");
              toggleTerms(!terms);
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
              toggleOther(!other);
            }}
            text={"Other Apps"}
          />
          <Link
            show={show}
            color={"gray"}
            size={"12pt"}
            onPress={() => {
              console.log("...[Study Tips] link clicked");
              toggleTips(!tips);
            }}
            text={"Study Tips"}
          />
          <Link
            show={show}
            color={"gray"}
            size={"12pt"}
            onPress={() => {
              console.log("...[Tutorial] link clicked");
              toggleTutorial(!tutorial);
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

      <FAQ_Page show={FAQ} close={toggleFAQ} />
      <Help_Page show={help} close={toggleHelp} />
      <Mission_Page show={mission} close={toggleMission} />

      <Research_Page show={research} close={toggleResearch} />
      <License_Page show={license} close={toggleLicense} />
      <Study_Page show={tips} close={toggleTips} />

      <Tutorial_Page show={tutorial} close={toggleTutorial} />
      <Other_Apps show={other} close={toggleOther} />
      <Terms_Page show={terms} close={toggleTerms} />
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
