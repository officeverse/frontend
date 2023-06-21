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
import Player from './Player'; // Import Player component


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
                            <Player avatarDetails={avatarDetails} />
                            {["base", "fit", "glasses", "hair"].map((property, index) => (
                                <View key={index}>
                                    <Button
                                        title={`Change ${property}`}
                                        onPress={() => {
                                            setAvatarDetails(prevState => ({
                                                ...prevState,
                                                [property]: prevState[property] % 3 + 1,
                                            }));
                                        }}
                                    />
                                </View>
                            ))}
                            
                            <Button
                                title="Save and Close"
                                onPress={() => {
                                console.log("Avatar details:", avatarDetails);
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
});

export default Customisation;