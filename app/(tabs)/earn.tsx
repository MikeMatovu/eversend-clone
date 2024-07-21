import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EarnSteps from "@/components/EarnSteps";
import StatisticItem, { Statistic } from "@/components/StatisticItem";

const InviteFriendScreen: React.FC = () => {
  const statistics: Statistic[] = [
    {
      id: "1",
      icon: "people",
      statTitle: "People you signed up",
      subtitle: "This puts you in the top 99%",
      value: "0",
    },
    {
      id: "2",
      icon: "cash",
      statTitle: "Money earned",
      subtitle: "From all your invites",
      value: "UGX 0",
    },
    {
      id: "3",
      icon: "trending-up",
      statTitle: "Money you could earn",
      subtitle: "If you refer your other 1,197 contacts",
      value: "UGX 1.796M",
    },
  ];
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
          <FlatList
            data={statistics}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <StatisticItem statistic={item} />}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
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
  separator: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginLeft: 72, // Align with the end of the avatar
  },
});

export default InviteFriendScreen;
