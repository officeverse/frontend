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
} from "react-native";
import { useState, useRef } from "react";
import WheelOfFortune from "react-native-wheel-of-fortune";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faDharmachakra } from "@fortawesome/free-solid-svg-icons/faDharmachakra";
import Character from "../components/Character";

const image = require("../assets/office_home.png");

const participants = ["10", "20", "30", "40", "50", "60", "70", "80", "90"];

export default function Home({ navigation }) {
    const wheelRef = useRef(null);

    const [dailyWheelOpen, setDailyWheelOpen] = useState(false);
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
            <Modal
                visible={dailyWheelOpen}
                animationType="slide"
                onRequestClose={closeDailyWheel}
            >
                {/* Content of the pop-up */}
                <View className="my-auto mx-auto">
                    <WheelOfFortune
                        options={{
                            rewards: participants,
                            knobSize: 30,
                            borderWidth: 5,
                            borderColor: "#fff",
                            innerRadius: 30,
                            duration: 6000,
                            backgroundColor: "transparent",
                            textAngle: "horizontal",
                            knobSource: require("../assets/images/knob.png"),
                            getWinner: (value, index) => {
                                // this.setState({
                                //     winnerValue: value,
                                //     winnerIndex: index,
                                // });
                                console.log(value);
                                console.log(index);
                                setPrize(value);
                            },
                            onRef: (ref) => (wheelRef.current = ref),
                        }}
                    />
                </View>
                <Text className="mx-auto my-2">
                    Stand a chance to win coins and other prizes!
                </Text>
                <View className="bg-slate-800 rounded-lg w-auto mx-auto p-2 my-2">
                    <TouchableOpacity
                        className="p-1 px-3"
                        onPress={() => {
                            wheelRef.current._onPress();
                        }}
                    >
                        <Text className="text-xl text-white">Spin now!</Text>
                    </TouchableOpacity>
                </View>
                {prize && (
                    <Text className="mx-auto">You won {prize} coins!</Text>
                )}
                <TouchableOpacity onPress={closeDailyWheel}>
                    <Text className="mx-auto mb-40 pt-4 underline">Close</Text>
                </TouchableOpacity>
            </Modal>
            <SafeAreaView className="h-[100vh]">
                <View className="flex-row items-center justify-center mt-12">
                    <Text className="text-3xl mb-3 font-bold color-white">
                        Officeverse.
                    </Text>
                </View>
                <View className="flex-row items-center justify-center mt-3">
                    <Text className="text-1xl mb-3 font-semibold color-white">
                        Welcome back, Babybear380.
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
                <Character />
            </SafeAreaView>
        </ImageBackground>
    );
}
