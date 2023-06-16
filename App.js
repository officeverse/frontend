import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Rewards from "./screens/Rewards";

export default function App() {
  return (
    // <View className="flex-1 items-center justify-center">
    <View className="flex-1 items-center">
      <Rewards />
      <StatusBar style="auto" />
    </View>
  );
}
