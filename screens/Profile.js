import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
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

const image = require("../assets/background.png");

export default function Profile({navigation}) {
    const [countdown, setCountdown] = useState("");
    const pressHandlerPaymentHistory = () => {
        navigation.navigate("PaymentHistory");
      };
    const pressHandlerApplyLeave = () => {
    navigation.navigate("ApplyLeave");
    };
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
            <SafeAreaView className="h-[100vh]">
                <View className="flex-row items-center justify-center mb-5 mt-14">
                    <Text className="text-white text-2xl mb-3 font-semibold">
                        Hello, Babybear380!
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
                        <TouchableOpacity className="absolute bottom-0 right-0 z-10">
                            <FontAwesomeIcon
                                color={"white"}
                                icon={faPen}
                                size={15}
                            />
                        </TouchableOpacity>
                        <Image
                            className="w-32 h-32 rounded-full mx-auto"
                            source={{
                                uri: "https://images.unsplash.com/photo-1676824452052-b030b9026b5b",
                            }}
                        />
                    </View>
                    <Text className="text-white my-2 font-semibold">
                        Senior Software Engineer
                    </Text>
                    {/* Personal Badges */}
                    <ScrollView
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
                    <Text className="text-white my-2">EXP</Text>
                    <View className="h-4 bg-slate-100 rounded-full w-1/2">
                        <View className="h-4 bg-blue-400 rounded-full w-2/5" />
                    </View>
                    <TouchableOpacity className="flex justify-center items-center mx-2 my-2">
                        <View className="flex-row">
                            <FontAwesomeIcon
                                color={"white"}
                                icon={faCoins}
                                size={15}
                            />
                            <Text className="text-white mx-2">150 coins</Text>
                        </View>

                        <Text className="text-white mx-2 text-xs">
                            Exchange for rewards
                        </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <TouchableOpacity onPress={pressHandlerPaymentHistory} className="bg-white items-center justify-center p-3 rounded-lg w-3/4 my-2 mx-auto">
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
                    <View className="flex-row w-3/4 justify-evenly mx-auto">
                        <TouchableOpacity onPress={pressHandlerApplyLeave} className="bg-white items-center justify-center p-3 rounded-lg w-[50%] mx-2 m-4">
                            <Text className="text-2xl font-semibold mb-2">
                                MCs
                            </Text>
                            <Text className="text-4xl font-semibold text-blue-400">
                                3
                            </Text>
                            <Text className="text-base font-semibold">
                                remaining
                            </Text>
                            <Text className="text-sm  text-gray-600">
                                Apply Now
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={pressHandlerApplyLeave} className="bg-white items-center justify-center p-3 rounded-lg w-[50%] mx-2 m-4">
                            <Text className="text-2xl font-semibold mb-2">
                                Off Days
                            </Text>
                            <Text className="text-4xl font-semibold text-blue-400">
                                2
                            </Text>
                            <Text className="text-base font-semibold">
                                remaining
                            </Text>
                            <Text className="text-sm  text-gray-600">
                                Apply Now
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
}
