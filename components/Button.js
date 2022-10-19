import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Pressable } from "react-native";

export function Button(props) {
  const { onPress, title = "Enter" } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.button_text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    width: 200,
    height: 75,
    borderRadius: "50%",
    margin: "auto",
    paddingVertical: 25,
  },

  button_text: {
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
  },
});
