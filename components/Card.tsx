import { View, Text, StyleSheet } from "react-native";

export type CardData = {
  id: string;
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  backgroundColor: string;
};

const CreditCard: React.FC<CardData> = ({
  cardNumber,
  cardHolder,
  expiryDate,
  backgroundColor,
}) => (
  <View style={[styles.card, { backgroundColor }]}>
    <View style={styles.chipContainer}>
      <View style={styles.chip} />
    </View>
    <Text style={styles.cardNumber}>{cardNumber}</Text>
    <View style={styles.cardDetails}>
      <View>
        <Text style={styles.cardLabel}>Card Holder</Text>
        <Text style={styles.cardValue}>{cardHolder}</Text>
      </View>
      <View>
        <Text style={styles.cardLabel}>Expires</Text>
        <Text style={styles.cardValue}>{expiryDate}</Text>
      </View>
    </View>
  </View>
);


export default CreditCard;

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 180,
    borderRadius: 10,
    padding: 20,
    marginRight: 16,
    justifyContent: "space-between",
  },
  chipContainer: {
    alignItems: "flex-start",
  },
  chip: {
    width: 50,
    height: 40,
    backgroundColor: "#FFD700",
    borderRadius: 8,
  },
  cardNumber: {
    fontSize: 22,
    color: "white",
    letterSpacing: 2,
  },
  cardDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardLabel: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.8)",
  },
  cardValue: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
