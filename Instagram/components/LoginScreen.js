import React, { useState } from "react";
import {
  StatusBar,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/user?username=${username}&password=${password}`
      );
      const userData = await response.json();

      if (userData.length > 0) {
        console.log("Login successful");
        navigation.reset({
          index: 0,
          routes: [{ name: "Tabs", state: { routes: [{ name: "Home" }] } }],
        });
      } else {
        console.log("Login failed");
        alert("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const navigateToSignIn = () => {
    navigation.navigate("SignUpScreen");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Instagram Logo-black.png")}
        style={styles.logo}
      />

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

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
        <TouchableOpacity style={styles.signInLink} onPress={navigateToSignIn}>
          Sign Up.
        </TouchableOpacity>
      </Text>

      <View style={styles.footerContainer}>
        <Text>Instagram or FaceBook</Text>
      </View>

      <StatusBar style="auto" />
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
