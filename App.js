import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { View, Text, SafeAreaView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import OnboardingStack from "./navigation/OnboardingStack";
import { useState, useEffect, useCallback } from "react";
import { Amplify } from "aws-amplify";
import awsExports from "./src/aws-exports";
import store from "./src/store";
import { Provider, useDispatch } from "react-redux";
import * as SplashScreen from "expo-splash-screen";
import axios from "axios";
import Splash from "./screens/Splash";

Amplify.configure(awsExports);

export default function App() {
    const [isRegistered, setIsRegistered] = useState(true);
    const [appIsReady, setAppIsReady] = useState(false);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return (
            <Provider store={store}>
                <Splash setAppIsReady={setAppIsReady} />
            </Provider>
        );
    }
    return (
        <Provider store={store}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <View className="flex-1" onLayout={onLayoutRootView}>
                    <OnboardingStack
                        isRegistered={isRegistered}
                        setIsRegistered={setIsRegistered}
                    />
                    <StatusBar style="auto" />
                </View>
            </GestureHandlerRootView>
        </Provider>
    );
}
