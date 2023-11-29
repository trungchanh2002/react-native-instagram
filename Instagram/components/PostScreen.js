import React, { useState, useEffect } from "react";
import { View, Image, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
export default function PostScreen({ navigation }) {
  const route = useRoute();
  const { userId, username, imageName, avatar } = route.params || {};
  const [status, setStatus] = useState("Được tài trợ");
  const [imagePost, setImagePost] = useState(imageName);

  const createPost = async () => {
    try {
      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          avatar,
          status,
          imagePost,
        }),
      });

      if (response.ok) {
        console.log("Post created successfully");
        navigation.navigate("Home", { userId, username });
      } else {
        console.error("Failed to create post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", padding: 12, alignItems: "center", justifyContent: "space-between" }}>
        <TouchableOpacity onPress={handleCancel}>
          <Text style={styles.text_cancel}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.text_edit}>New Post</Text>
        <TouchableOpacity onPress={createPost}>
          <Text style={styles.text_done}>Done</Text>
        </TouchableOpacity>
      </View>
      {/* -------------- */}

      <View style={{ paddingLeft: 20, paddingBottom: 15, paddingTop: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "700" }}>{username}</Text>
      </View>
      <View style={{ paddingLeft: 20, flexDirection: "row", alignItems: "center" }}>
        <Image style={{ width: 200, height: 250, borderRadius: 10, marginBottom: 20 }} source={require(`../assets/${imageName}`)} />
      </View>
      <View>
        <View style={{ alignItems: "center" }}>
          <TextInput style={{ borderWidth: 2, borderRadius: 15, fontSize: 16, fontWeight: "600", color: "black", borderColor: "gray", height: 50, width: "90%", opacity: 0.9, paddingLeft: 10 }} placeholder="Caption ..." onChangeText={(text) => setStatus(text)} />
        </View>
        <View style={{ paddingLeft: 15, paddingTop: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign style={{ marginRight: 6 }} name="tags" size={24} color="black" />
            <Text style={styles.text_setting}>Gắn thẻ người khác</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome style={{ marginRight: 6 }} name="location-arrow" size={24} color="black" />
            <Text style={styles.text_setting}>Thêm vị trí</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome style={{ marginRight: 6 }} name="music" size={24} color="black" />
            <Text style={styles.text_setting}>Thêm nhạc</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign style={{ marginRight: 6 }} name="setting" size={24} color="black" />
            <Text style={styles.text_setting}>Cài đặt nâng cao</Text>
          </View>
        </View>
      </View>
    </View>
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
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  text_cancel: {
    fontWeight: "600",
    fontSize: 16,
  },
  text_edit: {
    fontWeight: "600",
    fontSize: 16,
  },
  text_done: {
    fontWeight: "600",
    fontSize: 16,
    color: "#2A8EFF",
  },
  text_setting: {
    borderBottomWidth: 1,
    borderColor: "#E1E1E1",
    fontSize: 16,
    fontWeight: "600",
    paddingVertical: 15,
    width: 300,
  },
});
