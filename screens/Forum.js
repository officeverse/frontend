import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons/faUserGroup";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import React from "react";

const image = require("../assets/background.png");

export default function Forum() {
  const [text, setText] = React.useState("");

  const announcements = [
    { date: "25 June", event: "Company Retreat" },
    { date: "7 July", event: "Monthly Report" },
    { date: "15 July", event: "Company D&D" },
    { date: "8 August", event: "Jamie's Birthday" },
    { date: "11 August", event: "Company Retreat" },
  ];

  const handleButtonPress = () => {
    if (text === "") {
      Alert.alert("Missing Feedback!", "Do enter your feedback and resubmit", [
        { text: "OK" },
      ]);
    } else {
      Alert.alert("We hear you!", "We appreciate your feedback", [
        { text: "Redeem 50 EXP" },
      ]);
    }

    setText("");
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      enabled
    >
      <ImageBackground
        source={image}
        resizeMode="cover"
        className=" justify-center"
      >
        <SafeAreaView className="h-[100vh]">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              <View className="flex-row items-center justify-center mt-10">
                <Text className="text-white text-3xl mb-3 font-semibold">
                  Our Forum
                </Text>
                <Text className="mb-2 ml-2">
                  <FontAwesomeIcon
                    color={"white"}
                    icon={faUserGroup}
                    size={32}
                  />
                </Text>
              </View>

              <View>
                <View className="text-center">
                  <Text className="text-white text-center mt-5 mb-3">
                    Company Calendar
                  </Text>
                </View>
                <ScrollView
                  contentOffset={{ x: 0, y: 20 }}
                  className="mx-10 max-h-[15.5vh] overflow-hidden rounded-lg mt-1"
                >
                  {announcements.map((item, index) => (
                    <View
                      onStartShouldSetResponder={() => true}
                      className="bg-white flex-row px-10 py-2 border-b border-gray-300"
                      key={index}
                    >
                      <View className="w-20">
                        <Text className="text-left text-base mb-1 font-medium">
                          {item.date}
                        </Text>
                      </View>

                      <View>
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
                  <Text className="text-white text-center mt-12 mb-1">
                    Feedback Box
                  </Text>
                  <Text className="text-white text-center text-xl mb-2">
                    We value your voice
                  </Text>
                </View>
                                <View className="mx-10 rounded-lg bg-blue-100 px-10 py-5">
                                    <TextInput
                                        onChangeText={setText}
                                        value={text}
                                        placeholder="Feedback for 50 EXP!"
                                        placeholderTextColor="#6C6B6B"
                                        className="mx-2 rounded-lg bg-blue-100 px-6 py-8"
                                    ></TextInput>

                                    <TouchableOpacity
                                        onPress={handleButtonPress}
                                        className="absolute bottom-2 right-2 bg-slate-800 p-2 rounded-full"
                                    >
                                        <FontAwesomeIcon
                                            icon={faPaperPlane}
                                            size={15}
                                            color={"white"}
                                            bounce
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>

              <View>
                <View className="text-center">
                  <Text className="text-white text-center mt-12 mb-3">
                    Employee of the Month
                  </Text>
                </View>

                <View className="mx-10 rounded-lg bg-white px-10 py-5">
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
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}
