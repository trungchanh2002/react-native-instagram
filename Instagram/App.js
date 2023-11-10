import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./views/HomeScreen";

function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text>Search Screen</Text>
    </View>
  );
}

function AddScreen() {
  return (
    <View style={styles.container}>
      <Text>AddScreen</Text>
    </View>
  );
}
function ReelsScreen() {
  return (
    <View style={styles.container}>
      <Text>ReelsScreen</Text>
    </View>
  );
}

function AccountScreen() {
  return (
    <View style={styles.container}>
      <Text>Account Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require("./assets/home-icon.png")}
                style={{ tintColor: color, width: size, height: size }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require("./assets/search-icon.png")}
                style={{ tintColor: color, width: size, height: size }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Add"
          component={AddScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require("./assets/add-icon.png")}
                style={{ tintColor: color, width: size, height: size }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Reels"
          component={ReelsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require("./assets/reels-icon.png")}
                style={{ tintColor: color, width: size, height: size }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require("./assets/Name=Mentions, State=default, Dark=no.png")}
                style={{ tintColor: color, width: size, height: size }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
