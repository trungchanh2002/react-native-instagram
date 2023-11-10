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

export default function HomeScreen({ navigation }) {
  const goMessScreen = () => {
    navigation.navigate("MessScreen");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.home_header}>
        <Image
          source={require("../assets/Logo dropdown.png")}
          style={styles.logo_insta}
        />
        <View style={styles.iconContainer}>
          <Image
            source={require("../assets/shape-icon.png")}
            style={styles.icon}
          />
          <TouchableOpacity onPress={goMessScreen}>
            <Image
              source={require("../assets/mess-icon.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.home_story}>
        {stories.map((story, index) => (
          <View style={styles.story} key={index}>
            <Image source={story.image} style={styles.story_image} />
            <Text style={styles.text}>{story.text}</Text>
          </View>
        ))}
      </View>
      {/* Post */}
      <View>
        {/* Post 1 */}
        <Post
          avatarSource={require("../assets/story-1.png")}
          postName="Rufles"
          isSponsored={true}
          postText="Được tài trợ"
          postImageSource={require("../assets/post-1.png")}
          postCaption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt"
          postTime="30 minutes ago"
        />
        {/* Post 2 */}
        <Post
          avatarSource={require("../assets/story-2.png")}
          postName="Rufles"
          isSponsored={true}
          postText="Được tài trợ"
          postImageSource={require("../assets/post-2.png")}
          postCaption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt"
          postTime="60 minutes ago"
        />

        {/* Post 3 */}
        <Post
          avatarSource={require("../assets/story-3.png")}
          postName="An"
          isSponsored={true}
          postText="Được tài trợ"
          postImageSource={require("../assets/post-3.png")}
          postCaption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt"
          postTime="30 minutes ago"
        />
        {/* Post 4 */}
        <Post
          avatarSource={require("../assets/story-1.png")}
          postName="Duys"
          isSponsored={true}
          postText="Được tài trợ"
          postImageSource={require("../assets/post-4.png")}
          postCaption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt"
          postTime="30 minutes ago"
        />

        {/* Post 5 */}
        <Post
          avatarSource={require("../assets/story-1.png")}
          postName="Chanh"
          isSponsored={true}
          postText="Được tài trợ"
          postImageSource={require("../assets/post-5.png")}
          postCaption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt"
          postTime="20 minutes ago"
        />
      </View>
    </ScrollView>
  );
}

const Post = ({
  avatarSource,
  postImageSource,
  isSponsored,
  postName,
  postText,
  postCaption,
  postTime,
}) => {
  const [number, setNumber] = useState(100);
  const [isPink, setIsPink] = useState(false);
  const [showComment, setShowComment] = useState(false);

  const handleShape = () => {
    setIsPink(!isPink);
    setNumber(isPink ? number - 1 : number + 1);
  };

  return (
    <View style={styles.home_post}>
      <View style={styles.post_header}>
        <View style={styles.avatar}>
          <Image source={avatarSource} style={styles.image_avatar} />
          <View style={styles.text1}>
            <View style={styles.ruffles}>
              <Text style={styles.text2}>{postName}</Text>
              {isSponsored && (
                <Image
                  source={require("../assets/verified.png")}
                  style={styles.image_verified}
                />
              )}
            </View>
            {isSponsored && <Text>{postText}</Text>}
          </View>
        </View>
      </View>
      <View style={styles.post_image}>
        <Image source={postImageSource} style={styles.image_post} />
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
            <Text style={styles.boldText}>{postName} </Text>
            <Text>{postCaption}</Text>
          </Text>
        </View>
        <Text
          style={styles.text_time}
          onPress={() => setShowComment(!showComment)}
        >
          View all comments
        </Text>
        {showComment && <Text>Xinh dep qua</Text>}

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
        <Text style={styles.text_time}>{postTime}</Text>
      </View>
    </View>
  );
};

const stories = [
  { image: require("../assets/story-1.png"), text: "chanh.aaa" },
  { image: require("../assets/story-2.png"), text: "hoandat.td" },
  { image: require("../assets/story-3.png"), text: "chanh.aaa" },
  { image: require("../assets/story-1.png"), text: "chanh.aaa" },
  { image: require("../assets/story-2.png"), text: "chanh.aaa" },
  { image: require("../assets/story-3.png"), text: "chanh.aaa" },
  { image: require("../assets/story-1.png"), text: "chanh.aaa" },
  { image: require("../assets/story-2.png"), text: "chanh.aaa" },
  { image: require("../assets/story-3.png"), text: "chanh.aaa" },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  home_header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  home_story: {
    flexDirection: "row",
  },
  home_post: {
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
    marginBottom: 5,
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
