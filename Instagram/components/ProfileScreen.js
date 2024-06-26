import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Modal } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function ProfileScreen({ navigation }) {
  const [userData, setUserData] = useState(null);
  const [statusModal, setstatusModal] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/user")
      .then((response) => response.json())
      .then((data) => {
        // Find the user with ID 1
        const userWithId1 = data.find((user) => user.id === 1);
        setUserData(userWithId1);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const goStoryScreen = () => {
    navigation.navigate("StoryScreen");
  };
  const openModal = () => {
    setstatusModal(true);
  };
  const closeModal = () => {
    setstatusModal(false);
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
              <Text style={styles.text_username}>{userData.username}</Text>
              <Image source={require("../assets/verified.png")} style={{ width: 15, height: 15, marginLeft: 5 }} />
            </View>
            <View style={styles.icon_header}>
              <Image style={{ width: 24, height: 24, marginRight: 20 }} source={require("../assets/add-icon.png")} />
              <TouchableOpacity onPress={openModal}>
                <Image style={{ width: 24, height: 24, marginRight: 10 }} source={require("../assets/menu-icon.png")} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.header_info}>
            <TouchableOpacity onPress={goStoryScreen}>
              <Image source={require(`../assets/${userData.avatar}`)} style={{ width: 90, height: 90 }} />
            </TouchableOpacity>
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
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
              <Image style={{ width: 54, height: 26 }} source={require("../assets/avatar_info.png")} />
              <Text> Followed by </Text>
              <Text style={styles.text_header2}>ronaldo, </Text>
              <Text style={styles.text_header2}>messi</Text>
              <Text> and</Text>
              <Text style={styles.text_header2}> 100 orthers</Text>
            </View>
          </View>

          <View style={{ marginTop: 10, flexDirection: "row", alignItems: "center", paddingLeft: 5 }}>
            <TouchableOpacity
              style={styles.btn_edit_profile}
              onPress={() =>
                navigation.navigate("UpdateScreen", {
                  userData: userData,
                  onUpdate: (updatedUser) => setUserData(updatedUser),
                })
              }>
              <Text style={{ fontWeight: "bold" }}>Edit Profile</Text>
            </TouchableOpacity>
            <Image style={{ width: 30, height: 30, marginLeft: 4 }} source={require("../assets/add-follow.png")} />
          </View>

          <ScrollView horizontal style={{ paddingLeft: 5, marginRight: 10, marginTop: 10 }}>
            {stories.map((item, index) => (
              <View style={{ alignItems: "center" }} key={index}>
                <TouchableOpacity onPress={goStoryScreen}>
                  <Image style={{ width: 65, height: 65, marginRight: 5 }} source={item.image} />
                  <Text>{item.text}</Text>
                </TouchableOpacity>
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
        <Text>Loading</Text>
      )}
      {/* Modal Setting */}
      <Modal animationType="slide" transparent={true} visible={statusModal}>
        <ScrollView style={{ width: 250, height: 420, position: "absolute", bottom: 0, right: 0, backgroundColor: "white", borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
          <View style={{ alignItems: "center", paddingTop: 5 }}>
            <TouchableOpacity onPress={closeModal}>
              <Text style={{ borderRadius: 5, backgroundColor: "gray", width: 60, height: 5 }}></Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingLeft: 15, paddingTop: 15 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign style={{ marginRight: 6 }} name="setting" size={24} color="black" />
              <Text style={styles.text_setting}>Cài đặt quyền riêng tư</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign style={{ marginRight: 6 }} name="setting" size={24} color="black" />
              <Text style={styles.text_setting}>Cài đặt quyền riêng tư</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign style={{ marginRight: 6 }} name="setting" size={24} color="black" />
              <Text style={styles.text_setting}>Cài đặt quyền riêng tư</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign style={{ marginRight: 6 }} name="setting" size={24} color="black" />
              <Text style={styles.text_setting}>Cài đặt quyền riêng tư</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign style={{ marginRight: 6 }} name="setting" size={24} color="black" />
              <Text style={styles.text_setting}>Cài đặt quyền riêng tư</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign style={{ marginRight: 5 }} name="setting" size={24} color="black" />
              <Text style={styles.text_setting}>Cài đặt quyền riêng tư</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setstatusModal(false);
                navigation.navigate("LoginScreen");
              }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AntDesign style={{ marginRight: 5 }} name="logout" size={20} color="black" />
                <Text style={styles.text_setting}>Đăng xuất</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text_setting: {
    borderBottomWidth: 1,
    borderColor: "#E1E1E1",
    fontSize: 16,
    fontWeight: "600",
    paddingVertical: 15,
    width: 180,
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
  btn_edit_profile: {
    borderRadius: 4,
    backgroundColor: "#E1E1E1",
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
});
