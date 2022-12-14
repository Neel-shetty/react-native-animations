import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Props } from "../../types";

const HomeScreen = ({ navigation }: Props) => {
  function SpotifyScreenButton() {
    navigation.navigate("SpotifyScreen");
  }
  function HeadspaceScreenButton() {
    navigation.navigate("HeadspaceScreen");
  }
  function TestScreenButton() {
    navigation.navigate("TestScreen");
  }
  function TarotScreenButton() {
    navigation.navigate("Tarot");
  }
  return (
    <ScrollView contentContainerStyle={styles.root}>
      <TouchableOpacity onPress={SpotifyScreenButton}>
        <View style={styles.itemContainer}>
          <Text style={styles.title}>Spotify Header Animation</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={HeadspaceScreenButton}>
        <View style={styles.itemContainer}>
          <Text style={styles.title}>Headspace Play Animation</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={TestScreenButton}>
        <View style={styles.itemContainer}>
          <Text style={styles.title}>Test Screen</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={TarotScreenButton}>
        <View style={styles.itemContainer}>
          <Text style={styles.title}>TarotCard Screen</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default HomeScreen;

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    height: 50,
    width: width - 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "purple",
    margin: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
