import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Rewards from "./screens/Rewards";
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
