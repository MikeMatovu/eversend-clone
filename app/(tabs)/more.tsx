import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import servicesData from "@/constants/Services";
import { IconName } from "@/constants/Icons";


// Quick action component
const QuickAction = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <TouchableOpacity style={styles.quickAction}>
    <View style={styles.quickActionIcon}>{icon}</View>
    <Text style={styles.quickActionLabel}>{label}</Text>
  </TouchableOpacity>
);

// Service component
const Service = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <TouchableOpacity style={styles.service}>
    {icon}
    <Text style={styles.serviceLabel}>{label}</Text>
  </TouchableOpacity>
);

// Home screen component
const More = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.quickActionsContainer}>
      <QuickAction
        icon={<Ionicons name="heart" size={24} color="#8c9eff" />}
        label="Invite"
      />
      <QuickAction
        icon={<Ionicons name="gift" size={24} color="#8c9eff" />}
        label="Offers"
      />
      <QuickAction
        icon={<Ionicons name="help" size={24} color="#8c9eff" />}
        label="Help"
      />
      <QuickAction
        icon={<Ionicons name="person" size={24} color="#8c9eff" />}
        label="Profile"
      />
    </View>
    <ScrollView style={styles.servicesContainer}>
      <View style={styles.servicesGrid}>
        {servicesData.map((service) => (
          <Service
            key={service.label} // Assuming label is unique
            icon={
              <Ionicons
                name={service.name as IconName}
                size={24}
                color={service.color}
              />
            }
            label={service.label}
          />
        ))}
      </View>
    </ScrollView>
  </SafeAreaView>
);

export default More;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  quickActionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#3f51b5",
    paddingVertical: 20,
  },
  quickAction: {
    alignItems: "center",
  },
  quickActionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#0d0554",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  quickActionLabel: {
    color: "white",
    fontSize: 12,
  },
  servicesContainer: {
    flex: 1,
  },
  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 15,
  },
  service: {
    width: "30%",
    aspectRatio: 1,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  serviceLabel: {
    marginTop: 10,
    fontSize: 12,
    color: "#333",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
