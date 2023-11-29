import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { useDropzone } from "react-dropzone";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export default function AddScreen({ navigation }) {
  const route = useRoute();
  const { userId, username, password, avatar } = route.params || {};
  const [selectedImage, setSelectedImage] = useState(null);
  console.log("User ID:", userId);
  console.log("Username:", username);
  console.log("Password:", password);
  console.log("Avatar:", avatar);

  useEffect(() => {
    // Truyền dữ liệu sang AddScreen khi component được render
    navigation.navigate("Home", { userId, username, password, avatar });
  }, []);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setSelectedImage(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  const handleNext = () => {
    const imageName = selectedImage ? selectedImage.name : null;
    if (imageName) {
      console.log("Selected Image Name:", imageName);
      navigation.navigate("PostScreen", { imageName, userId, username, password, avatar });
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {selectedImage && <Image style={{ width: "100%", height: 600 }} source={{ uri: URL.createObjectURL(selectedImage) }} resizeMode="contain" />}
      <div {...getRootProps()} style={styles.pickImageButton}>
        <input {...getInputProps()} />
        <Image style={styles.pickImageIcon} source={require("../assets/image.png")} />
      </div>
      {/* ------------- */}
      <View style={{ position: "absolute", bottom: 50, left: "50%", marginLeft: -36 }}>
        <Image style={{ width: 72, height: 70 }} source={require("../assets/camera-icon.png")} />
      </View>
      {/* ------------- */}
      <View style={{ position: "absolute", bottom: 20, left: 30 }}>
        <Image style={{ width: 330, height: 10 }} source={require("../assets/menu-image.png")} />
      </View>
      {/* ------------- */}
      <View style={{ position: "absolute", top: 15, right: 10 }}>
        <TouchableOpacity onPress={handleNext}>
          <AntDesign name="right" size={25} color="white" />
        </TouchableOpacity>
      </View>
      {/* ------------- */}
      <View style={{ position: "absolute", top: 15, left: 10 }}>
        <TouchableOpacity onPress={handleBack}>
          <AntDesign name="left" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  selectedImage: {},
  pickImageButton: {
    cursor: "pointer",
  },
  pickImageIcon: {
    width: 40,
    height: 40,
    bottom: 50,
    position: "absolute",
    left: 10,
  },
});
