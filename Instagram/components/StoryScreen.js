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

  const resetTimer = () => {
    clearTimeout(timerRef.current);
    startTimer();
  };

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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
