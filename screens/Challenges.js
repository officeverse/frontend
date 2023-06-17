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
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons/faDumbbell";

const image = require("../assets/background.png");

export default function Challenges() {
    const challenges = [
        { id: 1, title: "Embark on an upskilling course", points: 100 },
        { id: 2, title: "Completed XXX", points: 50 },
        { id: 3, title: "Helped with XXX", points: 25 },
        { id: 4, title: "Managed to XXX", points: 25 },
        { id: 5, title: "Finished XXX", points: 30 },
        { id: 6, title: "Finished XXX", points: 30 },
        { id: 7, title: "Finished XXX", points: 30 },
        { id: 8, title: "Finished XXX", points: 30 },
        { id: 9, title: "Managed to XXX", points: 25 },
        { id: 10, title: "Managed to XXX", points: 25 },
    ];

    const [isPopupVisible, setPopupVisible] = useState(false);

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
                        source={require("../assets/olena-sergienko-dIMJWLx1YbE-unsplash.jpg")}
                        className="w-full h-64 rounded-t-xl"
                        resizeMode="cover"
                    />
                    <View className="p-6">
                        <Text className="text-slate-900 text-lg font-bold">
                            {item.title}
                        </Text>
                        <Text className="text-xs text-stone-400">
                            + {item.points} EXP
                        </Text>
                    </View>
                </View>
                <Modal
                    visible={isPopupOpen}
                    animationType="slide"
                    onRequestClose={closePopup}
                >
                    {/* Content of the pop-up */}
                    <View className="flex flex-col my-auto mx-auto">
                        <Text className="text-2xl">{item.title}</Text>
                        <TouchableOpacity onPress={closePopup}>
                            <Text>Close</Text>
                        </TouchableOpacity>
                    </View>
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
