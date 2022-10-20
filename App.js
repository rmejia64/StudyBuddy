// Rodrigo Mejia
// COEN 174
// StudyBuddy
// 2022

//++++++++++++++++imports++++++++++
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Dimensions } from "react-native";
import { useState } from "react";
import { Button } from "./components/Button.js";
import { Title } from "./components/Title.js";
import { Login } from "./components/Login.js";
import { Header } from "./components/Header.js";
import { Content } from "./components/Content.js";
import { Footer } from "./components/Footer.js";
import { Carousel } from "./components/Carousel.js";

//++++++++++++++++global+++++++++++
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  console.log("loading...");

  //++++++++++++++++hooks+++++++++++
  const [display_login, setLoginDisplay] = useState(false);
  const [user_login_success, setUserLogin] = useState(false);
  //++++++++++++++++

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

  //++++++++++++++++jsx+++++++++++++
  return (
    <View style={styles.container}>
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
    </View>
  );
}

//++++++++++++++++styles++++++++++
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: windowWidth,
    height: windowHeight,
    paddingTop: "15%",
    paddingBottom: "15%",
  },
});
