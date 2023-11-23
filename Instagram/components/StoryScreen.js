import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";

export default function StoryScreen() {
  const handleItemClick = (index) => {
    if (index === 2) {
      alert("OK");
    }
  };
  const stories = [
    { id: 1, image: require("../assets/story-1.png"), text: "chanh.dev" },
    { id: 2, image: require("../assets/story-2.png"), text: "messi.lion" },
    { id: 3, image: require("../assets/story-3.png"), text: "cristian.dev" },
    { id: 4, image: require("../assets/story-4.png"), text: "daotron.mm" },
    { id: 5, image: require("../assets/story-5.png"), text: "chanh.aaa" },
    { id: 3, image: require("../assets/story-3.png"), text: "cristian.dev" },
    { id: 4, image: require("../assets/story-4.png"), text: "daotron.mm" },
    { id: 5, image: require("../assets/story-5.png"), text: "chanh.aaa" },
    { id: 3, image: require("../assets/story-3.png"), text: "cristian.dev" },
    { id: 4, image: require("../assets/story-4.png"), text: "daotron.mm" },
    { id: 5, image: require("../assets/story-5.png"), text: "chanh.aaa" },
    { id: 3, image: require("../assets/story-3.png"), text: "cristian.dev" },
    { id: 4, image: require("../assets/story-4.png"), text: "daotron.mm" },
    { id: 5, image: require("../assets/story-5.png"), text: "chanh.aaa" },
    { id: 3, image: require("../assets/story-3.png"), text: "cristian.dev" },
    { id: 4, image: require("../assets/story-4.png"), text: "daotron.mm" },
  ];

  const scrollViewRef = useRef();

  return (
    <ScrollView horizontal ref={scrollViewRef}>
      {stories.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => handleItemClick(index)}>
          <View>
            <Image style={{ width: 100, height: 100 }} source={item.image} />
            <Text>ID: {item.id}</Text>
            <Text>Text: {item.text}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
