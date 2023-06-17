import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";

const image = require("../assets/background.png");

export default function Profile() {
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      className=" justify-center"
    >
      <SafeAreaView className="h-[100vh]">
        <View className="flex-row items-center justify-center mb-5 mt-14">
          <Text className="text-white text-2xl mb-3 font-semibold">
            Hello, Babybear380!
          </Text>
          <Text className="mb-2 ml-2">
            <FontAwesomeIcon color={"white"} icon={faUser} size={32} />
          </Text>
        </View>
        <View className="flex flex-col justify-between h-[60vh] mt-5">
          <TouchableOpacity className="bg-blue-100 items-center justify-center p-5 py-8 rounded-lg mx-14">
            <Text className="text-2xl mb-3 font-semibold">3 MCs left</Text>
            <Text className="text-sm  text-gray-600">Apply Now</Text>
          </TouchableOpacity>

          <TouchableOpacity className="my-1 bg-blue-100 items-center justify-center p-5 py-8 rounded-lg mx-14">
            <Text className="text-2xl mb-3 font-semibold">4 Leaves left</Text>
            <Text className="text-sm  text-gray-600">Apply Now</Text>
          </TouchableOpacity>

          <TouchableOpacity className=" bg-blue-100 items-center justify-center py-8 px-10 rounded-lg mx-14">
            <Text className="text-2xl mb-3 font-semibold">
              27 days to Payday
            </Text>
            <Text className="text-sm  text-gray-600">View History</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
