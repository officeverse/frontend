import { createStackNavigator } from 'react-navigation-stack';
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

const screens = {
    Login: {
        screen: Login
    }, 
    StartTour: {
        screen: StartTour
    },
    OptionA: {
        screen: OptionA
    },
    Values: {
        screen: Values
    },
    OptionB: {
        screen: OptionB
    },
    Benefits: {
        screen: Benefits
    },
    OptionC: {
        screen: OptionC
    },
    Team: {
        screen: Team
    },
    EndTour: {
        screen: EndTour
    },
}

const OnboardingStack = createStackNavigator(screens);

export default createAppContainer(OnboardingStack);
