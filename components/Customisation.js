import React, { useEffect, useRef, useState } from "react";
import { View, Image, Animated, StyleSheet, Dimensions, Modal, Text, Button, TouchableOpacity,
    SafeAreaView,
    ScrollView,
    TextInput,
    ImageBackground,
    Alert,} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const imageMapping = {
    fit1: require("../assets/game_images/male_player/fit1.png"),
    fit2: require("../assets/game_images/male_player/fit2.png"),
    fit3: require("../assets/game_images/male_player/fit3.png"),
    glasses1: require("../assets/game_images/male_player/glasses1.png"),
    glasses2: require("../assets/game_images/male_player/glasses2.png"),
    hair1: require("../assets/game_images/male_player/hair1.png"),
    hair2: require("../assets/game_images/male_player/hair2.png"),
    hair3: require("../assets/game_images/male_player/hair3.png"),
    base1: require("../assets/game_images/male_player/base1.png"),
    base2: require("../assets/game_images/male_player/base2.png"),

  };

const yOffsetMapping = {
    fit: -37,
    glasses: -74,
    hair: -112,
    base: 0,
};
const Customisation = ({ setCustomisationPopupOpen, customisationPopupOpen }) => {
    const [avatarDetails, setAvatarDetails] = useState({
        fit: 1,
        glasses: 1,
        hair: 1,
        base: 1,
    });

    return (
        <View style={styles.Container} className="absolute">
            <TouchableOpacity className="absolute bottom-0 right-0 z-10"
                onPress={() => {
                    setCustomisationPopupOpen(true);
                }}
            >
                <FontAwesomeIcon
                    color={"white"}
                    icon={faPen}
                    size={15}
                />
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
                                <Text className="mt-4 font-bold text-xl">Customise Your Avatar</Text>
                            </View>

                            {["base", "fit", "glasses", "hair"].map((property, index) => (
                                <View key={index}>
                                    <Button
                                        title={`${property}->`}
                                        onPress={() => {
                                            setAvatarDetails(prevState => ({
                                                ...prevState,
                                                [property]: prevState[property] % 3 + 1,
                                            }));
                                        }}
                                    />
                                    <View style={[styles.avatarImageContainer, {top: yOffsetMapping[property]}]}>
                                        <Image
                                            source={imageMapping[`${property}${avatarDetails[property]}`]}
                                            style={styles.avatarImage}
                                        />
                                    </View>
                                </View>
                            ))}
                            
                            <Button
                                title="Save and Close"
                                onPress={() => {
                                console.log("test");
                                setCustomisationPopupOpen(false);
                                }}
                            />
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
        padding: 16,
        borderRadius: 8,
    },
    avatarImageContainer: {
        position: 'absolute', // set position as absolute
        zIndex: 10, // for iOS, you may also need to set the zIndex
        top: 0, // adjust the position as you need
        left: 0, // adjust the position as you need
    },
    avatarImage: {
        width: 69, 
        height: 156,
    },
});

export default Customisation;