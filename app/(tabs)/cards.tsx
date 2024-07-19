import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import CreditCard, { CardData } from "@/components/Card";
import { SafeAreaView } from "react-native-safe-area-context";

const CARDS: CardData[] = [
  {
    id: "1",
    cardNumber: "**** **** **** 1234",
    cardHolder: "John Doe",
    expiryDate: "12/24",
    backgroundColor: "#4A90E2",
  },
  {
    id: "2",
    cardNumber: "**** **** **** 5678",
    cardHolder: "Jane Smith",
    expiryDate: "06/25",
    backgroundColor: "#F5A623",
  },
  {
    id: "3",
    cardNumber: "**** **** **** 9012",
    cardHolder: "Bob Johnson",
    expiryDate: "09/23",
    backgroundColor: "#50E3C2",
  },
];

const Cards = () => {
  return (
    <SafeAreaView>
      <ScrollView horizontal style={styles.cardContainer}>
        {CARDS.map((card) => (
          <CreditCard key={card.id} {...card} />
        ))}
      </ScrollView>
      <Text>
        These are the cards you have saved. You can add more cards by going to
      </Text>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 16,
  },
});

export default Cards;
