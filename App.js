// Rodrigo Mejia
// COEN 174
// StudyBuddy
// 2022

//++++++++++++++++imports
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";

//++++++++++++++++custom
import { Button } from "./components/Button";
import { Footer } from "./components/Footer";
import { Carousel } from "./components/Carousel";
import { Logout } from "./components/Logout";
import { Nav } from "./components/Nav";
import { Login } from "./components/Login";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { credentials } from "./functions/authentication";
import { footer_icons, features, carousel_funcs } from "./functions/objects";
import {
  logo,
  logo_alt,
  dark_mode_icon,
  light_mode_icon,
  settings_icon,
  background,
  background_alt,
} from "./functions/paths";
import { Settings_Page } from "./pages/Settings_Page";

//++++++++++++++++strings
const header = "Welcome to StudyBuddy, the smarter way to study!";
const vision_statement_1 =
  "StudyBuddy is a mobile application that provides an effective and entertaining way of reviewing material.";
const vision_statement_2 =
  "Unlike Quizlet, Chegg, and other leading study apps our product is fully customizable and allows users to follow study guides tailored to their learning style.";
const footerText = "Reach out to our Dev team!";

export default function App() {
  console.clear();
  console.log("[############################]\n");
  console.log("    StudyBuddy loading...\n");
  console.log("            [ % ]\n");

  //++++++++++++++++hooks
  const [showLogin, setLoginDisplay] = useState(false);
  const [submit, onSubmit] = useState(false);
  const [darkMode, setdarkMode] = useState(false);
  const [toggleSettings, changeToggleSettings] = useState(false);

  //++++++++++++++++handlers
  const handleButton = () => {
    setLoginDisplay(!showLogin);
  };

  const handleSubmit = (user, pass) => {
    console.log("[############################]\n");
    console.log("...a user has logged in\n");
    credentials.user = user;
    credentials.password = pass;
    console.log("user--------->" + credentials.user);
    console.log("password--------->" + credentials.password + "\n");

    onSubmit(true);
  };

  const handleLogout = () => {
    onSubmit(false);
    console.log("[############################]\n");
    console.log("...user has logged out\n");
    console.log("...logged out");
    credentials.user = "null";
    credentials.password = "null";
  };

  const handleSettings = () => {
    console.log("...settings clicked");
    changeToggleSettings(!toggleSettings);
  };

  const handleDarkMode = () => {
    console.log(
      "\n...loading UI in " + (darkMode ? "[LIGHT]" : "[DARK]") + " mode\n"
    );

    setdarkMode(!darkMode);
  };

  console.log("...content rendering\n");

  //++++++++++++++++jsx
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={darkMode ? background_alt : background}
        resizedarkMode="cover"
        style={styles.background}
      >
        <ScrollView
          contentContainerStyle={[
            styles.container,
            {
              width: "100%",
              height: "auto",
            },
          ]}
          alwaysBounceVertical={true}
          snapToEnd={true}
          scrollEnabled={true}
        >
          <Nav
            show={true}
            darkModeIcon={darkMode ? dark_mode_icon : light_mode_icon}
            settings={settings_icon}
            onDarkMode={handleDarkMode}
            onSettings={handleSettings}
          />
          <Image style={styles.logo} source={darkMode ? logo_alt : logo} />
          <View
            style={[
              styles.main,
              {
                backgroundColor: darkMode
                  ? "rgba(0, 0, 0, 0.9)"
                  : "rgba(250, 250, 250, 0.9)",

                borderColor: darkMode ? "white" : "black",
              },
            ]}
          >
            <Header
              show={!showLogin}
              text={header}
              color={darkMode ? "white" : "black"}
              size={"24pt"}
            />
            <Login
              show={showLogin}
              submit={submit}
              onSubmit={handleSubmit}
              color={darkMode ? "white" : "black"}
              color_text={darkMode ? "black" : "white"}
            />
            <Logout
              show={showLogin}
              submit={submit}
              onClick={handleLogout}
              userPicture={credentials.profilePic}
              color={darkMode ? "white" : "black"}
              color_text={darkMode ? "black" : "white"}
            />
            <Carousel
              show={!showLogin}
              pages={features}
              carousel_links={carousel_funcs}
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
              text={vision_statement_1}
              color={darkMode ? "white" : "black"}
              size={"16pt"}
            />
            <Image
              style={[
                styles.down_arrow,
                { display: !showLogin ? "auto" : "none" },
              ]}
              source={require("./assets/down-arrow.png")}
            />
            <Header
              show={!showLogin}
              text={vision_statement_2}
              color={darkMode ? "white" : "black"}
              size={"16pt"}
            />
            <Carousel
              show={!showLogin}
              pages={features}
              carousel_links={carousel_funcs}
              color={"rgba(0, 0, 200, 0.8)"}
              title={"Why Choose Us?"}
            />
          </View>
          <Footer
            show={true}
            text={footerText}
            color={"rgba(250, 150, 0, 0.8)"}
            clickable_logos={footer_icons.logos}
            social_links={footer_icons.links}
            color_br={darkMode ? "white" : "black"}
          />
          <StatusBar style="auto" />
          <Settings_Page show={toggleSettings} close={changeToggleSettings} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

//++++++++++++++++styles
const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    alignItems: "center",
    borderRadius: 20,
    height: "100%",
  },
  main: {
    width: "95%",
    borderRadius: 20,
    borderWidth: 5,
    alignItems: "center",
    marginVertical: 10,
    paddingVertical: 10,
  },
  down_arrow: {
    height: 30,
    width: 30,
    margin: 15,
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
