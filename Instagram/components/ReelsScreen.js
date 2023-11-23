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

export default function ReelsScreen({ navigation }) {
  const [num, setNum] = useState(0);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [isPink, setIsPink] = useState(false);
  const [number, setNumber] = useState(140);
  const [isFollowed, setIsFollowed] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      pause();
      // videoRef.current.pauseAsync();
    });
    return unsubscribe;
  }, [navigation]);

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
      setNum((prevNum) => (prevNum === videos.length - 1 ? 0 : prevNum + 1));
    } else if (gestureState.dy > 70) {
      setNum((prevNum) => (prevNum === 0 ? videos.length - 1 : prevNum - 1));
    }
    console.log("Y:", gestureState.dy);
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderRelease: (_, gestureState) => handleSwipe(gestureState),
    })
  ).current;

  const handleShape = () => {
    setIsPink(!isPink);
    setNumber(isPink ? number - 1 : number + 1);
  };

  const handleFollow = () => {
    setIsFollowed(!isFollowed);
  };
  const handleCmt = () => {
    navigation.navigate("CommentScreen");
  };

  console.log(num);
  const videos = [
    {
      id: 1,
      video: require("../videos/video-1.mp4"),
      avatarSource: require("../assets/story-1.png"),
      like: "100",
      comment: "100",
      share: "200",
      captinon: "Hello Ervery One",
      name: "cristian.no",
    },
    {
      id: 2,
      video: require("../videos/video-2.mp4"),
      avatarSource: require("../assets/story-2.png"),
      like: "200",
      comment: "200",
      share: "2.4k",
      captinon: "Xin chao moi nguoi!",
      name: "messi.lionel",
    },
    {
      id: 3,
      video: require("../videos/video-3.mp4"),
      avatarSource: require("../assets/story-2.png"),
      like: "200",
      comment: "200",
      share: "2.4k",
      captinon: "Xin chao moi nguoi!",
      name: "messi.lionel",
    },
    {
      id: 4,
      video: require("../videos/video-4.mp4"),
      avatarSource: require("../assets/story-2.png"),
      like: "200",
      comment: "200",
      share: "2.4k",
      captinon: "Xin chao moi nguoi!",
      name: "messi.lionel",
    },
    {
      id: 5,
      video: require("../videos/video-5.mp4"),
      avatarSource: require("../assets/story-2.png"),
      like: "200",
      comment: "200",
      share: "2.4k",
      captinon: "Xin chao moi nguoi!",
      name: "messi.lionel",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }} {...panResponder.panHandlers}>
        <Video
          ref={videoRef}
          style={styles.video_size}
          source={videos[num].video}
          shouldPlay={true}
          resizeMode="contain"
          isLooping
          useNativeControls
        />
      </View>
      <View style={styles.location_add}>
        <Image
          source={require("../assets/add-white-icon.png")}
          style={styles.icon}
        />
      </View>

      <View style={styles.location_all_icon}>
        <View style={styles.location_shape}>
          <TouchableOpacity onPress={handleShape}>
            <Image
              source={
                isPink
                  ? require("../assets/shape-pink-icon.png")
                  : require("../assets/shape-white-icon.png")
              }
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.text_icon}>{number}</Text>
        </View>
        <View style={styles.location_shape}>
          <TouchableOpacity onPress={handleCmt}>
            <Image
              source={require("../assets/cmt-white-icon.png")}
              style={styles.icon}
            />
            <Text style={styles.text_icon}>{videos[num].comment}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.location_shape}>
          <Image
            source={require("../assets/chat-white-icon.png")}
            style={styles.icon}
          />
          <Text style={styles.text_icon}>{videos[num].share}</Text>
        </View>
      </View>

      <View style={styles.avatar}>
        <Image source={videos[num].avatarSource} style={styles.image_avatar} />
        <Text style={styles.text_name}>{videos[num].name}</Text>
        <TouchableOpacity style={styles.btn_follow} onPress={handleFollow}>
          <Text style={styles.text_follow}>
            {isFollowed ? "Unfollow" : "Follow"}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.avatar_caption}>
        <Text style={styles.caption_text}>{videos[num].captinon}</Text>
      </View>

      <View style={styles.icon_map}>
        <TouchableWithoutFeedback onPress={pause}>
          <Image
            source={require("../assets/icon-play.png")}
            style={[styles.icon_hide, { opacity: isClicked ? 0.8 : 0.0 }]}
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
  video_size: {
    width: "100%",
    height: 700,
  },
  icon: {
    width: 30,
    height: 30,
  },
  location_add: {
    position: "absolute",
    top: 30,
    right: 12,
    alignItems: "center",
  },
  location_shape: {
    marginBottom: 15,
    alignItems: "center",
  },

  text_icon: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  icon_map: {
    position: "absolute",
    top: "40%",
    right: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  icon_hide: {
    width: 80,
    height: 80,
  },
  avatar: {
    position: "absolute",
    bottom: 90,
    left: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  image_avatar: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  text_name: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  text_follow: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  btn_follow: {
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "white",
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  avatar_caption: {
    position: "absolute",
    bottom: 60,
    left: 20,
  },
  caption_text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  location_all_icon: {
    bottom: 100,
    right: 12,
    position: "absolute",
  },
});
