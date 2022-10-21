import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Link } from "./Link";

export function Login(props) {
  const { show } = props;
  console.log("...login module displayed");

  const [
    text,
    changeText = (e) => {
      console.log("...text was changed");
      text = e;
    },
  ] = React.useState(null);
  //create a context
  const [
    submit,
    setSubmit = () => {
      submit = !submit;
      console.log("------------>submit:" + submit);
    },
  ] = React.useState(false);

  return (
    <View
      style={[
        styles.login_modal,
        {
          display: show && !submit ? "block" : "none",
        },
      ]}
    >
      <Text style={styles.modal_text}>Email Address:</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={changeText}
        placeholder="username"
        keyboardType="email"
      ></TextInput>

      <Text style={styles.modal_text}>Password:</Text>
      <TextInput
        style={styles.input}
        onChangeText={changeText}
        value={null}
        placeholder="password"
        keyboardType="password"
      ></TextInput>

      <Link show={true} text={"Submit"} onPress={setSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  login_modal: {
    width: "90%",
    height: "auto",
    backgroundColor: "grey",
    margin: 20,
    borderRadius: 25,
    alignItems: "center",
    padding: "5%",
  },
  modal_text: {
    color: "white",
    fontWeight: "light",
    fontSize: "18pt",
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
