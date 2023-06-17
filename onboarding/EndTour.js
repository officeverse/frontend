import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function EndTour() {
  return (
    <SafeAreaView className="h-[100vh]">
      <View className="px-6 mt-16">
        <Text className="text-center text-3xl font-semibold">
          Congratulations!
        </Text>
        <Text className="text-center text-lg mt-4 text-gray-600">
          Your plant is fully grown! You are now ready to start your journey
          with us
        </Text>
      </View>

      <View>
        <Text className="text-base text-center mt-16 px-10 text-gray-600">
          Exchange your tree for 150 EXP now!
        </Text>
      </View>

      <TouchableOpacity className="bg-blue-100 w-[60vw] justify-center mx-auto rounded-2xl mt-4 py-4 shadow-lg">
        <Text className="text-lg text-center font-semibold">+ 150 EXP</Text>
      </TouchableOpacity>
      <View className="justify-center mx-auto mt-16">
        <Image
          style={styles.forest}
          source={require("../assets/EndTour.png")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  forest: {
    width: 320,
    height: 300,
    resizeMode: "cover",
  },
});