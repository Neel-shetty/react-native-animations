import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { RootNativeStackParamList } from "../types";
import SpotifyScreen from "./screens/SpotifyHeader/SpotifyScreen";
import HeadspaceScreen from "./screens/Headspace/HeadspaceScreen";
import TestScreen from "./screens/TestScreen";

const Stack = createNativeStackNavigator<RootNativeStackParamList>();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "Your Animations" }}
        />
        <Stack.Screen
          name="SpotifyScreen"
          component={SpotifyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="HeadspaceScreen" component={HeadspaceScreen} />
        <Stack.Screen
          name="TestScreen"
          component={TestScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
