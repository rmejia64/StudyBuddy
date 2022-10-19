import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";

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
      <Text style={styles.title}>Welcome to StudyBuddy</Text>
      <Text style={styles.visionStatement}>
        StudyBuddy is a mobile application that provides an effective,
        entertaining and interactive way of reviewing material. Unlike Quizlet,
        Chegg, and other leading study apps our product is fully customizable
        and allows users to follow study guides tailored to their learning
        style.
      </Text>
      <StatusBar style="auto" />
      <View>
        <Button
          title="enter"
          style={styles.enter}
          onPress={handleClick}
        ></Button>
      </View>
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
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
  },

  visionStatement: {
    fontSize: "12px",
    fontWeight: "bold",
    color: "grey",
    textAlign: "left",
    margin: "10%",
  },

  enter: {
    backgroundColor: "blue",
  },
});
