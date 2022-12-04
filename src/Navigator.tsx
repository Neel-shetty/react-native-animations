import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { RootNativeStackParamList } from "../types";
import SpotifyScreen from "./screens/SpotifyHeader/SpotifyScreen";
import HeadspaceScreen from "./screens/Headspace/HeadspaceScreen";
import TestScreen from "./screens/TestScreen";
import { Tarot } from "./screens/Tarot";

const Stack = createNativeStackNavigator<RootNativeStackParamList>();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "Your Animations", headerShown: true }}
        />
        <Stack.Screen name="SpotifyScreen" component={SpotifyScreen} />
        <Stack.Screen name="HeadspaceScreen" component={HeadspaceScreen} />
        <Stack.Screen name="TestScreen" component={TestScreen} />
        <Stack.Screen name="Tarot" component={Tarot}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
