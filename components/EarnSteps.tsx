import { View, Text, StyleSheet } from "react-native";
import React from "react";

const EarnSteps = () => {
  return (
    <View style={styles.stepsContainer}>
      <View style={styles.step}>
        <View style={styles.stepNumber}>
          <Text style={styles.stepNumberText}>1</Text>
        </View>
        <Text style={styles.stepText}>You invite a friend</Text>
      </View>
      <View style={styles.stepLine} />
      <View style={styles.step}>
        <View style={styles.stepNumber}>
          <Text style={styles.stepNumberText}>2</Text>
        </View>
        <Text style={styles.stepText}>They deposit money</Text>
      </View>
      <View style={styles.stepLine} />
      <View style={styles.step}>
        <View style={styles.stepNumber}>
          <Text style={styles.stepNumberText}>3</Text>
        </View>
        <Text style={styles.stepText}>Both get UGX 1,500</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stepsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  step: {
    alignItems: "center",
  },
  stepNumber: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#FF6B6B",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  stepNumberText: {
    color: "white",
    fontWeight: "bold",
  },
  stepText: {
    textAlign: "center",
    fontSize: 12,
  },
  stepLine: {
    flex: 1,
    height: 4, // Increased height for a bolder appearance
    backgroundColor: "black",
    marginHorizontal: 8,
  },
});

export default EarnSteps;
