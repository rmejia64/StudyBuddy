// Rodrigo Mejia
// COEN 174
// StudyBuddy
// 2022

//++++++++++++++++imports++++++++++
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView, Dimensions } from "react-native";
import { useState, useEffect } from "react";
import { Button } from "./components/Button.js";
import { Title } from "./components/Title.js";
import { Login } from "./components/Login.js";
import { Header } from "./components/Header.js";
import { Content } from "./components/Content.js";
import { Footer } from "./components/Footer.js";
import { Carousel } from "./components/Carousel.js";

//++++++++++++++++global+++++++++++
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
let SCREEN_WIDTH = screen.width;
let SCREEN_HEIGHT = window.height;

export default function App() {
  console.log("loading...");

  //++++++++++++++++hooks+++++++++++
  const [display_login, setLoginDisplay] = useState(false);
  const [user_login_success, setUserLogin] = useState(false);
  const [dimensions, setDimensions] = useState({ window, screen });

  //++++++++++++++++strings+++++++++
  const title = "StudyBuddy";
  const header = "Welcome to StudyBuddy, the smarter way to study!";
  const vision_statement_1 =
    "StudyBuddy is a mobile application that provides an effective and entertaining way of reviewing material.";
  const vision_statement_2 =
    "Unlike Quizlet, Chegg, and other leading study apps our product is fully customizable and allows users to follow study guides tailored to their learning style.";

  //++++++++++++++++handlers++++++++
  const handleClick = () => {
    console.log("...button clicked");
    console.log("------------>display_login:" + display_login);
    setLoginDisplay(!display_login);
  };

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );

    SCREEN_WIDTH = dimensions.screen.width;
    SCREEN_HEIGHT = dimensions.screen.height;
    return () => subscription?.remove();
  });

  //++++++++++++++++elm+++++++++++++
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={[
          styles.container,
          {
            width: dimensions.screen.width,
            height: "auto",
          },
        ]}
        alwaysBounceVertical={true}
        snapToEnd={true}
        scrollEnabled={true}
      >
        <Title show={true} text={title} />
        <Header show={display_login} text={header} />
        <Content show={display_login} text={vision_statement_2} />
        <Login show={display_login} />
        <Carousel show={!display_login} />
        <Button
          title={display_login ? "exit" : "enter"}
          onPress={handleClick}
          color={display_login}
          show={true}
        />
        <Footer show={!display_login} text={vision_statement_1} />
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

//++++++++++++++++styles++++++++++
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: "15%",
    paddingBottom: "15%",
    alignItems: "center",
  },
});
