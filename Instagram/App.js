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
import NotificationScreen from "./components/NotificationScreen";
import SignUpScreen from "./components/SignUpScreen";
import LoginScreen from "./components/LoginScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       initialRouteName="LoginScreen"
      >
        <Stack.Screen
          name="Tabs"
          component={TabsComponent}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        <Stack.Screen name="MessScreen" component={MessScreen} />
        <Stack.Screen name="TestScreen" component={TestScreen} />
        <Stack.Screen name="StoryScreen" component={StoryScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function TabsComponent() {
  const [isReelsSelected, setIsReelsSelected] = useState(false);
  return (
    <Tab.Navigator
       initialRouteName="LoginScreen"
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
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
