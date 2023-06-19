import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons/faGift";

const image = require("../assets/background.png");

export default function Rewards() {
  const reward = [
    { id: 1, title: "$5 Grab Voucher", points: 150 },
    { id: 2, title: "$5 Food Panda Voucher", points: 100 },
    { id: 3, title: "15% OFF H&M Voucher", points: 80 },
    { id: 4, title: "10% OFF Courts Voucher", points: 70 },
    { id: 5, title: "$2 KOI Voucher", points: 60 },
    { id: 6, title: "10% OFF Courts Voucher", points: 100 },
    { id: 7, title: "10% OFF Courts Voucher", points: 100 },
    { id: 8, title: "10% OFF Courts Voucher", points: 100 },
    { id: 9, title: "10% OFF Courts Voucher", points: 100 },
    { id: 10, title: "10% OFF Courts Voucher", points: 100 },
  ];

  const renderItem = ({ item }) => (
    <View
      className="bg-white rounded-xl w-[46vw] max-w-xs mx-auto my-4"
      style={[
        {
          shadowColor: "black",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
      ]}
    >
      <TouchableOpacity
        onPress={() => {
          Alert.alert(item.title, `Redeem Reward with ${item.points} EXP`, [
            { text: "Confirm" },
            { text: "Cancel" },
          ]);
        }}
      >
        <Image
          source={require("../assets/voucher.jpg")}
          className="w-full h-32 rounded-t-lg"
          resizeMode="cover"
        />
        <View className="p-4">
          <View>
            <Text className="mb-3  text-sm text-stone-500">
              {item.points} coins
            </Text>
            <View className="">
              <Text className=" text-slate-900 text-base font-bold">
                {item.title}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

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
        <FlatList
          data={reward}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          className="row m-0"
        />
        {/* </ScrollView> */}
      </SafeAreaView>
    </ImageBackground>
  );
}
