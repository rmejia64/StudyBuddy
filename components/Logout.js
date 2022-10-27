import { View, StyleSheet } from "react-native";
import React from "react";
import { Button } from "./Button";
import { Link } from "./Link";
import { Profile } from "./Profile";

export function Logout(props) {
  const { show, submit, onClick, userPicture, color } = props;

  if (show && submit) {
    console.log("...rendered logout module\n");
  }

  const handleProfile = () => {
    console.log("...profile picture clicked");
  };

  return (
    <View
      style={[
        styles.container,
        {
          display: submit && show ? "auto" : "none",
          backgroundColor: color,
        },
      ]}
    >
      <Profile
        show={show}
        color={"rgba(50, 100, 255, 0.8)"}
        user={"~username~"}
        onPress={handleProfile}
        picture={userPicture}
      />
      <Button
        show={true}
        title={"Logout"}
        color="rgba(180, 180, 180, 0.9)"
        onPress={onClick}
      />

      <Link
        show={show}
        text={"Change Username or Password?"}
        color={"white"}
        size={"12pt"}
        style={styles.modal_link}
        onPress={() => {
          console.log("...change info link clicked");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "auto",
    margin: 20,
    borderRadius: 25,
    alignItems: "center",
    padding: "5%",
  },
  modal_text: {
    color: "white",
    fontWeight: "bold",
    fontSize: "14pt",
    marginVertical: 15,
  },
  modal_link: {
    color: "white",
    textDecorationLine: "underline",
    margin: 15,
  },
});
