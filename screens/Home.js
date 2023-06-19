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
        <ImageBackground
          source={image}
          resizeMode="cover"
          className=" justify-center"
        >
          <View className="my-auto mx-auto h-full ">
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
          <View className="px-6 ">
            <Text className="px-6 text-center text-white text-xl font-semibold mx-auto my-2 mt-12">
              Spin to win EXPS!
            </Text>
            <View className="bg-slate-800 rounded-lg w-auto mx-auto p-2 my-2">
              <TouchableOpacity
                className="p-1 px-3"
                onPress={() => {
                  wheelRef.current._onPress();
                }}
              >
                <Text className="text-lg text-white">Spin The Wheel</Text>
              </TouchableOpacity>
            </View>
            {prize && (
              <Text className="mx-auto text-white text-base mt-2 mb-2">
                Congratulations! You won {prize} EXP
              </Text>
            )}
          </View>
          <TouchableOpacity onPress={closeDailyWheel}>
            <Text className="mx-auto mb-12 pt-4 underline">Close</Text>
          </TouchableOpacity>
        </ImageBackground>
      </Modal>
      <SafeAreaView className="h-[100vh]" 

      >
        <View className="flex-row items-center justify-center mt-14">
          <Text className="text-4xl font-bold color-white">Officeverse.</Text>
        </View>
        <View className=" items-center justify-center mt-3">
          <Text className="text-xl font-medium color-white">Welcome back,</Text>
          <Text className="text-xl mb-6 font-medium color-white">
            Babybear380.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setDailyWheelOpen(true);
          }}
          className="mx-auto flex flex-row justify-center items-center bg-slate-800 p-2 px-4 rounded-lg"
        >
          <FontAwesomeIcon color={"white"} icon={faDharmachakra} size={32} />
          <Text className="text-white mx-2">Daily Spin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: 'absolute',
            left: '33.33%', 
            top: '43%',
            width: '33.33%',
            height: '20%',
            justifyContent: 'flex-end',  // Aligns children at the bottom of the view
            alignItems: 'center'  // Centers children horizontally
          }}
          onPress={() => {
            navigation.navigate('Leaderboard')
          }}
        >
          <Text style={{
            color: 'white', 
            fontWeight: 'semibold', 
            textAlign: 'center'  // Centers text
          }}>
            Tap desk to enter office
          </Text>
        </TouchableOpacity>
        <Character />
      </SafeAreaView>
    </ImageBackground>
  );
}
