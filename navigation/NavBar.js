import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faGift } from "@fortawesome/free-solid-svg-icons/faGift";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons/faDumbbell";
import { faComputer } from "@fortawesome/free-solid-svg-icons/faComputer";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons/faCommentDots";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";

// Screens
import Home from "../screens/Home";
import AiPal from "../screens/AiPal";
import Challenges from "../screens/Challenges";
import Forum from "../screens/Forum";
import Profile from "../screens/Profile";
import Rewards from "../screens/Rewards";

const Tab = createBottomTabNavigator();

export default function NavBar() {
    return (
        // <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "Home",
                        tabBarIcon: ({ size, color }) => (
                            <FontAwesomeIcon
                                icon={faHouse}
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Rewards"
                    component={Rewards}
                    options={{
                        title: "Rewards",
                        tabBarIcon: ({ size, color }) => (
                            <FontAwesomeIcon
                                icon={faGift}
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Challenges"
                    component={Challenges}
                    options={{
                        title: "Challenges",
                        tabBarIcon: ({ size, color }) => (
                            <FontAwesomeIcon
                                icon={faDumbbell}
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="AiPal"
                    component={AiPal}
                    options={{
                        title: "AiPal",
                        tabBarIcon: ({ size, color }) => (
                            <FontAwesomeIcon
                                icon={faComputer}
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Forum"
                    component={Forum}
                    options={{
                        title: "Forum",
                        tabBarIcon: ({ size, color }) => (
                            <FontAwesomeIcon
                                icon={faCommentDots}
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        title: "Profile",
                        tabBarIcon: ({ size, color }) => (
                            <FontAwesomeIcon
                                icon={faUser}
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        // </NavigationContainer>
    );
}
