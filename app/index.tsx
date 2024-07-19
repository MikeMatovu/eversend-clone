import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Welcome Home</Text>

        <View style={styles.buttonContainer}>
          <Button
            title="Login"
            onPress={() => router.push("login")}
            color="#4CAF50"
          />
          <Button
            title="Sign Up"
            onPress={() => router.push("sign-up")}
            color="#2196F3"
          />
        </View>

        <TouchableOpacity
          style={styles.customButton}
          onPress={() => router.push("/send")}
        >
          <Text style={styles.buttonText}>To tabs</Text>
        </TouchableOpacity>

        <Pressable
          style={({ pressed }) => [
            styles.pressableButton,
            { opacity: pressed ? 0.5 : 1 },
          ]}
          onPress={() => console.log("Pressable button pressed")}
        >
          <Text style={styles.buttonText}>Pressable Button</Text>
        </Pressable>

        <Link href="/details" asChild>
          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.buttonText}>Non existent</Text>
          </TouchableOpacity>
        </Link>

        <Text style={styles.sectionTitle}>Text Input Examples</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContent: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  customButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
  },
  pressableButton: {
    backgroundColor: "#34C759",
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
  },
  linkButton: {
    backgroundColor: "#FF9500",
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: "top",
  },
});

export default Home;
