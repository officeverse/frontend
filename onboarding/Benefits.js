import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";

export default function Benefits({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("OptionC");
  };
  return (
    <SafeAreaView className="h-[100vh] justify-around">
      <View className="px-10 mt-14">
        <Text className="text-center text-3xl font-semibold">
          Your Benefits
        </Text>
      </View>

      <View className="bg-white w-[70vw] justify-center mx-auto rounded-2xl shadow-lg mt-8">
        <Text className="text-base text-center text-gray-900 py-3 px-8">
          Our employees are given four days of paid medical leave on top of one
          week of paid leave!
        </Text>
      </View>

      <View className="bg-white w-[70vw] justify-center mx-auto rounded-2xl shadow-lg mt-8">
        <Text className="text-base text-center text-gray-900 py-3 px-8">
          Payday is on the 1st of every new month.
        </Text>
      </View>

      <TouchableOpacity
        onPress={pressHandler}
        className=" w-[60vw] bg-blue-100 justify-center mx-auto rounded-2xl mt-16 py-3 shadow-lg"
      >
        <Text className="text-lg text-center font-semibold">
          Collect My Reward!
        </Text>
        <Text className="text-md pt-1 text-center text-gray-500">
          Redeem 50 EXP
        </Text>
        {/* <Text className="mt-2 ml-2">
          <FontAwesomeIcon icon={faArrowRight} size={20} />
        </Text> */}
      </TouchableOpacity>

      <View className="justify-center mx-auto mt-14">
        <Image
          style={styles.forest}
          source={require("../assets/OptionB.png")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  forest: {
    width: 350,
    height: 210,
    resizeMode: "cover",
  },
});
