import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Rewards from "./screens/Rewards";
import Home from "./screens/Home";
import NavBar from "./navigation/NavBar";

export default function App() {
  return (
    // <View className="flex-1 items-center justify-center">
    // <View className="flex-1 items-center">
    //   <Rewards />
    //   <StatusBar style="auto" />
    // </View>
    <NavBar/>
  );
}
