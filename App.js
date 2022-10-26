// Rodrigo Mejia
// COEN 174
// StudyBuddy
// 2022

//++++++++++++++++imports++++++++++
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
} from "react-native";
import { useState, useEffect } from "react";
import { Button } from "./components/Button";
import { Footer } from "./components/Footer";
import { Carousel } from "./components/Carousel";
import { Logout } from "./components/Logout";
import { Nav } from "./components/Nav";
import { Login } from "./components/Login";
import { Header } from "./components/Header";
import { Content } from "./components/Content";

//++++++++++++++++global+++++++++++
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
let SCREEN_WIDTH = screen.width;
let SCREEN_HEIGHT = window.height;

const features = {
  total: 2,
  icons: [
    require("./assets/notes.png"),
    require("./assets/pencil_book.png"),
    require("./assets/cards.png"),
    require("./assets/test.png"),
    require("./assets/time_test.png"),
    require("./assets/open_book.png"),
    require("./assets/certificate.png"),
    require("./assets/bell_plain.png"),
  ],
};

export default function App() {
  console.log("rendering...");

  //++++++++++++++++hooks+++++++++++
  const [showLogin, setLoginDisplay] = useState(false);
  const [submit, onSubmit] = useState(false);
  const [dimensions, setDimensions] = useState({ window, screen });
  const credentials = {
    user: "null",
    password: "null",
    profilePic: require("./assets/stock_man.jpg"),
  };

  //++++++++++++++++strings+++++++++
  const header = "Welcome to StudyBuddy, the smarter way to study!";
  const vision_statement_1 =
    "StudyBuddy is a mobile application that provides an effective and entertaining way of reviewing material.";
  const vision_statement_2 =
    "Unlike Quizlet, Chegg, and other leading study apps our product is fully customizable and allows users to follow study guides tailored to their learning style.";
  const logo = require("./assets/logo.png");
  const logo_alt = require("./assets/logo_alt.png");
  const acc_icon = require("./assets/account_icon.png");
  const settings_icon = require("./assets/settings_icon.png");
  const background = require("./assets/bg.png");
  //++++++++++++++++handlers++++++++

  const handlePress = () => {
    console.log("...icon clicked");
  };

  const handleButton = () => {
    setLoginDisplay(!showLogin);
  };

  const handleSubmit = (user, pass) => {
    console.log("...user logged in");
    credentials.user = user;
    credentials.password = pass;
    console.log("user--------->" + credentials.user);
    console.log("password--------->" + credentials.password);

    onSubmit(true);
  };

  const handleLogout = () => {
    onSubmit(false);
    console.log("...logged out");
    credentials.user = "null";
    credentials.password = "null";
  };

  const handleAccount = () => {
    console.log("...accounts clicked");
  };

  const handleSettings = () => {
    console.log("...settings clicked");
  };

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );

    SCREEN_WIDTH = screen.width;
    SCREEN_HEIGHT = screen.height;
    return () => subscription?.remove();
  });

  //++++++++++++++++jsx+++++++++++++
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.background}
      >
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
          <Nav
            show={true}
            account={acc_icon}
            settings={settings_icon}
            onAccount={handleAccount}
            onSettings={handleSettings}
          />
          <Image style={styles.logo} source={logo_alt} />
          <View style={styles.main}>
            <Header
              show={!showLogin}
              text={header}
              color={"black"}
              size={"24pt"}
            />
            <Login show={showLogin} submit={submit} onSubmit={handleSubmit} />
            <Logout
              show={showLogin}
              submit={submit}
              onClick={handleLogout}
              userPicture={credentials.profilePic}
            />
            <Carousel
              show={!showLogin}
              pages={features}
              onPress={handlePress}
              color={"rgba(200, 0, 0, 0.8)"}
              title={"What Do We Offer?"}
            />
            <Button
              title={showLogin ? "exit" : "enter"}
              onPress={handleButton}
              color={!showLogin ? "green" : "red"}
              show={true}
            />
            <Content
              show={showLogin && !submit}
              text={vision_statement_2}
              color={"gray"}
              size={"16pt"}
            />
            <Header
              show={!showLogin}
              text={"Learn More"}
              color="black"
              size={"12pt"}
            ></Header>
            <Image
              style={[
                styles.down_arrow,
                { display: !showLogin ? "auto" : "none" },
              ]}
              source={require("./assets/down-arrow.png")}
            />
            <Carousel
              show={!showLogin}
              pages={features}
              onPress={handlePress}
              color={"rgba(0, 0, 200, 0.8)"}
              title={"Why Choose Us?"}
            />
          </View>
          <Footer
            show={true}
            text={vision_statement_1}
            color={"rgba(250, 150, 0, 0.8)"}
          />
          <StatusBar style="auto" />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

//++++++++++++++++styles++++++++++
const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    alignItems: "center",
    borderRadius: 20,
    height: "100%",
  },
  main: {
    backgroundColor: "rgba(200, 200, 200, 0.8)",
    width: "95%",
    borderRadius: 20,
    alignItems: "center",
    marginVertical: 10,
    paddingVertical: 10,
  },
  down_arrow: {
    height: 10,
    width: 20,
    margin: 10,
  },
  logo: {
    width: "80%",
    height: "auto",
    marginTop: 30,
    padding: 50,
    resizeMode: "contain",
  },
  background: {
    flex: 1,
    justifyContent: "contain",
  },
});
