import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";

export default function NotificationScreen() {
  const notifications = [
    {
      id: 1,
      user: "ankavipul",
      action: "started following you.",
      time: "2 hours ago",
      avatar: require("../assets/avatar_emp_1.png"),
      status: "New",
    },
    {
      id: 2,
      user: "slotix",
      action: "started following you.",
      time: "5 hours ago",
      avatar: require("../assets/avatar_emp_2.png"),
      status: "New",
     
    },
    {
        id: 3,
        user: "lobaseee",
        action: "started following you.",
        time: "8 hours ago",
        avatar: require("../assets/post-1.png"),
        status: "Today",
      },
      {
        id: 4,
        user: "JaneDoe",
        action: "started following you.",
        time: "9 hours ago",
        avatar: require("../assets/post-2.png"),
        status: "Today",
      },
      {
        id: 5,
        user: "holaose",
        action: "started following you.",
        time: "14 hours ago",
        avatar: require("../assets/avatar_emp_3.png"),
        status: "Today",
      },
      {
        id: 6,
        user: "kingston",
        action: "liked your photo.",
        time: "20 hours ago",
        avatar: require("../assets/avatar_emp_4.png"),
        image: require("../assets/image.png"),
        status: "Today",
        
      },
      {
        id: 7,
        user: "hapyyyyy",
        action: "liked your photo.",
        time: " 1 day ago",
        avatar: require("../assets/avatar_emp_4.png"),
        image: require("../assets/image.png"),
        status: "This Week",
        
      },
    
  ];

  const handleNotificationPress = (notification) => {
    console.log("Notification pressed:", notification);
  };

 const newNotifications = notifications.filter((item) => item.status === "New");
 const todayNotifications = notifications.filter((item) => item.status === "Today");
 const thisWeekNotifications = notifications.filter((item) => item.status === "This Week");

 return (
   <View style={styles.container}>
     <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 16 }}>
       Follow Requests 
     </Text>
     {newNotifications.length > 0 && (
       <>
         <Text style={styles.sectionHeader}>New</Text>
         <FlatList
           data={newNotifications}
           keyExtractor={(item) => item.id.toString()}
           renderItem={({ item }) => (  
               <View>
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
                   <Image source={item.image} style={styles.image} />
                 </TouchableOpacity>
               </View>
           )}
         />
       </>
     )}
     {todayNotifications.length > 0 && (
       <>
         <Text style={styles.sectionHeader}>Today</Text>
         <FlatList
           data={todayNotifications}
           keyExtractor={(item) => item.id.toString()}
           renderItem={({ item }) => (
               <View>
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
                   <Image source={item.image} style={styles.image} />
                 </TouchableOpacity>
               </View>
           )}
         />
       </>
     )}
     {thisWeekNotifications.length > 0 && (
       <>
         <Text style={styles.sectionHeader}>This Week</Text>
         <FlatList
           data={thisWeekNotifications}
           keyExtractor={(item) => item.id.toString()}
           renderItem={({ item }) => (
               <View>
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
                   <Image source={item.image} style={styles.image} />
                 </TouchableOpacity>
               </View>
           )}
         />
       </>
     )}
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
 image: {
   width: 40,
   height: 40,
 },
 sectionHeader: {
   fontSize: 18,
   fontWeight: "bold",
   marginTop: 16,
 },
});