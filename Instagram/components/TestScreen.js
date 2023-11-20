import React, { useRef, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  PanResponder,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Video } from "expo-av";

export default function TestScreen() {
  const [num, setNum] = useState(0);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  const pause = () => {
    setIsClicked(true);
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pauseAsync();
        setIsClicked(true);
      } else {
        videoRef.current.playAsync();
        setIsClicked(false);
      }
      setIsPlaying(!isPlaying);
    }
  };


  

  const handleSwipe = (gestureState) => {
    if (gestureState.dy < -70) {
      setNum((prevNum) => (prevNum === images.length - 1 ? 0 : prevNum + 1));
    } else if (gestureState.dy > 70) {
      setNum((prevNum) => (prevNum === 0 ? images.length - 1 : prevNum - 1));
    }
    console.log("Y:", gestureState.dy);
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderRelease: (_, gestureState) => handleSwipe(gestureState),
    })
  ).current;

  console.log(num);

  const images = [
    {
      id: 1,
      video: require("../videos/video-1.mp4"),
      avatarSource: require("../assets/story-1.png"),
      like: "100",
      comment: "100",
      share: "1234",
      captinon: "Hello Ervery One",
      name: "cristian.no",
    },
    {
      id: 2,
      video: require("../videos/video-2.mp4"),
      avatarSource: require("../assets/story-2.png"),
      like: "100",
      comment: "100",
      share: "1234",
      captinon: "Hello Ervery One",
      name: "cristian.no",
    },
  ];

  return (
    <View style={styles.container}>
      <View {...panResponder.panHandlers}>
        <Video
          ref={videoRef}
          style={styles.image}
          source={images[num].video}
          shouldPlay={true}
          resizeMode="contain"
          isLooping
        />
      </View>
      <View style={styles.icon_camera}>
        <Image
          source={require("../assets/add-white-icon.png")}
          style={styles.icon}
        />
        <Text style={styles.text_overlay}>{images[num].like}</Text>
      </View>
      <View style={styles.icon_map}>
        <TouchableWithoutFeedback onPress={pause}>
          <Image
            source={require("../assets/icon-play.png")}
            style={[styles.icon_hide, { opacity: isClicked ? 0.8 : 0.5 }]}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 700,
  },
});
