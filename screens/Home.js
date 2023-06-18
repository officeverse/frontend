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
                    {/* <TouchableOpacity onPress={closeDailyWheel}>
                        <Text>Close</Text>
                    </TouchableOpacity> */}
                    <Button
                        title="Press me"
                        onPress={() => {
                            wheelRef.current._onPress();
                        }}
                    />
                </View>
                {prize && (
                    <Text className="mx-auto mb-40">
                        You won {prize} coins!
                    </Text>
                )}
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
                <TouchableOpacity className="mx-auto">
                    <Text
                        className="text-white"
                        onPress={() => {
                            setDailyWheelOpen(true);
                        }}
                    >
                        Touch me
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ImageBackground>
    );
}
