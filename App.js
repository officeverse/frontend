import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AiPal from "./screens/AiPal";

export default function App() {
  return (
    // <View className="flex-1 items-center justify-center">
    <View className="flex-1 items-center">
      <AiPal />
      <StatusBar style="auto" />
    </View>
  );
}
