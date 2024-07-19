import { Tabs } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
          tabBarStyle: {
            // backgroundColor: Colors[colorScheme ?? "light"].background,
            height: 70,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
            marginBottom: 10,
          },
        }}
      >
        <Tabs.Screen
          name="balance"
          options={{
            title: "balance",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "wallet" : "wallet-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="cards"
          options={{
            title: "cards",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "card" : "card-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="send"
          options={{
            title: "send",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "send" : "send-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="earn"
          options={{
            title: "earn",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "trending-up" : "trending-up-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="more"
          options={{
            title: "more",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={
                  focused
                    ? "ellipsis-horizontal"
                    : "ellipsis-horizontal-outline"
                }
                color={color}
              />
            ),
          }}
        />
      </Tabs>
      <StatusBar
        backgroundColor="#3f51b5" // Set this to your header's background color
        style="light"
      />
    </>
  );
}
