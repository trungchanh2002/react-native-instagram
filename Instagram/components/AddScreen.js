import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function AddScreen({ navigation }) {
  navigation;
  const navigateToScreen02 = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text onPress={navigateToScreen02}>AddScreen</Text>
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
});
