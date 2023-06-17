import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NavBar from "./navigation/NavBar";
import EndTour from "./onboarding/EndTour";
import OptionC from "./onboarding/OptionC";
import Profile from "./screens/Profile";

export default function App() {
  return (
    // <View className="flex-1 items-center justify-center">
    <View className="flex-1 ">
      {/* <OptionC /> */}
      <Profile />
      <StatusBar style="auto" />
    </View>
  );
}
