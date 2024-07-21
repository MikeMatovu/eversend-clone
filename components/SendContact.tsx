import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

interface Contact {
  id: string;
  name: string;
  phoneNumber: string;
  avatarUrl: string;
}

const ContactItem: React.FC<{ contact: Contact }> = ({ contact }) => (
  <View style={styles.contactContainer}>
    <Image source={{ uri: contact.avatarUrl }} style={styles.avatar} />
    <View style={styles.contactInfo}>
      <Text style={styles.name}>{contact.name}</Text>
      <Text style={styles.phoneNumber}>{contact.phoneNumber}</Text>
    </View>
  </View>
);

const ContactList: React.FC = () => {
  // Sample data - replace this with your actual data source
  const contacts: Contact[] = [
    {
      id: "1",
      name: "Matovu Mike",
      phoneNumber: "+256 705 485397",
      avatarUrl:
        "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    },
    {
      id: "2",
      name: "John Doe",
      phoneNumber: "+1 234 567890",
      avatarUrl:
        "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    },
    {
      id: "3",
      name: "Jane Smith",
      phoneNumber: "+44 20 1234 5678",
      avatarUrl:
        "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Myself</Text>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ContactItem contact={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#666",
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  contactContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  contactInfo: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  phoneNumber: {
    fontSize: 14,
    color: "#666",
  },
  separator: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginLeft: 72, // Align with the end of the avatar
  },
});

export default ContactList;


//TODO: Send the contacts as a prop to the ContactList component
