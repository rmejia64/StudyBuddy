// Rodrigo Mejia
// COEN 174
// StudyBuddy
// 2022

//++++++++++++++++imports++++++++++
import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Button } from "./Button.js";
import { Link } from "./Link.js";

export function Login(props) {
  const { show, submit, onSubmit } = props;
  const [username, changeUser] = React.useState("null");
  const [pass, changePass] = React.useState("null");

  const handleText = () => {
    changeUser;
    changePass;
  };

  const handlePress = () => {
    onSubmit(username, pass);
  };

  //++++++++++++++++jsx+++++++++++++
  return (
    <View
      style={[
        styles.login_modal,
        {
          display: show && !submit ? "auto" : "none",
        },
      ]}
    >
      <Text allowFontScaling={false} style={styles.modal_text}>
        Email Address:
      </Text>
      <TextInput
        style={styles.input}
        ChangeText={handleText}
        placeholder="username"
        keyboardType="email"
      ></TextInput>

      <Text allowFontScaling={false} style={styles.modal_text}>
        Password:
      </Text>
      <TextInput
        style={styles.input}
        ChangeText={handleText}
        placeholder="password"
        keyboardType="password"
      ></TextInput>

      <Text allowFontScaling={false} style={styles.modal_text}>
        Confirm Password:
      </Text>
      <TextInput
        style={styles.input}
        ChangeText={handleText}
        placeholder="re-type password"
        keyboardType="password"
      ></TextInput>

      <Link
        show={show}
        color={"white"}
        size={"12pt"}
        allowFontScaling={false}
        style={styles.modal_link}
        text={"Already Have An Account?"}
        onPress={() => {}}
      ></Link>

      <Button
        show={true}
        title={"submit"}
        color="rgba(180, 180, 180, 0.9)"
        onPress={handlePress}
      />

      <Link
        show={show}
        color={"white"}
        size={"12pt"}
        allowFontScaling={false}
        style={styles.modal_link}
        text={"Forgot Username or Password?"}
        onPress={() => {}}
      ></Link>
    </View>
  );
}

//++++++++++++++++styles++++++++++
const styles = StyleSheet.create({
  login_modal: {
    width: "90%",
    height: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    margin: 20,
    borderRadius: 25,
    alignItems: "center",
    padding: "5%",
  },
  modal_text: {
    color: "white",
    fontWeight: "bold",
    fontSize: "14pt",
  },
  modal_link: {
    color: "white",
    textDecorationLine: "underline",
    margin: 15,
  },
  input: {
    height: 40,
    width: "90%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },
});
