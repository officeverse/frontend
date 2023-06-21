import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import OnboardingStack from './navigation/OnboardingStack';
import { useState } from "react";
import { Amplify } from 'aws-amplify';
import awsExports from './src/aws-exports';
import store from './src/store';
import { Provider } from 'react-redux';

Amplify.configure(awsExports);

export default function App() {
    const [isRegistered, setIsRegistered] = useState(true);
    return (
    <Provider store={store}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <View className="flex-1">
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
