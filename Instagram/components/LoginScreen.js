import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/user");
      const users = await response.json();

      const user = users.find((u) => u.username.toLowerCase() === username.toLowerCase() && u.password === password);

      if (user) {
        navigation.navigate("Tabs", {
          screen: "Profile",
          params: {
            userId: user.id,
            username: user.username,
            password: user.password,
            avatar: user.avatar,
          },
        });
      } else {
        alert("Đăng nhập không thành công");
      }
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu đến API:", error);
    }
  };
  const goSignUpScreen = () => {
    navigation.navigate("SignUpScreen");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/Instagram Logo-black.png")} style={styles.logo} />
      <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={(text) => setUsername(text)} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={(text) => setPassword(text)} />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>

      <Text style={styles.signInText}>
        Already have an account?{" "}
        <TouchableOpacity style={styles.signInLink} onPress={goSignUpScreen}>
          Sign Up.
        </TouchableOpacity>
      </Text>

      <View style={styles.footerContainer}>
        <Text>Instagram or FaceBook</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 182,
    height: 49,
    marginBottom: 60,
  },
  input: {
    height: 40,
    width: 357,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 12,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    width: 357,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "gray",
  },
  orText: {
    marginHorizontal: 8,
    color: "gray",
  },
  signInText: {
    marginTop: 16,
  },
  signInLink: {
    color: "#3498db",
    textDecorationLine: "underline",
  },
  footerContainer: {
    marginTop: 80,
  },
});
