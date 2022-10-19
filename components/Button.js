import { StyleSheet, Text } from "react-native";
import { Pressable } from "react-native";

export function Button(props) {
  const { onPress, title, color, show } = props;
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        {
          display: show ? "block" : "none",
          backgroundColor: color ? "red" : "blue",
        },
      ]}
    >
      <Text style={styles.button_text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
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
