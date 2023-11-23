import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { Video } from "expo-av";

export default function SearchScreen() {
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
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Image
            source={require("../assets/search-icon.png")}
            style={styles.icon}
          />
          <TextInput style={styles.input} placeholder="Tìm kiếm" />
        </View>

        <View>
          <View style={styles.image_row_full}>
            <View style={styles.image_cloumn}>
              <View style={styles.image_rows}>
                <Image source={images[0].image} style={styles.images} />
                <Image source={images[1].image} style={styles.images} />
              </View>
              <View style={styles.image_rows}>
                <Image source={images[2].image} style={styles.images} />
                <Image source={images[3].image} style={styles.images} />
              </View>
            </View>
            <Video
              source={require("../videos/video-1.mp4")}
              isMuted={true}
              resizeMode="contain"
              shouldPlay
              isLooping
              style={styles.video}
            />
          </View>
          <View style={styles.image_row_full}>
            <Video
              source={require("../videos/video-2.mp4")}
              isMuted={true}
              resizeMode="cover"
              shouldPlay
              isLooping
              style={styles.video}
            />
            <View style={styles.image_cloumn}>
              <View style={styles.image_rows}>
                <Image source={images[4].image} style={styles.images} />
                <Image source={images[5].image} style={styles.images} />
              </View>
              <View style={styles.image_rows}>
                <Image source={images[6].image} style={styles.images} />
                <Image source={images[7].image} style={styles.images} />
              </View>
            </View>
          </View>
          <View style={styles.image_row_full}>
            <View style={styles.image_cloumn}>
              <View style={styles.image_rows}>
                <Image source={images[8].image} style={styles.images} />
                <Image source={images[1].image} style={styles.images} />
              </View>
              <View style={styles.image_rows}>
                <Image source={images[2].image} style={styles.images} />
                <Image source={images[3].image} style={styles.images} />
              </View>
            </View>
            <Video
              source={require("../videos/video-3.mp4")}
              isMuted={true}
              resizeMode="cover"
              shouldPlay
              isLooping
              style={styles.video}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  image_row_full: {
    flexDirection: "row",
  },
  image_rows: {
    flexDirection: "row",
  },
  images: {
    width: 140,
    height: 140,
    margin: 0.5,
  },
  images_: {
    width: 140,
    height: 140 * 2,
    // margin: 0.5,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    padding: 5,
    marginBottom: 8,
    marginTop: 8,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  input: {
    flex: 1,
    height: 30,
    width: 320,
    borderRadius: 20,
    padding: 5,
  },
  videoContainer: {},
  video: {
    width: 140,
    height: 140 * 2,
  },
});
