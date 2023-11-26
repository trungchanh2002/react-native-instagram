import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileFollowing({ navigation }) {
  const [userData, setUserData] = useState(null);
  const [isFollow, setisFollow] = useState(false);
  useEffect(() => {
    fetch("http://localhost:3000/user")
      .then((response) => response.json())
      .then((data) => {
        // Find the user with ID 1
        const userWithId1 = data.find((user) => user.id === 2);
        setUserData(userWithId1);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleIsFollow = () => {
    isFollow ? setisFollow(false) : setisFollow(true);
  };

  const stories = [
    { id: 1, image: require("../assets/story-1.png"), text: "chill" },
    { id: 2, image: require("../assets/story-2.png"), text: "❤️❤️❤️" },
    { id: 3, image: require("../assets/story-3.png"), text: "🤩🤩" },
    { id: 4, image: require("../assets/story-4.png"), text: "travel" },
    { id: 5, image: require("../assets/story-5.png"), text: "learn" },
    { id: 5, image: require("../assets/story-5.png"), text: "learn" },
  ];

  const images = [
    { id: 1, image: require("../assets/post-1.png") },
    { id: 2, image: require("../assets/post-2.png") },
    { id: 3, image: require("../assets/post-3.png") },
    { id: 4, image: require("../assets/post-4.png") },
    { id: 5, image: require("../assets/post-5.png") },
    { id: 6, image: require("../assets/post-6.png") },
    { id: 7, image: require("../assets/post-7.png") },
    { id: 8, image: require("../assets/post-8.png") },
    { id: 9, image: require("../assets/post-9.png") },
  ];
  return (
    <ScrollView style={styles.container}>
      {userData ? (
        <View>
          <View style={styles.header}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}>
              <Ionicons name="chevron-back" size={28} color="black" style={{ marginRight: 130 }} onPress={() => navigation.goBack()} />
              <Text style={styles.text_username}>{userData.username}</Text>
              <Image source={require("../assets/verified.png")} style={{ width: 15, height: 15, marginLeft: 5 }} />
            </View>
            <View style={styles.icon_header}>
              <Image
                style={{
                  width: 24,
                  height: 24,
                  marginRight: 20,
                }}
                source={require("../assets/icon-nofication.png")}
              />
              <Image style={{ width: 24, height: 24, marginRight: 10 }} source={require("../assets/menu-icon.png")} />
            </View>
          </View>
          <View style={styles.header_info}>
            <Image source={require(`../assets/${userData.avatar}`)} style={{ width: 90, height: 90 }} />
            <View style={{ flexDirection: "row" }}>
              <View style={{ alignItems: "center", marginRight: 20 }}>
                <Text style={styles.text_header}>{userData.post}</Text>
                <Text style={styles.text_header1}>Posts</Text>
              </View>
              <View style={{ alignItems: "center", marginRight: 10 }}>
                <Text style={styles.text_header}>{userData.followers}</Text>
                <Text style={styles.text_header1}>Followers</Text>
              </View>
              <View style={{ alignItems: "center", marginRight: 20 }}>
                <Text style={styles.text_header}>{userData.following}</Text>
                <Text style={styles.text_header1}>Following</Text>
              </View>
            </View>
          </View>
          <View style={styles.header_info2}>
            <Text style={{ fontSize: 15, fontWeight: "bold", marginTop: 5 }}>{userData.name}</Text>
            <Text>Category/Genre text</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>{userData.bio} </Text>
              <Text style={{ color: "#4876FF" }}>@{userData.hashtag}</Text>
            </View>
            <Text style={{ color: "#4876FF" }}>🔗{userData.website}</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}>
              <Image style={{ width: 54, height: 26 }} source={require("../assets/avatar_info.png")} />
              <Text> Followed by </Text>
              <Text style={styles.text_header2}>ronaldo, </Text>
              <Text style={styles.text_header2}>messi</Text>
              <Text> and</Text>
              <Text style={styles.text_header2}> 100 orthers</Text>
            </View>
          </View>

          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 5,
            }}>
            <TouchableOpacity style={styles.btn_follow} onPress={handleIsFollow}>
              <Text style={{ fontWeight: "bold", color: "white" }}>{isFollow ? "UnFollow" : "Follow"}</Text>
            </TouchableOpacity>
            <Image style={{ width: 30, height: 30, marginLeft: 4 }} source={require("../assets/add-follow.png")} />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: 10,
              marginTop: 8,
            }}>
            <Text style={styles.text_br}>Message</Text>
            <Text style={styles.text_br}>Subscribe</Text>
            <Text style={styles.text_br}>Contact</Text>
            <Text style={styles.text_br}>Reels</Text>
          </View>

          <ScrollView horizontal style={{ paddingLeft: 5, marginRight: 10, marginTop: 10 }}>
            {stories.map((item, index) => (
              <View style={{ alignItems: "center" }} key={index}>
                <Image style={{ width: 65, height: 65, marginRight: 5 }} source={item.image} />
                <Text>{item.text}</Text>
              </View>
            ))}
          </ScrollView>

          <View style={styles.icon_container}>
            <Image source={require("../assets/list-icon.png")} style={styles.icon_con} />
            <Image source={require("../assets/reels-icon-mo.png")} style={styles.icon_con} />
            <Image source={require("../assets/account-icon-mo.png")} style={styles.icon_con} />
          </View>

          <View style={{ marginVertical: 10, alignItems: "center" }}>
            <View style={{ flexDirection: "row" }}>
              <Image source={images[1].image} style={styles.images} />
              <Image source={images[2].image} style={styles.images} />
              <Image source={images[3].image} style={styles.images} />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image source={images[4].image} style={styles.images} />
              <Image source={images[5].image} style={styles.images} />
              <Image source={images[6].image} style={styles.images} />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image source={images[1].image} style={styles.images} />
              <Image source={images[2].image} style={styles.images} />
              <Image source={images[3].image} style={styles.images} />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image source={images[4].image} style={styles.images} />
              <Image source={images[5].image} style={styles.images} />
              <Image source={images[6].image} style={styles.images} />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image source={images[1].image} style={styles.images} />
              <Image source={images[2].image} style={styles.images} />
              <Image source={images[3].image} style={styles.images} />
            </View>
          </View>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    padding: 5,
  },
  btnUpdate: {
    borderWidth: 1,
    backgroundColor: "pink",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    paddingLeft: 5,
  },
  icon_header: {
    flexDirection: "row",
  },
  text_username: {
    fontSize: 18,
    fontWeight: "bold",
  },
  header_info: {
    flexDirection: "row",
    paddingTop: 6,
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 5,
  },
  text_header: {
    fontSize: 15,
    fontWeight: "bold",
  },
  text_header1: {
    fontSize: 15,
  },
  text_header2: {
    fontWeight: "bold",
  },
  btn_follow: {
    borderRadius: 4,
    backgroundColor: "#1E7BFF",
    height: 35,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  header_info2: {
    paddingLeft: 5,
  },
  icon_con: {
    width: 24,
    height: 24,
    marginHorizontal: 52,
  },
  icon_container: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 10,
  },
  images: {
    width: 130,
    height: 130,
  },
  footer_images: {},
  text_br: {
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
    fontWeight: "500",
    backgroundColor: "#E1E1E1",
  },
});
