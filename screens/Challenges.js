import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    FlatList,
    TouchableOpacity,
    Modal,
    Image,
    ImageBackground,
} from "react-native";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons/faDumbbell";
import axios from "axios";

const image = require("../assets/background.png");
const challengesUrl =
    "https://12khg2a8xi.execute-api.ap-south-1.amazonaws.com/challenges?page=1&limit=100";

export default function Challenges() {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [challenges, setChallenges] = useState([]);

    const getChallenges = () => {
        axios
            .get(challengesUrl)
            .then((response) => {
                setChallenges([...response.data.data.challenges]);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        console.log("Loading challenges");
        getChallenges();
    }, []);

    const renderItem = ({ item }) => {
        const openPopup = () => {
            setPopupVisible(item.id);
        };

        const closePopup = () => {
            setPopupVisible(null);
        };

        const isPopupOpen = isPopupVisible === item.id;

        return (
            <TouchableOpacity onPress={openPopup}>
                <View
                    className="bg-white rounded-xl w-full max-w-xs mx-auto my-4"
                    style={[
                        {
                            shadowColor: "black",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                        },
                    ]}
                >
                    <Image
                        source={{ uri: item.imageDataUrl }}
                        className="w-full h-64 rounded-t-xl"
                        resizeMode="cover"
                    />

                    <View className="p-6">
                        <Text className="text-slate-900 text-lg font-bold">
                            {item.name}
                        </Text>
                        <Text className="mt-1 text-sm text-stone-400">
                            + {item.reward} EXP
                        </Text>
                    </View>
                </View>

                <Modal
                    visible={isPopupOpen}
                    animationType="slide"
                    onRequestClose={closePopup}
                >
                    {/* Content of the pop-up */}
                    <ImageBackground
                        source={{ uri: item.imageDataUrl }}
                        resizeMode="cover"
                        className=" justify-center"
                    >
                        <View className="flex flex-col mx-auto h-[100vh] px-10">
                            <View className="my-auto bg-slate-800 py-5 rounded-xl">
                                <Text className="text-center text-blue-200 px-5 text-2xl font-bold">
                                    {item.name}
                                </Text>
                                <Text className="text-white text-base text-center my-2 px-10">
                                    {item.description}
                                </Text>
                                <TouchableOpacity
                                    className="py-4 rounded-lg bg-blue-100 w-[150px] mx-auto mt-4"
                                    onPress={() => {}}
                                >
                                    <Text className="text-black font-semibold text-center">
                                        Start Challenge
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={closePopup}
                                    className="mt-4"
                                >
                                    <Text className="text-blue-200 font-semibold text-center">
                                        Close
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </Modal>
            </TouchableOpacity>
        );
    };

    return (
        <ImageBackground
            source={image}
            resizeMode="cover"
            className=" justify-center"
        >
            <SafeAreaView className="h-[100vh]">
                <View className="flex-row items-center justify-center mt-8">
                    <Text className="text-3xl mb-3 font-semibold text-white">
                        Challenges
                    </Text>
                    <Text className="mb-2 ml-2">
                        <FontAwesomeIcon
                            icon={faDumbbell}
                            size={32}
                            color="white"
                        />
                    </Text>
                </View>
                <View className="flex-row items-center justify-center mb-3 ">
                    <Text className="text-white">
                        Gain EXP and BBC coins today!
                    </Text>
                </View>
                <FlatList
                    className="mb-[55px]"
                    data={challenges}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}

                    // extraData={selectedId}
                />
            </SafeAreaView>
        </ImageBackground>
    );
}
