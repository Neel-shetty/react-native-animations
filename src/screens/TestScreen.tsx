import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Canvas,
  center,
  Circle,
  Oval,
  Path,
  Skia,
} from "@shopify/react-native-skia";

const TestScreen = () => {
  const path = Skia.Path.Make();
  path.moveTo(128, 0);
  path.lineTo(168, 80);
  path.lineTo(256, 93);
  path.lineTo(192, 155);
  path.lineTo(207, 244);
  path.lineTo(128, 202);
  path.lineTo(49, 244);
  path.lineTo(64, 155);
  path.lineTo(0, 93);
  path.lineTo(88, 80);
  path.lineTo(128, 0);
  path.close();

  const { width, height } = Dimensions.get("window");
  return (
    <Canvas style={{ flex: 1 }}>
      {/* <Circle cx={width / 2} cy={height / 2} r={50} color="lightblue" />
      <Oval
        width={150}
        height={300}
        x={120}
        y={20}
        color={"lightblue"}
        strokeWidth={2}
      /> */}
      <Oval width={50} height={160} x={175} y={180} color={"brown"} />
      <Circle cx={230} cy={350} r={30} color={"brown"} />
      <Circle cx={170} cy={350} r={30} color={"brown"} />
    </Canvas>
  );
};

export default TestScreen;

const styles = StyleSheet.create({});
