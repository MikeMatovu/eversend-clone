import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import SendProviders from "@/constants/SendProviders";
import {IconName} from "@/constants/Icons";
import { SearchBar } from "react-native-screens";
import ContactList from "@/components/SendContact";

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.SearchBar}>
          <Ionicons name="search" size={24} color="white" />
          <TextInput
            style={styles.input}
            onChangeText={() => console.log("text changed")}
            value=""
            placeholder="Search..."
            placeholderTextColor="white" // Make placeholder text white
          />
          <TouchableOpacity style={styles.quickActionIcon}>
            <Ionicons name="add" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal>
          {SendProviders.map((provider) => (
            <TouchableOpacity key={provider.text} style={styles.customButton}>
              <Ionicons
                name={provider.iconName as IconName}
                size={24}
                color="white"
              />
              <Text style={styles.buttonText}>{provider.text}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <ContactList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    padding: 16,
    backgroundColor: "#3f51b5",
  },
  input: {
    color: "white",
    paddingVertical: 4, // Reduced vertical padding
    paddingHorizontal: 8,
    flex: 1,
    borderColor: "transparent",
    marginBottom: 16,
    fontSize: 18, // Adjust font size as needed
    height: 40,
  },
  customButton: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 12,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginHorizontal: 8,
  },
  buttonText: {
    color: "white",
    paddingHorizontal: 16,
  },
  SearchBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },

  quickActionIcon: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: "#405dde",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    fontWeight: "bold",
    fontSize: 20,
  },
});
export default Index;
