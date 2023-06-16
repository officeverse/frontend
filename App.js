import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AiPal from "./screens/AiPal";
import Rewards from "./screens/Rewards";
import Home from "./screens/Home";
import NavBar from "./navigation/NavBar";
import Forum from "./screens/Forum";

export default function App() {
  return (
    // <View className="flex-1 items-center justify-center">

    <View className="flex-1 items-center">
      <AiPal />
      <NavBar/>
      <StatusBar style="auto" />
    </View>
  );
}
