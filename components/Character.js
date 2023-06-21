import React, { useEffect, useRef, useState } from "react";
import { View, Image, Animated, StyleSheet, Dimensions, Modal, Text, Button,
    SafeAreaView,
    ScrollView,
    TextInput,
    ImageBackground,
    Alert,} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const Character = ({ setCharacterPopupOpen, characterPopupOpen }) => {
    const position = useRef(new Animated.Value(0)).current;
    const [flipped, setFlipped] = useState(false);
    const [direction, setDirection] = useState("right");

    useEffect(() => {
        const walkingAnimation = Animated.loop(
            Animated.sequence([
                Animated.timing(position, {
                    toValue: 50,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.delay(500),
                Animated.timing(position, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ])
        );

        walkingAnimation.start();

        return () => {
            walkingAnimation.stop();
        };
    }, []);

    useEffect(() => {
        const listener = position.addListener(({ value }) => {
            if (value === 0) {
                setFlipped(false);
            } else if (value === 50) {
                setFlipped(true);
            }
        });

        return () => {
            position.removeListener(listener);
        };
    }, []);

    return (
        <View style={styles.characterContainer} className="absolute">
            <Animated.View
                style={[
                    styles.character,
                    {
                        transform: [
                            { translateX: position },
                            { scaleX: flipped ? -1 : 1 },
                            { perspective: 1000 }, // For Android devices
                        ],
                    },
                ]}
            >
                <TouchableOpacity
                    onPress={() => {
                        setCharacterPopupOpen(true);
                    }}
                >
                    <Image
                        source={require("../assets/game_images/player.png")}
                        style={styles.characterImage}
                    />
                </TouchableOpacity>
            </Animated.View>
            {/* CHARACTER POPUP */}
            <Modal
                visible={characterPopupOpen}
                animationType="slide"
                transparent={true}
            >
                <View style={styles.popupContainer}>
                    <View style={styles.popupContent} className="p-18">
                        <View className="flex-row">
                            <Image
                                source={require("../assets/game_images/player.png")}
                                className="mt-4 mr-4 w-[70px] h-[70px]"
                            />
                            <View>
                                <View>
                                    <Text className="mt-4 font-bold text-xl">BabyBear380</Text>
                                </View>
                                <Text className="font-semibold mt-3 mr-3">
                                    Senior Software Engineer
                                </Text>
                            </View>
                        </View>
                        <Button
                            title="Close"
                            onPress={() => {
                                console.log("test");
                                setCharacterPopupOpen(false);
                            }}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    characterContainer: {
        alignItems: "center",
        marginTop: screenHeight / 2 + 20,
        marginLeft: screenWidth / 2 - 40,
    },
    character: {
        flexDirection: "row",
        justifyContent: "center",
    },
    characterImage: {
        width: 50,
        height: 50,
    },
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
      }
});

export default Character;
