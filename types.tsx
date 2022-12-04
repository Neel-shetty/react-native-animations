import type {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootNativeStackParamList {}
  }
}

export type RootNativeStackParamList = {
  HomeScreen: undefined;
  SpotifyScreen: undefined;
  HeadspaceScreen: undefined;
  TestScreen: undefined;
};

export type Props = NativeStackScreenProps<
  RootNativeStackParamList
  // "HomeScreen",
  // "SpotifyScreen",
  // "HeadspaceScreen"
>;

// export type HomeScreenNavigationProp = NativeStackNavigationProp<
//   RootNativeStackParamList,
//   "HomeScreen"
// >;

export type HomeScreenNavigationProp = Props["navigation"];

export type HomeScreenRouteProp = Props["route"];

export type RootNativeStackScreenProps<
  Screen extends keyof RootNativeStackParamList
> = NativeStackScreenProps<RootNativeStackParamList, Screen>;
