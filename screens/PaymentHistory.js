import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";

const image = require("../assets/background.png");

export default function PaymentHistory() {
  const reward = [
    { title: "June 2023", points: "$4800" },
    { title: "May 2023", points: "$4800" },
    { title: "April 2023", points: "$4800" },
    { title: "March 2023", points: "$4800" },
    { title: "Febuary 2023", points: "$4800" },
    { title: "January 2023", points: "$4800" },
    { title: "December 2022", points: "$4600" },
    { title: "November 2022", points: "$4600" },
    { title: "October 2022", points: "$4600" },
    { title: "September 2022", points: "$4600" },
  ];

  const handleDownload = () => {
    const fileUrl =
      "https://docs.google.com/document/d/14N51Z5BW6YMaQtlogRqbAin8GIUCMnKBiaPepPSisRw/edit?usp=sharing";
    Linking.openURL(fileUrl).catch((error) => {
      // Handle the error here
      console.error("Error occurred while opening URL:", error);
    });
  };

  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      className=" justify-center"
    >
      <SafeAreaView className="h-[100vh]">
        <TouchableOpacity className="ml-5 flex-row mb-4 mt-6">
          <Text className="text-white mt-1 mr-2">
            <FontAwesomeIcon color={"white"} icon={faArrowLeft} size={24} />
          </Text>
          <Text className="text-lg font-semibold text-white">Back</Text>
        </TouchableOpacity>
        <View className="flex-row items-center justify-center mt-20">
          <Text className="text-white text-3xl mb-3 font-semibold">
            Your Payment History
          </Text>
        </View>

        {/* change to ensure navbar doesnt block challenges */}
        <ScrollView className="max-h-[34vh] overflow-hidden mt-12">
          {reward.map((item, index) => (
            <View
              className="flex-row mx-10 bg-blue-100  border-b border-gray-300 px-5 py-4 "
              key={index}
            >
              <View className=" w-[50vw]">
                <Text className="text-left text-base">{item.title}</Text>
              </View>
              <View className=" ">
                <Text className=" text-base font-medium">{item.points}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        <TouchableOpacity
          className=" mt-8 justify-center mx-auto"
          onPress={handleDownload}
        >
          <Text className="text-white text-center text-lg font-semibold">
            Download Here
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
}
