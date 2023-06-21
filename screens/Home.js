import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    TextInput,
    ImageBackground,
    TouchableOpacity,
    Modal,
    Button,
    StyleSheet,
    Image,
    Alert,
} from "react-native";
import { useState, useRef } from "react";
import WheelOfFortune from "react-native-wheel-of-fortune";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faDharmachakra } from "@fortawesome/free-solid-svg-icons/faDharmachakra";
import Character from "../components/Character";
import Svg, {
    SvgProps,
    Defs,
    LinearGradient,
    Stop,
    Path,
} from "react-native-svg";
const image = require("../assets/office_home.png");
const wheelImage = require("../assets/mockaroon-lgi3W65lmvA-unsplash.jpg");

const min = 0;
const max = 100;
const count = 50;

const generateRandomNumbers = (min, max, count) => {
    const randomNumbers = [];
    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomNumbers.push(randomNumber);
    }

    return randomNumbers;
};
const rewards = generateRandomNumbers(min, max, count);

export default function Home({ navigation }) {
    const wheelRef = useRef(null);

    const [dailyWheelOpen, setDailyWheelOpen] = useState(false);
    const [characterPopupOpen, setCharacterPopupOpen] = useState(false);
    const [prize, setPrize] = useState("");

    const closeDailyWheel = () => {
        setDailyWheelOpen(false);
    };

    return (
        <ImageBackground
            source={image}
            resizeMode="cover"
            className=" justify-center"
        >
            {/* FORTUNE WHEEL POPUP */}
            <Modal
                visible={dailyWheelOpen}
                animationType="slide"
                onRequestClose={closeDailyWheel}
            >
                <ImageBackground
                    source={wheelImage}
                    resizeMode="cover"
                    className=" justify-center"
                >
                    <View className="my-auto mx-auto h-full ">
                        <WheelOfFortune
                            options={{
                                rewards,
                                knobSize: 30,
                                borderWidth: 4,
                                borderColor: "#fff",
                                innerRadius: 30,
                                duration: 6000,
                                backgroundColor: "black",
                                textAngle: "vertical",
                                knobSource: require("../assets/images/knob.png"),
                                getWinner: (value, index) => {
                                    // this.setState({
                                    //     winnerValue: value,
                                    //     winnerIndex: index,
                                    // });
                                    setPrize(value);
                                    Alert.alert(
                                        "Congratulations!",
                                        `You won ${value} coins!`,
                                        [{ text: "Claim" }]
                                    );
                                },
                                onRef: (ref) => (wheelRef.current = ref),
                            }}
                        />
                    </View>
                    <View className="px-6 bg-white">
                        <Text className="px-6 text-center text-black text-xl font-semibold mx-auto my-2 mt-12">
                            Spin to win coins!
                        </Text>
                        <View className="bg-slate-800 rounded-lg w-auto mx-auto p-2 my-2">
                            <TouchableOpacity
                                className="p-1 px-3"
                                onPress={() => {
                                    wheelRef.current._onPress();
                                }}
                            >
                                <Text className="text-lg text-white">
                                    Spin The Wheel
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={closeDailyWheel}>
                            <Text className="mx-auto mb-16 pt-4 underline">
                                Close
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </Modal>
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
                                className="w-[70px] h-[70px]"
                            />
                            <View>
                                <Text className="font-bold text-xl">
                                    BabyBear380
                                </Text>
                                <Text className="font-semibold mt-2">
                                    Senior Software Engineer
                                </Text>
                            </View>
                        </View>
                        <Button
                            title="Close"
                            onPress={() => setCharacterPopupOpen(false)}
                        />
                    </View>
                </View>
            </Modal>
            <SafeAreaView className="h-[100vh]">
                <View className="flex-row items-center justify-center mt-16">
                    <Text className="text-5xl font-bold color-white">
                        Officeverse.
                    </Text>
                </View>
                <View className=" items-center justify-center mt-3">
                    <Text className="text-2xl font-medium color-white">
                        Welcome back,
                    </Text>
                    <Text className="text-2xl mb-6 font-medium color-white">
                        Babybear380.
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        setDailyWheelOpen(true);
                    }}
                    className="mx-auto flex flex-row justify-center items-center bg-slate-800 p-2 px-4 rounded-lg"
                >
                    <FontAwesomeIcon
                        color={"white"}
                        icon={faDharmachakra}
                        size={32}
                    />
                    <Text className="text-white mx-2">Daily Spin</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        position: "absolute",
                        left: "33.33%",
                        top: "43%",
                        width: "33.33%",
                        height: "30%",
                        justifyContent: "flex-end", // Aligns children at the bottom of the view
                        alignItems: "center", // Centers children horizontally
                    }}
                    onPress={() => {
                        navigation.navigate("Leaderboard");
                    }}
                >
                    <Text className="text-white font-semibold flex justify-center items-center">
                        Tap to enter office
                    </Text>
                </TouchableOpacity>
                <Character setCharacterPopupOpen={setCharacterPopupOpen} />
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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
    },
    popupText: {
        fontSize: 18,
        marginBottom: 8,
    },
});
