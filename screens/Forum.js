import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  ImageBackground,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons/faUserGroup";
import React from "react";

const image = require("../assets/background.png");

export default function Forum() {
  const [text, onChangeText] = React.useState("");
  const announcements = [
    { date: "25 June", event: "Company Retreat" },
    { date: "7 July", event: "Monthly Report" },
    { date: "15 July", event: "Company D&D" },
    { date: "8 August", event: "Jamie's Birthday" },
    { date: "11 August", event: "Company Retreat" },
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
            Our Forum
          </Text>
          <Text className="mb-2 ml-2">
            <FontAwesomeIcon color={"white"} icon={faUserGroup} size={32} />
          </Text>
        </View>

        <View>
          <View className="text-center">
            <Text className="text-white text-center mt-5 mb-3">
              Company Calendar
            </Text>
          </View>
          <ScrollView className="mx-10 max-h-[15.5vh] overflow-hidden rounded-lg mt-1 shadow-xl">
            {announcements.map((item, index) => (
              <View
                className="bg-blue-100 flex-row px-10 py-2 border-b border-gray-300"
                key={index}
              >
                <View className="w-20 ">
                  <Text className="text-left text-base mb-1 font-medium">
                    {item.date}
                  </Text>
                </View>

                <View className="">
                  <Text className="text-left text-base text-gray-600 ">
                    {item.event}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        <View>
          <View className="text-center">
            <Text className="text-white text-center mt-14 mb-3">
              Employee of the Month
            </Text>
          </View>

          <View className="mx-10 rounded-lg bg-blue-100 px-10 py-6">
            <View className="text-center">
              <Text className="text-center text-md mb-1">
                Let us congratulate
              </Text>
              <Text className="text-center font-semibold text-base mb-1">
                Mailey Zyrus
              </Text>
              <Text className="text-center text-md">
                from the HR Department!
              </Text>
            </View>
          </View>
        </View>

        <View>
          <View className="text-center">
            <Text className="text-white text-center mt-14 mb-1">
              Feedback Box
            </Text>
            <Text className="text-white text-center text-xl mb-2">
              We value your voice
            </Text>
          </View>

          <TextInput
            //   onChangeText={onChangeNumber}
            value={text}
            placeholder="Leave a Feedback"
            className="mx-10 rounded-lg bg-blue-100 px-10 py-4 h-[13vh]"
          ></TextInput>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
