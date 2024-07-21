import { IconName } from "@/constants/Icons";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";

export interface Statistic {
    id: string;
    icon: string;
    statTitle: string;
    subtitle: string;
    value: string;
}

const StatisticItem: React.FC<{ statistic: Statistic }> = ({ statistic }) => {
  return (
    <View style={styles.statItem}>
      <View style={styles.statIcon}>
        <Ionicons name={statistic.icon as IconName} size={24} color="#fff" />
      </View>
      <View style={styles.statTextContainer}>
        <Text style={styles.statTitle}>{statistic.statTitle}</Text>
        <Text style={styles.statSubtitle}>{statistic.subtitle}</Text>
      </View>
      <Text style={styles.statValue}>{statistic.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
  statTitle: {
    fontSize: 16,
    padding: 2,
    fontWeight: "bold",
  },
  statSubtitle: {
    fontSize: 16,
    padding: 2,
    color: "gray",
  },
  statValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
});


export default StatisticItem;
