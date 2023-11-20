import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";

export default function NotificationScreen() {
  const notifications = [
    {
      id: 1,
      user: "JohnDoe",
      action: "started following you.",
      time: "2 hours ago",
      avatar: require("../assets/post-1.png"),
    },
    {
      id: 2,
      user: "JaneDoe",
      action: "liked your photo.",
      time: "5 hours ago",
      avatar: require("../assets/post-2.png"),
    },
    {
        id: 3,
        user: "JohnDoe",
        action: "started following you.",
        time: "2 hours ago",
        avatar: require("../assets/post-1.png"),
      },
      {
        id: 4,
        user: "JaneDoe",
        action: "liked your photo.",
        time: "5 hours ago",
        avatar: require("../assets/post-2.png"),
      },
      {
        id: 5,
        user: "JohnDoe",
        action: "started following you.",
        time: "2 hours ago",
        avatar: require("../assets/post-1.png"),
      },
      {
        id: 6,
        user: "JaneDoe",
        action: "liked your photo.",
        time: "5 hours ago",
        avatar: require("../assets/post-2.png"),
      },
      {
        id: 7,
        user: "JohnDoe",
        action: "started following you.",
        time: "2 hours ago",
        avatar: require("../assets/post-1.png"),
      },
      {
        id: 8,
        user: "JaneDoe",
        action: "liked your photo.",
        time: "5 hours ago",
        avatar: require("../assets/post-2.png"),
      },
  ];

  const handleNotificationPress = (notification) => {
    console.log("Notification pressed:", notification);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.notificationItem}
            onPress={() => handleNotificationPress(item)}
          >
            <Image source={item.avatar} style={styles.avatar} />
            <View style={styles.notificationContent}>
              <Text>
                <Text style={styles.username}>{item.user}</Text>{" "}
                {item.action}
              </Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
    elevation: 2,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  username: {
    fontWeight: "bold",
  },
  time: {
    color: "#888",
  },
});
