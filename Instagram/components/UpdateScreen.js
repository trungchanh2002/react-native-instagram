import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Modal,
  TouchableOpacity,
  Picker,
  ScrollView,
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

export default function UpdateScreen({ route, navigation }) {
  const { userData, onUpdate } = route.params;
  const [newUsername, setNewUsername] = useState(userData.username);
  const [newBio, setNewBio] = useState(userData.bio);
  const [newName, setNewName] = useState(userData.name);
  const [newWebsite, setNewWebsite] = useState(userData.website);
  const [newEmail, setNewEmail] = useState(userData.email);
  const [newPhone, setNewPhone] = useState(userData.phone);
  const [newGender, setNewGender] = useState(userData.gender);
  const [newAvatar, setNewAvatar] = useState(userData.avatar);
  const [isModalVisible, setModalVisible] = useState(null);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/user")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleUpdate = () => {
    fetch(`http://localhost:3000/user/${userData.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: newUsername,
        bio: newBio,
        name: newName,
        website: newWebsite,
        email: newEmail,
        phone: newPhone,
        gender: newGender,
        avatar: newAvatar,
      }),
    })
      .then((response) => response.json())
      .then((updatedUser) => {
        onUpdate(updatedUser);
        navigation.goBack();
      })
      .catch((error) => console.error("Lỗi khi cập nhật dữ liệu:", error));
  };

  const handleUpdateAvatar = () => {
    fetch(`http://localhost:3000/user/${userData.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: newAvatar,
      }),
    })
      .then((response) => response.json())
      .then((updatedUser) => {
        onUpdate(updatedUser);
        navigation.goBack();
        // closeModal();
      })
      .catch((error) => console.error("Lỗi khi cập nhật dữ liệu:", error));
  };

  useEffect(() => {
    //
  }, []);

  const handleCancel = () => {
    navigation.goBack();
  };

  const closeModal = () => {
    setModalVisible(false);
    console.log("modal off");
  };
  const onModal = () => {
    setModalVisible(true);
    console.log("modal on");
  };

  const handleImagePress = (imagePath) => {
    console.log("Selected Image Path:", imagePath);
    setNewAvatar(imagePath);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          padding: 12,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.text_cancel} onPress={handleCancel}>
          Cancel
        </Text>
        <Text style={styles.text_edit}>Edit Profile</Text>
        <Text style={styles.text_done} onPress={handleUpdate}>
          Done
        </Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 10,
        }}
      >
        <Image
          source={require(`../assets/${userData.avatar}`)}
          style={{ width: 92, height: 92 }}
        />
        <Text style={styles.text_done} onPress={onModal}>
          Change Profile Photo
        </Text>
      </View>
      <View style={styles.container1}>
        <View style={styles.row}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            placeholder={"New Name"}
            value={newName}
            onChangeText={(text) => setNewName(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>UserName</Text>
          <TextInput
            placeholder={"New UserName"}
            value={newUsername}
            onChangeText={(text) => setNewUsername(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Website</Text>
          <TextInput
            placeholder={"New Website"}
            value={newWebsite}
            onChangeText={(text) => setNewWebsite(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Bio</Text>
          <TextInput
            placeholder={"New Bio"}
            value={newBio}
            onChangeText={(text) => setNewBio(text)}
            style={styles.input}
          />
        </View>
        <Text style={styles.text_switch}>Switch to Professional Account</Text>
        <Text style={{ fontSize: 15, fontWeight: "600" }}>
          Private Information
        </Text>
        <View style={styles.row}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder={"New Email"}
            value={newEmail}
            onChangeText={(text) => setNewEmail(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Phone</Text>
          <TextInput
            placeholder={"New Phone"}
            value={newPhone}
            onChangeText={(text) => setNewPhone(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Gender</Text>
          <TextInput
            placeholder={"New Gender"}
            value={newGender}
            onChangeText={(text) => setNewGender(text)}
            style={styles.input}
          />
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
        >
          <View
            style={{
              width: "100%",
              height: 220,
              position: "absolute",
              bottom: 0,
              backgroundColor: "white",
              borderRadius: 20,
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                padding: 10,
                alignItems: "center",
              }}
            >
              <AntDesign
                onPress={closeModal}
                name="closecircle"
                size={24}
                color="black"
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "600",
                }}
              >
                Selected Photos
              </Text>
              <MaterialIcons
                onPress={handleUpdateAvatar}
                name="done"
                size={24}
                color="#2A8EFF"
              />
            </View>

            <View style={styles.row}>
              <Text style={{ fontWeight: "600", fontSize: 15, marginLeft: 10 }}>
                New Avatar
              </Text>
            </View>
            <ScrollView horizontal style={{ flexDirection: "row" }}>
              {data.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => handleImagePress(item.avatar)}
                >
                  <View>
                    <Image
                      source={require(`../assets/${item.avatar}`)}
                      style={{ width: 120, height: 120, marginHorizontal: 5 }}
                    />
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text_cancel: {
    fontWeight: "600",
    fontSize: 16,
  },
  text_edit: {
    fontWeight: "600",
    fontSize: 16,
  },
  text_done: {
    fontWeight: "600",
    fontSize: 16,
    color: "#2A8EFF",
  },
  container1: {
    paddingLeft: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    paddingRight: 10,
  },
  label: {
    flex: 2.5,
    textAlign: "left",
    fontSize: 15,
  },
  input: {
    flex: 7.5,
    height: 35,
    borderColor: "gray",
    borderBottomWidth: 1,
    fontSize: 15,
  },
  text_switch: {
    fontWeight: "600",
    fontSize: 16,
    color: "#2A8EFF",
    marginBottom: 15,
  },
});
