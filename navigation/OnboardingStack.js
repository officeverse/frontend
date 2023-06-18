import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { createAppContainer } from "react-navigation";

import Login from "../onboarding/Login";
import StartTour from "../onboarding/StartTour";
import OptionA from "../onboarding/OptionA";
import Values from "../onboarding/Values";
import OptionB from "../onboarding/OptionB";
import Benefits from "../onboarding/Benefits";
import OptionC from "../onboarding/OptionC";
import Team from "../onboarding/Team";
import EndTour from "../onboarding/EndTour";
import NavBar from "./NavBar";

const Stack = createNativeStackNavigator();

export default function OnboardingStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="StartTour" component={StartTour}/>
                <Stack.Screen name="OptionA" component={OptionA}/>
                <Stack.Screen name="Values" component={Values}/>
                <Stack.Screen name="OptionB" component={OptionB}/>
                <Stack.Screen name="Benefits" component={Benefits}/>
                <Stack.Screen name="OptionC" component={OptionC}/>
                <Stack.Screen name="Team" component={Team}/>
                <Stack.Screen name="EndTour" component={EndTour}/>
                <Stack.Screen name="NavBar" component={NavBar}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
