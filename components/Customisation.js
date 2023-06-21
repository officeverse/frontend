import React, { useEffect, useRef, useState } from "react";
import {
    View,
    Image,
    Animated,
    StyleSheet,
    Dimensions,
    Modal,
    Text,
    Button,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    TextInput,
    ImageBackground,
    Alert,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons/faCaretLeft";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons/faCaretRight";
import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
import Player from "./Player"; // Import Player component

const Customisation = ({
    setCustomisationPopupOpen,
    customisationPopupOpen,
}) => {
    const [avatarDetails, setAvatarDetails] = useState({
        fit: 1,
        glasses: 1,
        hair: 1,
        base: 1,
    });

    return (
        <View style={styles.Container} className="absolute">
            <TouchableOpacity
                className="absolute bottom-0 right-0 z-10"
                onPress={() => {
                    setCustomisationPopupOpen(true);
                }}
            >
                <FontAwesomeIcon color={"white"} icon={faPen} size={15} />
            </TouchableOpacity>
            {/* CHARACTER POPUP */}
            <Modal
                visible={customisationPopupOpen}
                animationType="slide"
                transparent={true}
            >
                <View style={styles.popupContainer}>
                    <View style={styles.popupContent} className="p-18">
                        <View>
                            <View>
                                <Text className="my-4 font-bold text-xl">
                                    Customise Your Avatar
                                </Text>
                            </View>
                            <View className="flex flex-row">
                                <View>
                                    <Player avatarDetails={avatarDetails} />
                                </View>
                                <View className="ml-[90px]">
                                    {["base", "fit", "glasses", "hair"].map(
                                        (property, index) => (
                                            <View
                                                key={index}
                                                className="flex flex-row justify-between items-center"
                                            >
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        setAvatarDetails(
                                                            (prevState) => ({
                                                                ...prevState,
                                                                [property]:
                                                                    prevState[
                                                                        property
                                                                    ] > 1
                                                                        ? prevState[
                                                                              property
                                                                          ] - 1
                                                                        : 3,
                                                            })
                                                        );
                                                    }}
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faCaretLeft}
                                                        size={40}
                                                    />
                                                </TouchableOpacity>
                                                <View className="p-3 rounded-md flex items-center my-2">
                                                    <Text className="font-bold">{`${property}`}</Text>
                                                </View>
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        setAvatarDetails(
                                                            (prevState) => ({
                                                                ...prevState,
                                                                [property]:
                                                                    (prevState[
                                                                        property
                                                                    ] %
                                                                        3) +
                                                                    1,
                                                            })
                                                        );
                                                    }}
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faCaretRight}
                                                        size={40}
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    )}
                                </View>
                            </View>
                            <TouchableOpacity
                                className="my-4 bg-green-500 p-3 rounded-md items-center"
                                onPress={() => {
                                    console.log(
                                        "Avatar details:",
                                        avatarDetails
                                    );
                                    setCustomisationPopupOpen(false);
                                }}
                            >
                                <Text className="text-white font-bold">
                                    Save and Close
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    popupContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    popupContent: {
        backgroundColor: "white",
        padding: 50,
        borderRadius: 8,
    },
});

export default Customisation;
