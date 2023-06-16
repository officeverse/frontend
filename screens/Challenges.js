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
} from "react-native";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons/faDumbbell";

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
            <View>
                <TouchableOpacity
                    onPress={openPopup}
                    className=" bg-blue-100 items-center justify-center mb-6 px-5 py-2 rounded-lg"
                >
                    <Text className="text-lg mb-1 font-medium">
                        {item.title}
                    </Text>
                    <Text className="text-xs text-gray-600">
                        + {item.points} EXP
                    </Text>
                </TouchableOpacity>
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
            </View>
        );
    };

    return (
        <SafeAreaView className="">
            <View className="flex-row items-center justify-center mt-8">
                <Text className="text-3xl mb-3 font-semibold">Challenges</Text>
                <Text className="mb-2 ml-2">
                    <FontAwesomeIcon icon={faDumbbell} size={32} />
                </Text>
            </View>

            <View className="flex-row items-center justify-center mb-3">
                <Text>Gain EXP and BBC coins today!</Text>
            </View>

            <FlatList
                data={challenges}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}

                // extraData={selectedId}
            />
        </SafeAreaView>
    );
}
