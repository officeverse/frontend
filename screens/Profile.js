import { StatusBar } from "expo-status-bar";
import { useState, useEffect, useCallback } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    ImageBackground,
    Image,
    ScrollView,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";
import { faCoins } from "@fortawesome/free-solid-svg-icons/faCoins";
import Customisation from "../components/Customisation";
import Player from "../components/Player"; // Import Player component
import { updateUserAttributes } from "../src/features/authSlice";
const avatarDetails = {
    fit: 1,
    glasses: 1,
    hair: 1,
    base: 1,
};
import SignOutButton from "../components/SignOutButton";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";
const image = require("../assets/background.png");

export default function Profile({ navigation }) {
    const [customisationPopupOpen, setCustomisationPopupOpen] = useState(false);
    const [countdown, setCountdown] = useState("");
    const [userData, setUserData] = useState("");
    const [avatarDetails, setAvatarDetails] = useState("");
    const user = useSelector((state) => state.auth.user);
    const sub = user.sub;
    const { username } = user.attributes;
    const pressHandlerPaymentHistory = () => {
        navigation.navigate("PaymentHistory");
    };
    const pressHandlerApplyLeave = () => {
        navigation.navigate("ApplyLeave");
    };
    const dispatch = useDispatch();

    useFocusEffect(
        useCallback(() => {
            console.log("Screen is focused");
            console.log("getting details on profile");
            let config = {
                method: "get",
                maxBodyLength: Infinity,
                url:
                    "https://12khg2a8xi.execute-api.ap-south-1.amazonaws.com//users/profile?cognitoSub" +
                    sub,
                headers: {},
            };

            axios
                .request(config)
                .then((response) => {
                    setUserData(response.data.data);
                    dispatch(updateUserAttributes(response.data.data));
                })
                .catch((error) => {
                    console.log(error);
                });
        }, [])
    );

    useEffect(() => {
        console.log("getting details");
        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url:
                "https://12khg2a8xi.execute-api.ap-south-1.amazonaws.com//users/profile?cognitoSub" +
                sub,
            headers: {},
        };

        axios
            .request(config)
            .then((response) => {
                console.log(response.data);
                setUserData(response.data.data);
                setAvatarDetails(response.data.data.avatar);
                dispatch(updateUserAttributes(response.data.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    useEffect(() => {
        // Calculate the remaining time until the first day of the next month
        const calculateCountdown = () => {
            const now = new Date();
            const year = now.getFullYear();
            const nextMonth = now.getMonth() === 11 ? 0 : now.getMonth() + 1;
            const firstDayNextMonth = new Date(year, nextMonth, 1);
            const timeRemaining = firstDayNextMonth.getTime() - now.getTime();

            // Convert the remaining time to hours, minutes, seconds
            const seconds = Math.floor((timeRemaining / 1000) % 60);
            const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
            const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);

            // Format the countdown string
            const countdownString = `${hours
                .toString()
                .padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

            setCountdown(countdownString);
        };

        // Update the countdown every second
        const interval = setInterval(calculateCountdown, 1000);
        // Cleanup the interval on component unmount
        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <ImageBackground
            source={image}
            resizeMode="cover"
            className=" justify-center"
        >
            <ScrollView className="h-[100vh]">
                <View className="flex-row items-center justify-center mb-5 mt-14">
                    <Text className="text-white text-2xl mb-3 font-semibold">
                        Hello, {username}!
                    </Text>
                    <Text className="mb-2 ml-2">
                        <FontAwesomeIcon
                            color={"white"}
                            icon={faUser}
                            size={32}
                        />
                    </Text>
                </View>
                <View className="flex justify-center items-center">
                    <View>
                        <Customisation
                            setCustomisationPopupOpen={
                                setCustomisationPopupOpen
                            }
                            customisationPopupOpen={customisationPopupOpen}
                            avatarDetails={avatarDetails}
                            setAvatarDetails={setAvatarDetails}
                        />
                        {avatarDetails && (
                            <View className="w-[69px] h-[156px]">
                                <Player
                                    avatarDetails={avatarDetails}
                                    setAvatarDetails={setAvatarDetails}
                                />
                            </View>
                        )}
                    </View>
                    <Text className="text-white my-2 font-semibold">
                        {userData && userData.jobTitle}
                    </Text>
                    {/* Personal Badges */}
                    <ScrollView
                        contentOffset={{ x: 20, y: 0 }}
                        className="flex-row w-3/4"
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View className="bg-red-700 px-2 py-1 rounded-md mx-2">
                            <Text className="text-xs text-red-50 font-bold">
                                Veteran
                            </Text>
                        </View>
                        <View className="bg-orange-700 px-2 py-1 rounded-md mx-2">
                            <Text className="text-xs text-red-50 font-bold">
                                Project MVP
                            </Text>
                        </View>
                        <View className="bg-green-700 px-2 py-1 rounded-md mx-2">
                            <Text className="text-xs text-red-50 font-bold">
                                Certified Scrum Master
                            </Text>
                        </View>
                        <View className="bg-blue-700 px-2 py-1 rounded-md mx-2">
                            <Text className="text-xs text-red-50 font-bold">
                                Mentor
                            </Text>
                        </View>
                    </ScrollView>
                    {/* EXP and Coins */}
                    <Text className="text-white my-2 font-bold">EXP</Text>
                    <View className="h-4 bg-slate-100 rounded-full w-1/2">
                        <View className="h-4 bg-blue-400 rounded-full w-2/5" />
                    </View>
                    <TouchableOpacity
                        className="flex justify-center items-center mx-2 my-2"
                        onPress={() => {
                            navigation.navigate("Rewards");
                        }}
                    >
                        <View className="flex-row">
                            <FontAwesomeIcon
                                color={"white"}
                                icon={faCoins}
                                size={15}
                            />
                            <Text className="text-white mx-2 font-bold">
                                {userData && userData.coins} coins
                            </Text>
                        </View>

                        <Text className="text-white mx-2 text-xs">
                            Exchange for rewards
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={pressHandlerPaymentHistory}
                        className="bg-white items-center justify-center p-3 rounded-lg w-3/4 my-2 mx-auto"
                    >
                        <Text className="text-2xl font-semibold mb-2 p-2">
                            Paycheck in
                        </Text>
                        <Text className="text-4xl font-semibold text-blue-400">
                            {countdown}
                        </Text>
                        <Text className="text-sm  text-gray-600">
                            View History
                        </Text>
                    </TouchableOpacity>
                    <View className="flex-row w-3/4 justify-evenly mx-auto ">
                        <TouchableOpacity
                            onPress={pressHandlerApplyLeave}
                            className="bg-white items-center justify-center p-3 rounded-lg w-[50%] mx-2 m-4"
                        >
                            <Text className="text-2xl font-semibold mb-2">
                                MCs
                            </Text>
                            <Text className="text-4xl font-semibold text-blue-400">
                                {userData && userData.numMCSRemaining}
                            </Text>
                            <Text className="text-base font-semibold">
                                remaining
                            </Text>
                            <Text className="text-sm  text-gray-600">
                                Apply Now
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={pressHandlerApplyLeave}
                            className="bg-white items-center justify-center p-3 rounded-lg w-[50%] mx-2 m-4"
                        >
                            <Text className="text-2xl font-semibold mb-2">
                                Off Days
                            </Text>
                            <Text className="text-4xl font-semibold text-blue-400">
                                {userData && userData.numLeavesRemaining}
                            </Text>
                            <Text className="text-base font-semibold">
                                remaining
                            </Text>
                            <Text className="text-sm  text-gray-600">
                                Apply Now
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View className="mb-10">
                        <SignOutButton navigation={navigation} />
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}
