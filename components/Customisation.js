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
import { useSelector } from "react-redux";
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
import Player from "./Player"; // Import Player component
import axios from "axios";

const Customisation = ({
    setCustomisationPopupOpen,
    customisationPopupOpen,
    avatarDetails,
    setAvatarDetails,
}) => {
    const user = useSelector((state) => state.auth.user);
    const sub = user.sub;

    return (
        <View style={styles.Container} className="absolute">
            <TouchableOpacity
                className="absolute bottom-0 right-0 z-10"
                onPress={() => {
                    setCustomisationPopupOpen(true);
                }}
            >
                <FontAwesomeIcon color={"white"} icon={faPen} size={20} />
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
                                onPress={async () => {
                                    console.log("getting details");
                                    let config = {
                                        method: "get",
                                        maxBodyLength: Infinity,
                                        url:
                                            "https://12khg2a8xi.execute-api.ap-south-1.amazonaws.com//users/profile?cognitoSub" +
                                            sub,
                                        headers: {},
                                    };
                                    let userId;
                                    await axios
                                        .request(config)
                                        .then((response) => {
                                            userId = response.data.data.userId;
                                        })
                                        .catch((error) => {
                                            console.log(error);
                                        });
                                    let data = JSON.stringify(avatarDetails);
                                    let config2 = {
                                        method: "patch",
                                        maxBodyLength: Infinity,
                                        url: `https://12khg2a8xi.execute-api.ap-south-1.amazonaws.com//users/${userId}/avatar`,
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                        data: data,
                                    };

                                    axios
                                        .request(config2)
                                        .then((response) => {
                                            console.log(
                                                JSON.stringify(response.data)
                                            );
                                        })
                                        .catch((error) => {
                                            console.log(error);
                                        });

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
