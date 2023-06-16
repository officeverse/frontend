import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons/faGift";

const image = require("../assets/background.png");

export default function Rewards() {
  const reward = [
    { title: "$5 Grab Voucher", points: "- 100 exp" },
    { title: "$5 Food Panda Voucher", points: "- 100 EXP" },
    { title: "15% OFF Swensons Voucher", points: "- 80 coins" },
    { title: "10% OFF Courts Voucher", points: "- 100 coins" },
    { title: "$2 KOI Voucher", points: "- 60 coins" },
    { title: "10% OFF Courts Voucher", points: "- 100 coins" },
    { title: "10% OFF Courts Voucher", points: "- 100 coins" },
    { title: "10% OFF Courts Voucher", points: "- 100 coins" },
    { title: "10% OFF Courts Voucher", points: "- 100 coins" },
    { title: "10% OFF Courts Voucher", points: "- 100 coins" },
  ];

  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      className=" justify-center"
    >
      <SafeAreaView className="h-[100vh]">
        <View className="flex-row items-center justify-center mt-10">
          <Text className="text-white text-3xl mb-3 font-semibold">
            Rewards
          </Text>
          <Text className="mb-2 ml-2">
            <FontAwesomeIcon color={"white"} icon={faGift} size={32} />
          </Text>
        </View>

        <View className="flex-row items-center justify-center mb-3">
          <Text className="text-white">
            Start exchanging BBC coins for rewards now!
          </Text>
        </View>

        {/* change to ensure navbar doesnt block challenges */}
        <ScrollView className="max-h-[73vh] overflow-hidden">
          {reward.map((item, index) => (
            <View
              className="mx-10 bg-blue-100 items-center justify-center mb-6 px-5 py-2 rounded-lg"
              key={index}
            >
              <Text className="text-lg mb-1 font-medium">{item.title}</Text>
              <Text className="text-xs text-gray-600">{item.points}</Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
