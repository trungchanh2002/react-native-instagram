import React, { useState } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function HomeScreen() {
  const [number, setNumber] = useState(100);
  const [isPink, setIsPink] = useState(false);

  const handleShape = () => {
    setIsPink(!isPink);
    if (isPink) {
      setNumber(number - 1);
    } else {
      setNumber(number + 1);
    }
  };

  const stories = [
    { image: require("../assets/story-1.png"), text: "chanh.aaa" },
    { image: require("../assets/story-2.png"), text: "hoandat.td" },
    { image: require("../assets/story-3.png"), text: "chanh.aaa" },
    { image: require("../assets/story-4.png"), text: "chanh.aaa" },
    { image: require("../assets/story-2.png"), text: "chanh.aaa" },
    { image: require("../assets/story-3.png"), text: "chanh.aaa" },
    { image: require("../assets/story-1.png"), text: "chanh.aaa" },
    { image: require("../assets/story-2.png"), text: "chanh.aaa" },
    { image: require("../assets/story-3.png"), text: "chanh.aaa" },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section1}>
        <Image
          source={require("../assets/Logo dropdown.png")}
          style={styles.logo_insta}
        />
        <View style={styles.iconContainer}>
          <Image
            source={require("../assets/shape-icon.png")}
            style={styles.icon}
          />
          <Image
            source={require("../assets/mess-icon.png")}
            style={styles.icon}
          />
        </View>
      </View>

      <ScrollView horizontal={true}>
        <View style={styles.section2}>
          {stories.map((story, index) => (
            <View style={styles.story} key={index}>
              <Image source={story.image} style={styles.story_image} />
              <Text style={styles.text}>{story.text}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.section3}>
        {/* Bài viết 1 */}
        <View style={styles.post_header}>
          <View style={styles.avatar}>
            <Image
              source={require("../assets/story-1.png")}
              style={styles.image_avatar}
            />
            <View style={styles.text1}>
              <View style={styles.ruffles}>
                <Text style={styles.text2}>Ruffles</Text>
                <Image
                  source={require("../assets/verified.png")}
                  style={styles.image_verified}
                />
              </View>
              <Text>Sponsored</Text>
            </View>
          </View>
        </View>
        <View style={styles.post_image}>
          <Image
            source={require("../assets/032_AshleyMatt 1.png")}
            style={styles.image_post}
          />
        </View>
        <View style={styles.post_info}>
          <View style={styles.icon_postinfo}>
            <View style={styles.iconGroupLeft}>
              <TouchableOpacity onPress={handleShape}>
                <Image
                  source={
                    isPink
                      ? require("../assets/shape-pink-icon.png")
                      : require("../assets/shape-icon.png")
                  }
                  style={styles.icon_post}
                />
              </TouchableOpacity>
              <Image
                source={require("../assets/cmt-icon.png")}
                style={styles.icon_post}
              />
              <Image
                source={require("../assets/chat-icon.png")}
                style={styles.icon_post}
              />
            </View>
            <View style={styles.iconGroupRight}>
              <Image
                source={require("../assets/share-icon.png")}
                style={styles.icon_post}
              />
            </View>
          </View>
          <Text style={styles.text_likes}>{number} Likes</Text>
          <View style={styles.caption}>
            <Text style={styles.text_caption}>
              <Text style={styles.boldText}>Ruffles </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </Text>
            </Text>
          </View>
          <Text style={styles.text_time}>View all comments</Text>
          <View style={styles.commentContainer}>
            <Image
              source={require("../assets/Avatar.png")}
              style={styles.image_avatar_2}
            />
            <TextInput
              style={styles.commentInput}
              placeholder="Thêm bình luận ..."
              placeholderTextColor="#888"
            />
          </View>
          <Text style={styles.text_time}>30 minutes ago</Text>
        </View>
        {/* Bài viết 2 */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  section1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  section2: {
    flexDirection: "row",
  },
  section3: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  logo_insta: {
    width: 128,
    height: 30,
  },
  iconContainer: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 20,
    width: 24,
    height: 24,
  },
  story_image: {
    width: 80,
    height: 80,
  },
  story: {
    flexDirection: "column",
    alignItems: "center",
    padding: 5,
  },
  text: {
    fontSize: 15,
  },
  image_avatar: {
    width: 40,
    height: 40,
  },
  avatar: {
    flexDirection: "row",
  },
  text1: {
    marginLeft: 4,
  },
  text2: {
    fontWeight: "bold",
    marginRight: 4,
  },
  post_header: {
    padding: 8,
  },
  image_verified: {
    width: 15,
    height: 15,
  },
  ruffles: {
    flexDirection: "row",
    alignItems: "center",
  },
  image_post: {
    width: "100%",
    aspectRatio: 6 / 5,
  },
  icon_postinfo: {
    flexDirection: "row",
    paddingLeft: 5,
    justifyContent: "space-between",
  },
  icon_post: {
    width: 24,
    height: 24,
    margin: 5,
  },
  iconGroupLeft: {
    flexDirection: "row",
  },
  iconGroupRight: {
    flexDirection: "row",
    paddingRight: 10,
  },
  text_likes: {
    paddingLeft: 10,
    fontWeight: "bold",
  },
  caption: {
    flexDirection: "row",
  },
  commentContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    marginTop: 5,
  },
  commentInput: {
    borderRadius: 8,
    padding: 8,
    flex: 1,
  },
  text_time: {
    paddingLeft: 10,
    color: "#888",
  },
  boldText: {
    fontWeight: "bold",
  },
  text_caption: {
    paddingLeft: 10,
  },
  image_avatar_2: {
    width: 35,
    height: 35,
  },
});
