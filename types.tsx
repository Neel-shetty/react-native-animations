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
};

export type Props = NativeStackScreenProps<
  RootNativeStackParamList,
  "HomeScreen"
>;

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootNativeStackParamList,
  "HomeScreen"
>;

export type HomeScreenRouteProp = Props["navigation"];

export type RootNativeStackScreenProps<
  Screen extends keyof RootNativeStackParamList
> = NativeStackScreenProps<RootNativeStackParamList, Screen>;
