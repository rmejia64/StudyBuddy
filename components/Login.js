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
  const { show, submit, onSubmit, color, color_text } = props;
  const [username, changeUser] = React.useState("null");
  const [pass, changePass] = React.useState("null");

  if (show && !submit) {
    console.log("..rendered login module\n");
  }

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
          backgroundColor: color,
        },
      ]}
    >
      <Text
        allowFontScaling={false}
        style={[
          [styles.modal_text, { color: color_text }],
          { color: color_text },
        ]}
      >
        Email Address:
      </Text>
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: color_text,
          },
        ]}
        ChangeText={handleText}
        placeholder="username"
        placeholderTextColor={color}
        keyboardType="email"
      ></TextInput>

      <Text
        allowFontScaling={false}
        style={[styles.modal_text, { color: color_text }]}
      >
        Password:
      </Text>
      <TextInput
        style={[styles.input, { backgroundColor: color_text }]}
        ChangeText={handleText}
        placeholder="password"
        placeholderTextColor={color}
        keyboardType="password"
      ></TextInput>

      <Text
        allowFontScaling={false}
        style={[styles.modal_text, { color: color_text }]}
      >
        Confirm Password:
      </Text>
      <TextInput
        style={[styles.input, { backgroundColor: color_text }]}
        ChangeText={handleText}
        placeholder="re-type password"
        placeholderTextColor={color}
        keyboardType="password"
      ></TextInput>

      <Link
        show={show}
        color={color_text}
        size={"12pt"}
        allowFontScaling={false}
        style={styles.modal_link}
        text={"Already Have An Account?"}
        onPress={() => {
          console.log("...existing user link clicked");
        }}
      ></Link>

      <Button
        show={true}
        title={"submit"}
        color="rgba(180, 180, 180, 0.9)"
        onPress={handlePress}
      />

      <Link
        show={show}
        color={color_text}
        size={"12pt"}
        allowFontScaling={false}
        style={styles.modal_link}
        text={"Forgot Username or Password?"}
        onPress={() => {
          console.log("...reset link clicked");
        }}
      ></Link>
    </View>
  );
}

//++++++++++++++++styles++++++++++
const styles = StyleSheet.create({
  login_modal: {
    width: "90%",
    height: "auto",
    margin: 20,
    borderRadius: 25,
    alignItems: "center",
    padding: "5%",
  },
  modal_text: {
    fontWeight: "bold",
    fontSize: "14pt",
  },
  modal_link: {
    textDecorationLine: "underline",
    margin: 15,
  },
  input: {
    height: 40,
    width: "90%",
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderColor: "red",
  },
});
