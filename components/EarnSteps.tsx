import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface Step {
  number: number;
  text: string;
}
const Step: React.FC<{ step: Step }> = ({ step }) => {
  return (
    <View style={styles.step}>
      <View style={styles.stepNumber}>
        <Text style={styles.stepNumberText}>{step.number}</Text>
      </View>
      <Text style={styles.stepText}>{step.text}</Text>
    </View>
  );
};

const EarnSteps = () => {
  const stepsData: Step[] = [
    { number: 1, text: "You invite a friend" },
    { number: 2, text: "They deposit money" },
    { number: 3, text: "Both get UGX 1,500" },
  ];

  return (
    <View style={styles.stepsContainer}>
      {stepsData.map((step, index) => (
        <React.Fragment key={step.number}>
          <Step step={step} />
          {index < stepsData.length - 1 && ( // Check if it's not the last step
            <View style={styles.stepLine} />
          )}
        </React.Fragment>
      ))}
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
    alignSelf: "center",
  },
});

export default EarnSteps;
