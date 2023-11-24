import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./components/HomeScreen";
import SearchScreen from "./components/SearchScreen";
import AddScreen from "./components/AddScreen";
import ReelsScreen from "./components/ReelsScreen";
import ProfileScreen from "./components/ProfileScreen";
import MessScreen from "./components/MessScreen";
import StoryScreen from "./components/StoryScreen";
import UpdateScreen from "./components/UpdateScreen";
import CommentScreen from "./components/CommentScreen";

//Test
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      // initialRouteName="StoryScreen"
      >
        <Stack.Screen
          name="Tabs"
          component={TabsComponent}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MessScreen" component={MessScreen} />
        <Stack.Screen name="CommentScreen" component={CommentScreen} />
        <Stack.Screen
          name="StoryScreen"
          component={StoryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UpdateScreen"
          component={UpdateScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabsComponent() {
  return (
    <Tab.Navigator
      // initialRouteName="Profile"
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
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("./assets/account-icon.png")}
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
