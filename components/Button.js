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
    width: 120,
    height: 45,
    borderRadius: "50%",
    marginTop: "5%",
    marginBottom: "5%",
    alignItems: "center",
  },
  button_text: {
    color: "white",
    textAlignVertical: "center",
    paddingTop: "10%",
    fontWeight: "bold",
    fontSize: "14pt",
  },
});
