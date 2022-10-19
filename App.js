import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { Button } from "/Users/reegz/Documents/coen/coen174 - software engineering/group project/StudyBuddy/components/Button.js";
import { Nav } from "/Users/reegz/Documents/coen/coen174 - software engineering/group project/StudyBuddy/components/Nav.js";

export default function App() {
  const [display_login, setLoginDisplay] = useState(false);

  console.log("......loading");
  console.log("display_login=" + display_login);

  const handleClick = () => {
    console.log("......enter button clicked");
    setLoginDisplay(!display_login);
  };

  return (
    <View style={styles.container}>
      <Text
        style={[{ display: display_login ? "none" : "block" }, styles.title]}
      >
        Welcome to StudyBuddy
      </Text>

      <Nav />

      <Text
        style={[
          { display: display_login ? "none" : "block" },
          styles.visionStatement,
        ]}
      >
        StudyBuddy is a mobile application that provides an effective,
        entertaining and interactive way of reviewing material. Unlike Quizlet,
        Chegg, and other leading study apps our product is fully customizable
        and allows users to follow study guides tailored to their learning
        style.
      </Text>

      <View
        style={[
          { display: display_login ? "block" : "none" },
          styles.login_modal,
        ]}
      >
        <Text>Login Modal</Text>
      </View>

      <StatusBar style="auto" />
      <Button title="enter" onPress={handleClick}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },

  visionStatement: {
    fontSize: 20,
    fontWeight: "bold",
    color: "grey",
    textAlign: "left",
    margin: "20%",
  },

  login_modal: {
    width: 200,
    height: 200,
    backgroundColor: "grey",
    margin: 20,
    textAlign: "center",
  },
});
