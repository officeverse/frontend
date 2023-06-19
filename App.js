import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NavBar from "./navigation/NavBar";
import OnboardingStack from "./navigation/OnboardingStack";
import Rewards from "./screens/Rewards";
import { useState } from "react";

export default function App() {
    const [isRegistered, setIsRegistered] = useState(true);
    return (
        <View className="flex-1 ">
            <OnboardingStack
                isRegistered={isRegistered}
                setIsRegistered={setIsRegistered}
            />
            <StatusBar style="auto" />
        </View>
    );
}
