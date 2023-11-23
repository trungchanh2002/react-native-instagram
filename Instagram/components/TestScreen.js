import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function TestScreen({navigation}) {
  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      // In thông báo khi chuyển màn hình
      alert("Đã chuyển màn");
      // Hoặc sử dụng hàm in thông báo khác
    });

    return unsubscribe;
  }, [navigation]);

  const goMessScreen = () => {
    navigation.navigate("MessScreen");
  };

  return (
    <View style={styles.container}>
      <Text onPress={goMessScreen}>Open up App.js to start working on your app!</Text>
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
});
