// Rodrigo Mejia
// COEN 174
// StudyBuddy
// 2022

//++++++++++++++++imports++++++++++
import { StyleSheet, Text } from "react-native";
import { Pressable } from "react-native";

export function Button(props) {
  const { onPress, title, color, show } = props;

  //++++++++++++++++jsx+++++++++++++
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        {
          display: show ? "block" : "none",
          backgroundColor: color,
        },
      ]}
    >
      <Text allowFontScaling={false} style={styles.button_text}>
        {title}
      </Text>
    </Pressable>
  );
}

//++++++++++++++++styles++++++++++
const styles = StyleSheet.create({
  button: {
    width: 120,
    height: "auto",
    borderRadius: "50%",
    alignContent: "center",
    alignSelf: "center",
    textAlign: "center",
    textAlignVertical: "center",
    padding: 15,
  },
  button_text: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "14pt",
  },
});
