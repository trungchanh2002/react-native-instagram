<<<<<<< HEAD
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useState, useEffect, useRef } from "react";

export default function StoryScreen() {
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
=======
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
} from "react-native";

export default function StoryScreen() {
  const [stories, setStories] = useState([]);
  const [currentImageId, setCurrentImageId] = useState(1);
  const timerRef = useRef();

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch("http://localhost:3000/stories");
        const data = await response.json();
        setStories(data);
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    };

    fetchStories();

    return () => clearTimeout(timerRef.current);
  }, []);

  const handle_image = (id) => {
    setCurrentImageId(id + 1);
    resetTimer();
    if (id == 3) setCurrentImageId(1);
  };
>>>>>>> main

  const resetTimer = () => {
    clearTimeout(timerRef.current);
    startTimer();
  };

<<<<<<< HEAD
  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, []);

  return (
    <ScrollView horizontal ref={scrollViewRef}>
      {stories.map((item, index) => (
        <View key={index}>
          <Image style={{ width: 100, height: 100 }} source={item.image} />
          <Text>ID: {item.id}</Text>
          <Text>Text: {item.text}</Text>
        </View>
      ))}
    </ScrollView>
=======
  const startTimer = () => {
    timerRef.current = setTimeout(() => {
      setCurrentImageId((prevId) => (prevId % 3) + 1);
    }, 5000);
  };
  console.log(timerRef.current);

  useEffect(() => {
    startTimer();

    return () => resetTimer();
  }, [currentImageId]);

  return (
    <View style={styles.container}>
      <FlatList
        data={stories.filter((story) => story.id === currentImageId)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity onPress={() => handle_image(item.id)}>
              <Image
                style={{ width: "100%", height: 600 }}
                source={require(`../assets/${item.image}`)}
              />
            </TouchableOpacity>
            <Text>{item.time}</Text>
          </View>
        )}
      />
    </View>
>>>>>>> main
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
