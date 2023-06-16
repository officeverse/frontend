import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Challenges from "./screens/Challenges";

export default function App() {
  return (
    // <View className="flex-1 items-center justify-center">
    <View className="flex-1 items-center">
      <Challenges />
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
