import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Canvas, center, Circle, Oval, Skia } from "@shopify/react-native-skia";

const TestScreen = () => {
  // console.log(Skia);
  const { width, height } = Dimensions.get("window");
  return (
    <Canvas style={{ flex: 1 }}>
      <Circle cx={width / 2} cy={height / 2} r={50} color="lightblue" />
      <Oval
        width={150}
        height={300}
        x={120}
        y={20}
        color={"lightblue"}
        strokeWidth={2}
      />
    </Canvas>
  );
};

export default TestScreen;

const styles = StyleSheet.create({});
