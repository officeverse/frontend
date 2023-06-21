import React, { useState, useRef } from "react";
import {
    View,
    SafeAreaView,
    ImageBackground,
    ScrollView,
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    Button,
} from "react-native";
import Modal from "react-native-modal";
import {
    PanGestureHandler,
    State,
    PanGestureHandlerStateChangeEvent,
} from "react-native-gesture-handler";
import Animated, {
    Value,
    event,
    block,
    set,
    cond,
    eq,
    and,
    not,
    greaterThan,
    lessThan,
    add,
    useCode,
    call,
} from "react-native-reanimated";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons/faMedal";

import Character from "../components/Character";
import { faCamera } from "@fortawesome/free-solid-svg-icons/faCamera";

import Player from "../components/Player"; // Import Player component
const avatarDetails = {
    fit: 1,
    glasses: 1,
    hair: 1,
    base: 1,
};

const image = require("../assets/landscape_populated.png");

const imageWidth = 900;
const imageHeight = 1200;

// Get the screen dimensions
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const Leaderboard = ({ navigation }) => {
    const [selectedPlayer, setSelectedPlayer] = useState(null); // for the inner modal
    const [characterPopupOpen, setCharacterPopupOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const openModal = () => setVisible(true);
    const closeModal = () => setVisible(false);

    const offsetX = useRef(new Value(-(imageWidth - screenWidth) / 2)).current;
    const offsetY = useRef(
        new Value(-(imageHeight - screenHeight) / 2)
    ).current;
    const translationX = useRef(new Value(0)).current;
    const translationY = useRef(new Value(0)).current;
    const gestureState = useRef(new Value(-1)).current;

    const translateX = cond(
        and(
            greaterThan(
                add(translationX, offsetX),
                -(imageWidth - screenWidth)
            ),
            lessThan(add(translationX, offsetX), 0)
        ),
        add(translationX, offsetX),
        cond(
            lessThan(add(translationX, offsetX), -(imageWidth - screenWidth)),
            -(imageWidth - screenWidth),
            0
        )
    );

    const translateY = cond(
        and(
            greaterThan(
                add(translationY, offsetY),
                -(imageHeight - screenHeight)
            ),
            lessThan(add(translationY, offsetY), 0)
        ),
        add(translationY, offsetY),
        cond(
            lessThan(add(translationY, offsetY), -(imageHeight - screenHeight)),
            -(imageHeight - screenHeight),
            0
        )
    );

    useCode(() => {
        return block([
            cond(
                eq(gestureState, State.END),
                [set(offsetX, translateX), set(offsetY, translateY)],
                [set(offsetX, offsetX), set(offsetY, offsetY)]
            ),
        ]);
    }, []);

    const onGestureEvent = event(
        [
            {
                nativeEvent: {
                    translationX: translationX,
                    translationY: translationY,
                    state: gestureState,
                },
            },
        ],
        { useNativeDriver: true }
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.buttonContainer}>
                <View className="">
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("CameraScan");
                        }}
                        className="bg-slate-900 p-2 rounded-xl"
                    >
                        <View className="justify-center mx-auto">
                            <FontAwesomeIcon
                                color={"white"}
                                icon={faCamera}
                                size={24}
                            />
                        </View>
                        <Text className="text-center text-white text-base font-normal mx-2">
                            Friends Scanner
                        </Text>
                    </TouchableOpacity>
                    <View className="flex-row justify-between">
                        <TouchableOpacity
                            className="bg-slate-900 mt-2 p-2 rounded-lg w-[44vw]"
                            onPress={() => navigation.navigate("NavBar")}
                        >
                            <Text className="text-white text-center text-base">
                                Home
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className="bg-slate-900 mt-2 p-2 rounded-lg w-[44vw]"
                            onPress={openModal}
                        >
                            <Text className="text-white text-center text-base">
                                Leaderboard
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <PanGestureHandler
                maxPointers={1}
                onGestureEvent={onGestureEvent}
                onHandlerStateChange={onGestureEvent}
            >
                <Animated.View
                    style={{
                        flex: 1,
                        transform: [
                            { translateX: translateX },
                            { translateY: translateY },
                        ],
                    }}
                >
                    <ImageBackground
                        source={image}
                        style={{ width: imageWidth, height: imageHeight }}
                    >
                        <Character
                            setCharacterPopupOpen={setCharacterPopupOpen}
                            characterPopupOpen={characterPopupOpen}
                        />
                    </ImageBackground>
                </Animated.View>
            </PanGestureHandler>
            <Modal
                isVisible={visible}
                style={styles.modalContent}
                className="my-auto"
            >
                <ScrollView style={styles.scrollContent}>
                    {players.map((player, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.item}
                            onPress={() => {
                                setSelectedPlayer(player);
                                console.log(player);
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faMedal}
                                size={30}
                                color={
                                    index === 0
                                        ? "gold"
                                        : index === 1
                                        ? "silver"
                                        : "brown"
                                }
                            />

                            <View className="w-[69px] h-[156px] scale-50">
                                <Player avatarDetails={avatarDetails} />
                            </View>
                            <Text className="font-semibold text-base">
                                {player.username}
                            </Text>
                            <Text className="font-semibold text-base text-stone-400">
                                {player.weeklyExp} EXP
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <View style={styles.centered}>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={closeModal}
                    >
                        <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                </View>
                <Modal // modal inside modal
                    visible={!!selectedPlayer} // visible when selectedPlayer is not null
                    animationType="slide"
                >
                    <View style={styles.popupContainer}>
                        <View style={styles.popupContent}>
                            <View>
                                <Player avatarDetails={avatarDetails} />
                                <View>
                                    <Text>{selectedPlayer?.username}</Text>
                                    <Text>{selectedPlayer?.weeklyExp} EXP</Text>
                                </View>
                            </View>
                            <TouchableOpacity
                                onPress={() => setSelectedPlayer(null)} // reset selectedPlayer to null when closing the modal
                            >
                                <Text>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </Modal>
        </SafeAreaView>
    );
};

export default Leaderboard;

const styles = StyleSheet.create({
    modalContent: {
        flex: 1,
        backgroundColor: "white",
        maxHeight: Dimensions.get("window").height * 0.6, // 60% of screen height
        padding: 20,
    },
    scrollContent: {
        flex: 1,
    },
    menuItem: {
        padding: 10,
        alignContent: "center",
    },
    buttonContainer: {
        position: "absolute",
        top: 50,
        justifyContent: "flex-end",
        width: "100%",
        paddingHorizontal: 20,

        zIndex: 999,
    },
    leaderButton: {
        backgroundColor: "rgba(255,255,255,1)",
        padding: 110,
        paddingVertical: 10,
        borderRadius: 0,
    },
    closeButton: {
        backgroundColor: "rgba(255,255,255,1)",
        padding: 10,
        borderRadius: 0,
    },
    buttonText: {
        color: "#000",
        fontSize: 16,
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        padding: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25, // half of width and height to create a circle
    },
    username: {
        flex: 1, // this will allow the name to take up remaining space and push the EXP to the right
        paddingLeft: 10,
    },
    weeklyExp: {
        paddingRight: 10,
    },
    centered: {
        justifyContent: "center",
        alignItems: "center",
    },
});

const players = [
    //...just hardcoded for now
    {
        position: 1,
        id: 123,
        username: "Mailey Zyrus",
        weeklyExp: 3450,
        weeklyCoins: 56,
        avatar: require("../assets/game_images/player.png"),
    },
    {
        position: 3,
        id: 124,
        username: "Andy Lim",
        weeklyExp: 3210,
        weeklyCoins: 23,
        avatar: require("../assets/game_images/player.png"),
    },
    {
        position: 2,
        id: 690,
        username: "Babybear380",
        weeklyExp: 3300,
        weeklyCoins: 94,
        avatar: require("../assets/game_images/player.png"),
    },
    //... more players
];
