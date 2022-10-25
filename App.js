// Rodrigo Mejia
// COEN 174
// StudyBuddy
// 2022

//++++++++++++++++imports++++++++++
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, ScrollView, Dimensions } from "react-native";
import { useState, useEffect } from "react";
import { Button } from "./components/Button.js";
import { Title } from "./components/Title.js";
import { Login } from "./components/Login.js";
import { Header } from "./components/Header.js";
import { Content } from "./components/Content.js";
import { Footer } from "./components/Footer.js";
import { Carousel } from "./components/Carousel.js";
import { Logout } from "./components/Logout.js";

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
  const title = "StudyBuddy";
  const header = "Welcome to StudyBuddy, the smarter way to study!";
  const vision_statement_1 =
    "StudyBuddy is a mobile application that provides an effective and entertaining way of reviewing material.";
  const vision_statement_2 =
    "Unlike Quizlet, Chegg, and other leading study apps our product is fully customizable and allows users to follow study guides tailored to their learning style.";

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
    <View style={{ flex: 1, backgroundColor: "black" }}>
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
        <Title show={true} text={title} color={"black"} size={"40pt"} />
        <Header show={!showLogin} text={header} color={"black"} size={"24pt"} />
        <Login show={showLogin} submit={submit} onSubmit={handleSubmit} />
        <Content
          show={showLogin && !submit}
          text={vision_statement_2}
          color={"gray"}
          size={"16pt"}
        />
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
        <Header
          show={!showLogin}
          text={"Learn More"}
          color="black"
          size={"12pt"}
        ></Header>
        <Image
          style={[styles.down_arrow, { display: !showLogin ? "auto" : "none" }]}
          source={require("./assets/down-arrow.png")}
        />
        <Carousel
          show={!showLogin}
          pages={features}
          onPress={handlePress}
          color={"rgba(0, 0, 200, 0.8)"}
          title={"Why Choose Us?"}
        />
        <Footer
          show={true}
          text={vision_statement_1}
          color={"rgba(250, 150, 0, 0.8)"}
        />
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

//++++++++++++++++styles++++++++++
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingVertical: 50,
    alignItems: "center",
    borderRadius: 50,
    height: "100%",
  },
  down_arrow: {
    height: 10,
    width: 20,
    margin: 10,
  },
});
