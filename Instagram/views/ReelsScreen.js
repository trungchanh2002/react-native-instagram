import React, { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import { Video } from "expo-av";

export default function ReelsScreen() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [num, setNum] = useState(0);

  const [number, setNumber] = useState(1200);
  const [isPink, setIsPink] = useState(false);

  const handleShape = () => {
    setIsPink(!isPink);
    setNumber(isPink ? number - 1 : number + 1);
  };

  const videos = [
    {
      video: require("../videos/video-1.mp4"),
      text: "cristian.no",
      avatarSource: require("../assets/story-1.png"),
      captinon: "Hello Ervery One",
    },
    {
      video: require("../videos/video-2.mp4"),
      text: "messi_lion",
      avatarSource: require("../assets/story-2.png"),
      captinon: "Ni hao :)))",
    },
    {
      video: require("../videos/video-3.mp4"),
      text: "chanh.abc",
      avatarSource: require("../assets/story-3.png"),
      captinon: "😂😂😂😂😂",
    },
  ];

  const pause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pauseAsync();
      } else {
        videoRef.current.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const changeVideo = () => {
    let newRandomNum;
    do {
      newRandomNum = Math.floor(Math.random() * 3);
    } while (newRandomNum === num);

    setNum(newRandomNum);
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={changeVideo}>
        <View style={styles.videoContainer}>
          <Video
            ref={videoRef}
            source={videos[num].video}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="contain"
            shouldPlay
            isLooping
            style={styles.video}
          />
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.reels_shape}>
        <TouchableOpacity onPress={handleShape}>
          <Image
            source={
              isPink
                ? require("../assets/shape-pink-icon.png")
                : require("../assets/shape-white-icon.png")
            }
            style={styles.overlayIcon}
          />
        </TouchableOpacity>
        <Text style={styles.overlayText}>{number}</Text>
        <TouchableOpacity onPress={handleShape}>
          <Image
            source={require("../assets/cmt-white-icon.png")}
            style={styles.overlayIcon}
          />
        </TouchableOpacity>
        <Text style={styles.overlayText}>1.977</Text>
        <TouchableOpacity onPress={pause}>
          <Image
            source={require("../assets/chat-white-icon.png")}
            style={styles.overlayIcon}
          />
        </TouchableOpacity>
        <Text style={styles.overlayText}>1.977</Text>
      </View>

      <View style={styles.avatar}>
        <Image source={videos[num].avatarSource} style={styles.image_avatar} />
        <Text style={styles.overlayTextAvatar}>{videos[num].text}</Text>
        <TouchableOpacity style={styles.btn_follow} onPress={handleShape}>
          Follow
        </TouchableOpacity>
      </View>
      <View style={styles.avatar_caption}>
        <Text style={styles.caption_text}>{videos[num].captinon}</Text>
      </View>
      <View style={styles.icon_camera}>
        <Image
          source={require("../assets/add-white-icon.png")}
          style={styles.overlayIcon}
        />
      </View>
      <View style={styles.logo_insta}>
        <Image
          source={require("../assets/logo-insta-white.png")}
          style={styles.logo_insta_white}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    width: "100%",
    aspectRatio: 2 / 5,
  },
  overlayIcon: {
    width: 30,
    height: 30,
  },
  overlayText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
  reels_shape: {
    position: "absolute",
    bottom: 100,
    right: 10,
    alignItems: "center",
  },
  avatar: {
    position: "absolute",
    bottom: 90,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image_avatar: {
    width: 45,
    height: 45,
    marginRight: 8,
  },
  overlayTextAvatar: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 12,
  },
  btn_follow: {
    borderRadius: 8,
    borderWidth: 1.5,
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    borderColor: "white",
    paddingVertical: 6 /* Tạo khoảng cách dọc */,
    paddingHorizontal: 8 /* Tạo khoảng cách ngang */,
  },

  caption_text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  avatar_caption: {
    position: "absolute",
    bottom: 60,
    left: 12,
  },

  icon_camera: {
    position: "absolute",
    top: 30,
    right: 10,
  },
  logo_insta: {
    position: "absolute",
    top: 30,
    left: 12,
  },
  logo_insta_white: {
    width: 107,
    height: 30,
  },
});
