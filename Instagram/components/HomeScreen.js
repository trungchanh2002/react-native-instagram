import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, ScrollView, Image, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, Modal } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function HomeScreen({ navigation }) {
  const route = useRoute();
  const { userId, username, password, avatar } = route.params || {};
  console.log("User ID:", userId);
  console.log("Username:", username);
  console.log("Password:", password);
  console.log("Avatar:", avatar);

  const [data, setData] = useState([]);
  const [isModalVisible, setModalVisible] = useState(null);
  const closeModal = () => {
    setModalVisible(false);
  };
  useEffect(() => {
    fetch("http://localhost:3000/comments")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const goNotiScreen = () => {
    navigation.navigate("NotificationScreen");
  };

  const goMessScreen = () => {
    navigation.navigate("MessScreen");
  };

  const goStoryScreen = () => {
    navigation.navigate("StoryScreen");
  };

  const handleCmt = () => {
    setModalVisible(true);
  };

  const stories = [
    { id: 1, image: require("../assets/story-0.png"), text: `${username}` },
    { id: 2, image: require("../assets/story-1.png"), text: `${username}` },
    { id: 3, image: require("../assets/story-3.png"), text: "crironaldo.dev" },
    { id: 4, image: require("../assets/story-4.png"), text: "daotron.mm" },
    { id: 5, image: require("../assets/story-5.png"), text: "chanh.aaa" },
    { id: 6, image: require("../assets/story-6.png"), text: "chanh.aaa" },
    { id: 7, image: require("../assets/story-7.png"), text: "chanh.aaa" },
    { id: 8, image: require("../assets/story-8.png"), text: "chanh.aaa" },
    { id: 9, image: require("../assets/story-9.png"), text: "chanh.aaa" },
    { id: 10, image: require("../assets/story-5.png"), text: "chanh.aaa" },
    { id: 11, image: require("../assets/story-3.png"), text: "chanh.aaa" },
    { id: 12, image: require("../assets/story-1.png"), text: "chanh.aaa" },
    { id: 13, image: require("../assets/story-2.png"), text: "chanh.aaa" },
    { id: 14, image: require("../assets/story-3.png"), text: "chanh.aaa" },
    { id: 15, image: require("../assets/story-5.png"), text: "chanh.aaa" },
    { id: 16, image: require("../assets/story-3.png"), text: "chanh.aaa" },
    { id: 17, image: require("../assets/story-1.png"), text: "chanh.aaa" },
    { id: 18, image: require("../assets/story-2.png"), text: "chanh.aaa" },
    { id: 19, image: require("../assets/story-3.png"), text: "chanh.aaa" },
  ];

  const [posts, setPosts] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts

    const unsubscribeFocus = navigation.addListener("focus", () => {
      fetchData(); // Fetch data when the screen comes into focus
    });

    return () => {
      unsubscribeFocus(); // Clean up the event listener when the component unmounts
    };
  }, [navigation]);

  return (
    <ScrollView>
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

      <View style={styles.container}>
        <View style={styles.home_header}>
          <Image source={require("../assets/Logo dropdown.png")} style={styles.logo_insta} />
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={goNotiScreen}>
              <Image source={require("../assets/shape-icon.png")} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={goMessScreen}>
              <Image source={require("../assets/mess-icon.png")} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <FlatList
            data={stories}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            renderItem={({ item }) => (
              <View style={styles.home_story}>
                <TouchableOpacity onPress={goStoryScreen}>
                  <Image source={item.image} style={styles.story_image} />
                </TouchableOpacity>
                <Text style={styles.textStyle}>{item.text}</Text>
              </View>
            )}
          />
        </View>

        <View>
          <FlatList
            data={posts.sort((a, b) => b.id - a.id)} // Sort data in descending order based on id
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.home_post}>
                <View style={styles.post_header}>
                  <View style={styles.avatar}>
                    <Image source={require(`../assets/${item.avatar}`)} style={styles.image_avatar} />

                    <View style={{ flexDirection: "column", paddingLeft: 5 }}>
                      <View style={styles.ruffles}>
                        <Text style={styles.text2}>{item.username}</Text>
                        <Image source={require("../assets/verified.png")} style={styles.image_verified} />
                      </View>
                      <Text>Được tài trợ</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.post_image}>
                  <Image source={require(`../assets/${item.imagePost}`)} style={styles.image_post} />
                </View>
                <View style={styles.post_info}>
                  <View style={styles.icon_postinfo}>
                    <View style={styles.iconGroupLeft}>
                      <TouchableOpacity>
                        <Image source={require("../assets/shape-icon.png")} style={styles.icon_post} />
                      </TouchableOpacity>
                      <Image source={require("../assets/cmt-icon.png")} style={styles.icon_post} />
                      <TouchableOpacity onPress={goMessScreen}>
                        <Image source={require("../assets/chat-icon.png")} style={styles.icon_post} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.iconGroupRight}>
                      <TouchableOpacity>
                        <Image source={require("../assets/share-icon.png")} style={styles.icon_post} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <Text style={styles.text_likes}>1 Likes</Text>
                  <View style={styles.caption}>
                    <Text style={styles.text_caption}>
                      <Text style={styles.boldText}>Messi </Text>
                      <Text>{item.status}</Text>
                    </Text>
                  </View>
                  <Text style={styles.text_time}>View all comments</Text>
                  <View style={styles.commentContainer}>
                    <Image source={require("../assets/story-0.png")} style={styles.image_avatar_2} />
                    <TextInput style={styles.commentInput} placeholder="Thêm bình luận ..." placeholderTextColor="#888" />
                  </View>
                  <Text style={styles.text_time}>1 min hour</Text>
                </View>
              </View>
            )}
          />
        </View>

        {/* -------------- */}

        {/* ----------- */}

        <View>
          {/* Post 1 */}
          <Post
            avatarSource={require("../assets/story-1.png")}
            postName="Messi"
            isSponsored={true}
            postText="Được tài trợ"
            postImageSource={require("../assets/post-1.png")}
            postCaption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt"
            postTime="30 minutes ago"
            handleCmt={handleCmt}
          />
          {/* Post 2 */}
          <Post
            avatarSource={require("../assets/story-3.png")}
            postName="Ronaldo"
            isSponsored={true}
            postText="Được tài trợ"
            postImageSource={require("../assets/post-2.png")}
            postCaption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt"
            postTime="60 minutes ago"
            handleCmt={handleCmt}
          />
          {/* Post 3 */}
          <Post
            avatarSource={require("../assets/story-3.png")}
            postName="Mbappe"
            isSponsored={true}
            postText="Được tài trợ"
            postImageSource={require("../assets/post-3.png")}
            postCaption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt"
            postTime="30 minutes ago"
            handleCmt={handleCmt}
          />
          {/* Post 4 */}
          <Post
            avatarSource={require("../assets/story-1.png")}
            postName="Neymar"
            isSponsored={true}
            postText="Được tài trợ"
            postImageSource={require("../assets/post-4.png")}
            postCaption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt"
            postTime="30 minutes ago"
            handleCmt={handleCmt}
          />
          {/* Post 5 */}
          <Post
            avatarSource={require("../assets/story-1.png")}
            postName="Haaland"
            isSponsored={true}
            postText="Được tài trợ"
            postImageSource={require("../assets/post-5.png")}
            postCaption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt"
            postTime="20 minutes ago"
            handleCmt={handleCmt}
          />
          <Post
            avatarSource={require("../assets/story-7.png")}
            postName="Ramos"
            isSponsored={true}
            postText="Được tài trợ"
            postImageSource={require("../assets/post-7.png")}
            postCaption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt"
            postTime="20 minutes ago"
            handleCmt={handleCmt}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const Post = ({ avatarSource, postImageSource, isSponsored, postName, postText, postCaption, postTime, handleCmt }) => {
  const [number, setNumber] = useState(200);
  const [isShare, setIsShare] = useState(true);
  const [isPink, setIsPink] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const navigation = useNavigation();

  const handleProfileFl = () => {
    navigation.navigate("ProfileFollowing");
  };

  const handleShape = () => {
    setIsPink(!isPink);
    setNumber(isPink ? number - 1 : number + 1);
  };

  const handleCmt1 = () => {
    handleCmt();
    console.log("ok");
  };
  const goMessScreen = () => {
    navigation.navigate("MessScreen");
  };

  const handleShare = () => {
    setIsShare(!isShare);
  };

  return (
    <View style={styles.home_post}>
      <View style={styles.post_header}>
        <View style={styles.avatar}>
          <TouchableOpacity onPress={handleProfileFl}>
            <Image source={avatarSource} style={styles.image_avatar} />
          </TouchableOpacity>
          <View style={styles.text1}>
            <View style={styles.ruffles}>
              <Text style={styles.text2}>{postName}</Text>
              {isSponsored && <Image source={require("../assets/verified.png")} style={styles.image_verified} />}
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
              <Image source={isPink ? require("../assets/shape-pink-icon.png") : require("../assets/shape-icon.png")} style={styles.icon_post} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCmt1}>
              <Image source={require("../assets/cmt-icon.png")} style={styles.icon_post} />
            </TouchableOpacity>
            <TouchableOpacity onPress={goMessScreen}>
              <Image source={require("../assets/chat-icon.png")} style={styles.icon_post} />
            </TouchableOpacity>
          </View>
          <View style={styles.iconGroupRight}>
            <TouchableOpacity onPress={handleShare}>
              <Image source={isShare ? require("../assets/share-icon.png") : require("../assets/share-icon-yellow.png")} style={styles.icon_post} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.text_likes}>{number} Likes</Text>
        <View style={styles.caption}>
          <Text style={styles.text_caption}>
            <Text style={styles.boldText}>{postName} </Text>
            <Text>{postCaption}</Text>
          </Text>
        </View>
        <Text style={styles.text_time} onPress={() => setShowComment(!showComment)}>
          View all comments
        </Text>
        {showComment && (
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.text_likes}>Ronaldo </Text>
              <Text>Nice 😂😂😂</Text>
            </View>
          </View>
        )}

        <View style={styles.commentContainer}>
          <Image source={require("../assets/story-0.png")} style={styles.image_avatar_2} />
          <TextInput style={styles.commentInput} placeholder="Thêm bình luận ..." placeholderTextColor="#888" />
        </View>
        <Text style={styles.text_time}>{postTime}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  textStyle: {
    fontSize: 15,
    fontWeight: "500",
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
  home_story: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 4,
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
    marginRight: 10,
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
