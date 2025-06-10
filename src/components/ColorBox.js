import { View, Text, StyleSheet } from "react-native";

export const ColorBox = (props) => {
  const backgroundStyle = {
    backgroundColor: props.hexValue,
  };
  return (
    <View style={[styles.box, backgroundStyle]}>
      <Text style={styles.text}>
        {props.hexValue} {props.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    paddingVertical: 20,
  },
  text: {
    fontWeight: 800,
    color: "white",
  },
});
