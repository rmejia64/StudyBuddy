import { View, StyleSheet, Text, Modal } from "react-native";
import React from "react";
import { Button } from "../components/Button";
import { Title } from "../components/Title";

export function Study_Page(props) {
  const { show, close } = props;

  return (
    <Modal
      style={styles.modal}
      animationType={"slide"}
      visible={show}
      onRequestClose={close}
    >
      <View style={styles.container}>
        <Title show={show} text={"Study Tips"} color={"black"} size={"24pt"} />
        <Button show={show} title="close" color="red" onPress={close} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 50,
  },
  container: {
    alignItems: "center",
    padding: 50,
    width: "100%",
    height: "100%",
  },
});
