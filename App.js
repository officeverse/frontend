import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import OnboardingStack from './navigation/OnboardingStack';
import { Amplify } from 'aws-amplify';
import awsExports from './src/aws-exports';

Amplify.configure(awsExports);

export default function App() {
  return (
    <View className="flex-1 ">
      <OnboardingStack />
      <StatusBar style="auto" />
    </View>
  );
}
