import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from 'react-native-paper';
import NavBar from "./navigation/NavBar";
import OnboardingStack from "./navigation/OnboardingStack";
import Rewards from "./screens/Rewards";

export default function App() {
  return (
    <PaperProvider>
      <View className="flex-1 ">
        <OnboardingStack />
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}
