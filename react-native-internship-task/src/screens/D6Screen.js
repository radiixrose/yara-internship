import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import DiceSide from "../components/DiceSide";

const D6Screen = () => {
  const [diceValues, setDiceValues] = useState(Array(6).fill(null));
  const sides = 6;

  const rollDice = () => {
    const newDiceValues = diceValues.map(
      () => Math.floor(Math.random() * 6) + 1
    );
    setDiceValues(newDiceValues);
  };

  const totalRoll = diceValues.reduce((acc, cur) => acc + cur, 0);
  const maxPossibleTotal = diceValues.length * sides;

  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text style={styles.totalStyles}>
        Total roll: {totalRoll}/{maxPossibleTotal}
      </Text>
      <View style={styles.diceSideStyles}>
        <DiceSide value={diceValues[0]} />
        <DiceSide value={diceValues[1]} />
        <DiceSide value={diceValues[2]} />
        <DiceSide value={diceValues[3]} />
        <DiceSide value={diceValues[4]} />
        <DiceSide value={diceValues[5]} />
      </View>
      <TouchableOpacity style={styles.buttonStyles} onPress={rollDice}>
        <Text style={styles.textStyles}>Roll</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  diceSideStyles: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 10,
    justifyContent: "center",
  },
  buttonStyles: {
    backgroundColor: "black",
    width: 100,
    borderRadius: 4,
    alignSelf: "center",
  },
  textStyles: {
    color: "white",
    alignSelf: "center",
  },
  totalStyles: {
    fontSize: 50,
    fontWeight: "bold",
  },
});

export default D6Screen;
