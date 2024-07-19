import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import EarnSteps from "@/components/EarnSteps";

const InviteFriendScreen: React.FC = () => {
  return (
    <>
      <Text style={styles.title}>Invite a Friend</Text>

      <Image
        source={require("../../assets/images/react-logo.png")}
        style={styles.image}
      />
      <SafeAreaView style={styles.container}>
        <EarnSteps />
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <View style={styles.statIcon}>
              <Ionicons name="people" size={24} color="#fff" />
            </View>

            <View style={styles.statTextContainer}>
              <Text style={styles.statTitle}>People you signed up</Text>
              <Text style={styles.statSubtitle}>
                This puts you in the top 99%
              </Text>
              {/* <Text style={styles.statValue}>0 &gt;</Text> */}
            </View>
          </View>

          <View style={styles.statItem}>
            <View style={styles.statIcon}>
              <Ionicons name="cash" size={24} color="#fff" />
            </View>

            <View style={styles.statTextContainer}>
              <Text style={styles.statTitle}>Money earned</Text>
              <Text style={styles.statSubtitle}>From all your invites</Text>
            </View>
            {/* <Text style={styles.statValue}>UGX 0</Text> */}
          </View>
          <View style={styles.statItem}>
            <View style={styles.statIcon}>
              <Ionicons name="trending-up" size={24} color="#fff" />
            </View>
            <View style={styles.statTextContainer}>
              <Text style={styles.statTitle}>Money you could earn</Text>
              <Text style={styles.statSubtitle}>
                If you refer your other 1,197 contacts
              </Text>
            </View>
            {/* <Text style={styles.statValue}>UGX 1.796M</Text> */}
          </View>
        </View>
      </SafeAreaView>
      <TouchableOpacity style={styles.inviteButton}>
        <Text style={styles.inviteButtonText}>
          Invite a friend and earn money
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#3f51b5",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 24,
    backgroundColor: "#3f51b5",
  },
  statsContainer: {
    // backgroundColor: "white",
    padding: 16,
    marginBottom: 24,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  statIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#3f51b5",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  statTextContainer: {
    flex: 1,
    marginLeft: 16,
    borderColor: "gray",
    borderWidth: 1,
  },
  statTitle: {
    fontSize: 16,
    padding: 6,
    fontWeight: "bold",
  },
  statSubtitle: {
    fontSize: 16,
    padding: 6,
    color: "gray",
  },
  statValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  inviteButton: {
    backgroundColor: "#3f51b5",
    padding: 24,

    alignItems: "center",
  },
  inviteButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default InviteFriendScreen;
