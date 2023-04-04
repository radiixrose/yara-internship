import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.diceListStyles}>
      {/*D4*/}
      <TouchableOpacity
        style={styles.buttonStyles}
        onPress={() => navigation.navigate("D4")}
      >
        <Text style={styles.buttonContentStyles}>D4</Text>
      </TouchableOpacity>

      {/*D6*/}
      <TouchableOpacity
        style={styles.buttonStyles}
        onPress={() => navigation.navigate("D6")}
      >
        <Text style={styles.buttonContentStyles}>D6</Text>
      </TouchableOpacity>

      {/*D8*/}
      <TouchableOpacity
        style={styles.buttonStyles}
        onPress={() => navigation.navigate("D8")}
      >
        <Text style={styles.buttonContentStyles}>D8</Text>
      </TouchableOpacity>

      {/*D10*/}
      <TouchableOpacity
        style={styles.buttonStyles}
        onPress={() => navigation.navigate("D10")}
      >
        <Text style={styles.buttonContentStyles}>D10</Text>
      </TouchableOpacity>

      {/*D12*/}
      <TouchableOpacity
        style={styles.buttonStyles}
        onPress={() => navigation.navigate("D12")}
      >
        <Text style={styles.buttonContentStyles}>D12</Text>
      </TouchableOpacity>

      {/*D20*/}
      <TouchableOpacity
        style={styles.buttonStyles}
        onPress={() => navigation.navigate("D20")}
      >
        <Text style={styles.buttonContentStyles}>D20</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  diceListStyles: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-evenly",
  },
  buttonStyles: {
    borderWidth: 1,
    borderColor: "black",
    width: 150,
    height: 30,
    justifyContent: "center",
    borderRadius: 4,
  },
  buttonContentStyles: {
    alignSelf: "center",
  },
});

export default HomeScreen;
