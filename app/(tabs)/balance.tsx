import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { DrawerLayoutAndroid } from "react-native";


const balances = [
  { currency: "UGX", amount: 0 },
  { currency: "EUR", amount: 0 },
  { currency: "GBP", amount: 0 },
  { currency: "KES", amount: 0 },
];

const BalanceScreen: React.FC = () => {
  const [activeBalance, setActiveBalance] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const drawer = React.useRef<DrawerLayoutAndroid>(null);

  const toggleDrawer = () => {
    if (drawerOpen) {
      drawer.current?.closeDrawer();
    } else {
      drawer.current?.openDrawer();
    }
    setDrawerOpen(!drawerOpen);
  };

  const navigationView = () => (
    <View style={styles.drawer}>
      <Text style={styles.drawerText}>App Drawer</Text>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={navigationView}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={toggleDrawer}>
            <Ionicons name="menu" size={24} color="white" />
          </TouchableOpacity>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.balanceSelector}
          >
            {balances.map((balance, index) => (
              <TouchableOpacity
                key={balance.currency}
                onPress={() => setActiveBalance(index)}
                style={styles.balanceItem}
              >
                <Text
                  style={[
                    styles.balanceText,
                    activeBalance === index && styles.activeBalanceText,
                  ]}
                >
                  {balance.currency} {balance.amount}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <Ionicons name="notifications-outline" size={24} color="white" />
        </View>

        <View style={styles.mainBalance}>
          <Text style={styles.mainBalanceAmount}>
            {balances[activeBalance].currency} {balances[activeBalance].amount}
          </Text>
          <Text style={styles.mainBalanceLabel}>Main balance</Text>
          <Ionicons name="chevron-forward" size={24} color="white" />
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="add" size={24} color="white" />
            <Text style={styles.actionText}>Deposit money</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="swap-horizontal" size={24} color="white" />
            <Text style={styles.actionText}>Exchange</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.transactions}>
          <Ionicons name="sad-outline" size={48} color="lightgray" />
          <Text style={styles.noTransactionsText}>No recent transactions</Text>
        </View>
      </SafeAreaView>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3f51b5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  balanceSelector: {
    flex: 1,
    marginHorizontal: 16,
  },
  balanceItem: {
    marginRight: 16,
  },
  balanceText: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 16,
  },
  activeBalanceText: {
    color: "white",
  },
  mainBalance: {
    alignItems: "center",
    marginTop: 32,
  },
  mainBalanceAmount: {
    fontSize: 48,
    color: "white",
    fontWeight: "bold",
  },
  mainBalanceLabel: {
    fontSize: 16,
    color: "rgba(255,255,255,0.6)",
    marginTop: 8,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 32,
  },
  actionButton: {
    alignItems: "center",
  },
  actionText: {
    color: "white",
    marginTop: 8,
  },
  transactions: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 32,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  noTransactionsText: {
    color: "gray",
    marginTop: 16,
  },
  drawer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  drawerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default BalanceScreen;
