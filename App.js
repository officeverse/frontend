import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Forum from "./screens/Forum";

export default function App() {
  return (
    // <View className="flex-1 items-center justify-center">
    <View className="flex-1 items-center">
      <Forum />
      <StatusBar style="auto" />
    </View>
  );
}
