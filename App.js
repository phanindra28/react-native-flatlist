import { StyleSheet, FlatList, Text } from "react-native";
import React from "react";
import ArrayColors from "./src/components/RawData";
import { ColorBox } from "./src/components/ColorBox";

const App = () => {
  return (
    <FlatList
      style={styles.container}
      data={ArrayColors}
      keyExtractor={(item) => item.hex}
      renderItem={({ item }) => (
        <ColorBox hexValue={item.hex} title={item.name}></ColorBox>
      )}
      ListHeaderComponent={<Text style={styles.text}>List of colors</Text>}
    />
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  text: {
    fontWeight: 800,
    color: "black",
    marginBlock: 20,
    // marginTop: 10,
  },
});
