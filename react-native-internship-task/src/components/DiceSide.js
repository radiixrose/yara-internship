import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DiceSide = ({ value }) => {
  return (
    <View style={styles.sideStyles}>
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sideStyles: {
    height: 60,
    width: 60,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 4,
  },
});

export default DiceSide;
