import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, PanResponder, TouchableOpacity, TouchableWithoutFeedback, Modal, TextInput } from "react-native";
import { Video } from "expo-av";

export default function ReelsScreen({ navigation }) {
  const [num, setNum] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [isPink, setIsPink] = useState(false);
  const [number, setNumber] = useState(140);
  const [isFollowed, setIsFollowed] = useState(false);
  const [isModalVisible, setModalVisible] = useState(null);
  const [data, setData] = useState([]);
  const videoRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:3000/comments")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      pause();
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
    }),
  ).current;

  const handleShape = () => {
    setIsPink(!isPink);
    setNumber(isPink ? number - 1 : number + 1);
  };

  const handleFollow = () => {
    setIsFollowed(!isFollowed);
  };
  const handleCmt = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const goProfileFollowing = () => {
    navigation.navigate("ProfileFollowing");
  };
  console.log(num);

  const videos = [
    {
      id: 1,
      video: require("../videos/video-1.mp4"),
      avatarSource: require("../assets/story-1.png"),
      like: "101",
      comment: "100",
      share: "200",
      captinon: "Hello Ervery One",
      name: "cristian.no",
    },
    {
      id: 2,
      video: require("../videos/video-2.mp4"),
      avatarSource: require("../assets/story-2.png"),
      like: "204",
      comment: "281",
      share: "2.4k",
      captinon: "Xin chao moi nguoi!",
      name: "messi.lionel",
    },
    {
      id: 3,
      video: require("../videos/video-3.mp4"),
      avatarSource: require("../assets/story-3.png"),
      like: "300",
      comment: "171",
      share: "1.9k",
      captinon: "Xin chao moi nguoi!",
      name: "messi.lionel",
    },
    {
      id: 4,
      video: require("../videos/video-4.mp4"),
      avatarSource: require("../assets/story-4.png"),
      like: "480",
      comment: "565",
      share: "2.2k",
      captinon: "Xin chao moi nguoi!",
      name: "messi.lionel",
    },
    {
      id: 5,
      video: require("../videos/video-5.mp4"),
      avatarSource: require("../assets/story-5.png"),
      like: "678",
      comment: "555",
      share: "2.2k",
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
        <Image source={require("../assets/add-white-icon.png")} style={styles.icon} />
      </View>
      <View style={styles.location_insta}>
        <Image source={require("../assets/instagram-logo.png")} style={{ width: 128, height: 30 }} />
      </View>

      <View style={styles.location_all_icon}>
        <View style={styles.location_shape}>
          <TouchableOpacity onPress={handleShape}>
            <Image source={isPink ? require("../assets/shape-pink-icon.png") : require("../assets/shape-white-icon.png")} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.text_icon}>{number}</Text>
        </View>
        <View style={styles.location_shape}>
          <TouchableOpacity style={{ alignItems: "center" }} onPress={handleCmt}>
            <Image source={require("../assets/cmt-white-icon.png")} style={styles.icon} />
            <Text style={styles.text_icon}>{videos[num].comment}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.location_shape}>
          <Image source={require("../assets/chat-white-icon.png")} style={styles.icon} />
          <Text style={styles.text_icon}>{videos[num].share}</Text>
        </View>
      </View>

      <View style={styles.avatar}>
        <TouchableOpacity onPress={goProfileFollowing}>
          <Image source={videos[num].avatarSource} style={styles.image_avatar} />
        </TouchableOpacity>
        <Text style={styles.text_name}>{videos[num].name}</Text>
        <TouchableOpacity style={styles.btn_follow} onPress={handleFollow}>
          <Text style={styles.text_follow}>{isFollowed ? "Unfollow" : "Follow"}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.avatar_caption}>
        <Text style={styles.caption_text}>{videos[num].captinon}</Text>
      </View>

      <View style={styles.icon_map}>
        <TouchableWithoutFeedback onPress={pause}>
          <Image source={require("../assets/icon-play.png")} style={[styles.icon_hide, { opacity: isClicked ? 0.8 : 0.0 }]} />
        </TouchableWithoutFeedback>
      </View>
      {/* Modal Comments */}
      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <View style={{ width: "100%", height: 420, position: "absolute", bottom: 0, backgroundColor: "white", borderRadius: 20 }}>
          <View style={{ alignItems: "center", paddingTop: 5 }}>
            <TouchableOpacity onPress={closeModal}>
              <Text style={{ borderRadius: 5, backgroundColor: "gray", width: 100, height: 6 }}></Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 15, fontWeight: "bold", marginTop: 10 }}>Commnets</Text>
          </View>
          <View>
            {data.map((comment) => (
              <View key={comment.id}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10, marginTop: 10 }}>
                  <View style={{ flexDirection: "column" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                      <Image source={require(`../assets/${comment.avatar}`)} style={{ width: 32, height: 32, marginRight: 5 }} />
                      <View style={{ flexDirection: "column" }}>
                        <View style={{ flexDirection: "row" }}>
                          <Text style={{ marginRight: 5, fontWeight: "600" }}>{comment.username}</Text>
                          <Text style={{ color: "#A4A4A4" }}>{comment.time}</Text>
                        </View>
                        <Text>{comment.comment}</Text>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row", marginHorizontal: 37 }}>
                      <Text style={{ marginRight: 10, color: "#A4A4A4" }}>Reply</Text>
                      <Text style={{ color: "#A4A4A4" }}>See translation</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: "column" }}>
                    <Image style={{ width: 20, height: 20 }} source={require("../assets/shape-icon.png")} />
                    <Text>{comment.like}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", bottom: 0, position: "absolute", width: "100%", padding: 5 }}>
            <Image style={{ width: 40, height: 40, marginRight: 5 }} source={require("../assets/avatar_emp_1.png")} />
            <TextInput style={{ borderWidth: 2, borderRadius: 15, color: "black", borderColor: "gray", height: 38, width: 300, opacity: 0.8, paddingLeft: 10 }} placeholder="Send Message" />
            <Image style={{ width: 25, height: 25, marginLeft: 5 }} source={require("../assets/chat-icon.png")} />
          </View>
        </View>
      </Modal>
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
    right: 10,
    alignItems: "center",
  },
  location_insta: {
    position: "absolute",
    top: 30,
    left: 10,
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
  icon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 5,
    marginTop: 10,
  },
});
