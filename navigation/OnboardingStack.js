import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import OnboardingMain from "../onboarding/OnboardingMain";
import StartTour from "../onboarding/StartTour";
import OptionA from "../onboarding/OptionA";
import Values from "../onboarding/Values";
import OptionB from "../onboarding/OptionB";
import Benefits from "../onboarding/Benefits";
import OptionC from "../onboarding/OptionC";
import Team from "../onboarding/Team";
import EndTour from "../onboarding/EndTour";
import NavBar from "./NavBar";
import PaymentHistory from "../screens/PaymentHistory";
import ApplyLeave from "../screens/ApplyLeave";
import Leaderboard from "../screens/Leaderboard";
import PreSignIn from "../screens/PreSignIn";
import SignUp from "../screens/SignUp";
import SignUpConfirmEmail from "../screens/SignUpConfirmEmail";
import Home from "../screens/Home";
import CameraScan from "../components/CameraScan";

const Stack = createNativeStackNavigator();

export default function OnboardingStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="PreSignIn" component={PreSignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen
          name="SignUpConfirmEmail"
          component={SignUpConfirmEmail}
        />
        <Stack.Screen name="OnboardingMain" component={OnboardingMain} />
        <Stack.Screen name="StartTour" component={StartTour} />
        <Stack.Screen name="OptionA" component={OptionA} />
        <Stack.Screen name="Values" component={Values} />
        <Stack.Screen name="OptionB" component={OptionB} />
        <Stack.Screen name="Benefits" component={Benefits} />
        <Stack.Screen name="OptionC" component={OptionC} />
        <Stack.Screen name="Team" component={Team} />
        <Stack.Screen name="EndTour" component={EndTour} />
        <Stack.Screen name="NavBar" component={NavBar} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="PaymentHistory" component={PaymentHistory} />
        <Stack.Screen name="ApplyLeave" component={ApplyLeave} />
        <Stack.Screen name="Leaderboard" component={Leaderboard} />
        <Stack.Screen name="CameraScan" component={CameraScan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
