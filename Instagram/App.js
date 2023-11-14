import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./components/HomeScreen";
import SearchScreen from "./components/SearchScreen";
import AddScreen from "./components/AddScreen";
import ReelsScreen from "./components/ReelsScreen";
import AccountScreen from "./components/AccountScreen";
import MessScreen from "./components/MessScreen";
import TestScreen from "./components/TestScreen";
import StoryScreen from "./components/StoryScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      // initialRouteName="TestScreen"
      >
        <Stack.Screen
          name="Tabs"
          component={TabsComponent}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MessScreen" component={MessScreen} />
        <Stack.Screen name="TestScreen" component={TestScreen} />
        <Stack.Screen name="StoryScreen" component={StoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabsComponent() {
  const [isReelsSelected, setIsReelsSelected] = useState(false);
  return (
    <Tab.Navigator
      // initialRouteName="Home"
      screenOptions={{ headerShown: false }}
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
              style={{
                tintColor: color,
                width: size,
                height: size,
              }}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
