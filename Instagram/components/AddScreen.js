import React, { useState, useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { manipulateAsync } from "expo-image-manipulator";
import { useNavigation } from "@react-navigation/native"; // Import the hook
import { Alert } from "react-native";

export default function AddScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [editedPhoto, setEditedPhoto] = useState(null);
  const navigation = useNavigation(); // Use the navigation hook

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setCapturedPhoto(photo);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setCapturedPhoto(result);
    }
  };

  const editPhoto = async () => {
    if (capturedPhoto) {
      const { uri } = await manipulateAsync(capturedPhoto.uri, [{ resize: { width: 400 } }], { compress: 0.8, format: "jpeg" });
      setEditedPhoto({ uri });
    }
  };

  const uploadPhoto = () => {
    if (editedPhoto) {
      Alert.alert(
        "Select Upload Destination",
        "Choose where you want to upload the photo:",
        [
          {
            text: "Reels",
            onPress: () => handleUpload("reels"),
          },
          {
            text: "Newfeeds",
            onPress: () => handleUpload("newfeeds"),
          },
          {
            text: "Cancel",
            style: "cancel",
          },
        ],
        { cancelable: true },
      );
    }
  };

  const handleUpload = async (destination) => {
    try {
      if (destination === "reels" && editedPhoto) {
        console.log("Upload Destination:", destination);
        navigation.navigate("Reels", { uploadedPhoto: editedPhoto });
        setCapturedPhoto(null);
        setEditedPhoto(null);
      } else {
        // Handle other destinations
      }
    } catch (error) {
      console.error("Error uploading photo:", error);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        {editedPhoto ? (
          <Image source={{ uri: editedPhoto.uri }} style={styles.previewImage} />
        ) : (
          <Camera style={styles.camera} type={type} ref={cameraRef}>
            <View style={styles.cameraView}>
              <TouchableOpacity style={styles.galleryButton} onPress={pickImage}>
                <Image source={require('../assets/image.png')} style={styles.galleryImage} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.captureButton} onPress={takePicture} />
              <TouchableOpacity
                style={styles.flipButton}
                onPress={() => {
                  setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
                }}>
                <Image source={require('../assets/Change Camera.png')} style={styles.galleryImage} />
              </TouchableOpacity>
            </View>
          </Camera>
        )}
      </View>
      {capturedPhoto && (
        <View style={styles.bottomButtons}>
          <TouchableOpacity style={styles.editButton} onPress={editPhoto}>
            <Text style={styles.editText}> Edit Photo </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.uploadButton} onPress={uploadPhoto}>
            <Text style={styles.uploadText}> Upload Photo </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* New row for camera functions */}
      <View style={styles.cameraFunctions}>
        <TouchableOpacity style={styles.cameraFunctionButton}>
          <Text style={styles.cameraFunctionText}>Type</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cameraFunctionButton}>
          <Text style={styles.cameraFunctionText}>Live</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cameraFunctionButton}>
          <Text style={styles.cameraFunctionText}>Normal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cameraFunctionButton}>
          <Text style={styles.cameraFunctionText}>Boomerang</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cameraFunctionButton}>
          <Text style={styles.cameraFunctionText}>Macro</Text>
        </TouchableOpacity>
        {/* Add more buttons for other camera functions */}
      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>{`<`}</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cameraContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    flex: 1,
    width: "100%",
  },
  cameraView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end", 
    padding: 20,
  },
  flipButton: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 5,
  },
  flipText: {
    fontSize: 18,
    color: "white",
  },
  captureButton: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 30,
    margin: 20,
  },
  galleryButton: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 5,
  },
  galleryImage: {
    width: 30,
    height: 30,
  },
  previewImage: {
    flex: 1,
    width: "100%",
  },
  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
  },
  editButton: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
  },
  editText: {
    fontSize: 18,
    color: "white",
  },
  uploadButton: {
    backgroundColor: "#2ecc71",
    padding: 10,
    borderRadius: 5,
  },
  uploadText: {
    fontSize: 18,
    color: "white",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  backText: {
    fontSize: 24,
    color: "white",
  },
  changeCameraIcon: {
    width: 30,
    height: 30,
  },
  cameraFunctions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 0,
    backgroundColor:"black",
  },
  cameraFunctionButton: {
    backgroundColor: "black", 
    padding: 10,
    borderRadius: 5,
  },
  cameraFunctionText: {
    fontSize: 11,
    color: "white", 
    fontFamily: "SF Pro Text",
  },
});
