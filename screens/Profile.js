import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";

export default function Profile() {
  return (
    <View className="">
      <View className="flex-row items-center justify-center mb-5">
        <Text className="text-2xl mb-3 font-semibold">Hello, Babybear380!</Text>
        <Text className="mb-2 ml-2">
          <FontAwesomeIcon icon={faUser} size={32} />
        </Text>
      </View>
      <View className=" bg-blue-100 items-center justify-center mb-8 p-5 rounded-lg">
        <Text className="text-2xl mb-3 font-semibold">3 MCs left</Text>
        <Text className="text-sm  text-gray-600">Apply Now</Text>
      </View>
      <View className=" bg-blue-100 items-center justify-center mb-8 p-5 rounded-lg">
        <Text className="text-2xl mb-3 font-semibold">4 Leaves left</Text>
        <Text className="text-sm  text-gray-600">Apply Now</Text>
      </View>

      <View className=" bg-blue-100 items-center justify-center py-7 px-10 rounded-lg">
        <Text className="text-2xl mb-3 font-semibold">27 days to Payday</Text>
        <Text className="text-sm  text-gray-600">View History</Text>
      </View>
    </View>
  );
}
