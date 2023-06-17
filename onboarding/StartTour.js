import { faBlackberry } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

export default function StartTour({navigation}) {
  const pressHandler = () => {
    navigation.navigate('OptionA')
  }
  return (
    <SafeAreaView className="h-[100vh]">
      <View className="mt-10">
        <View className="justify-center mx-auto">
          <Image
            style={styles.forest}
            source={require("../assets/StartTour.png")}
          />
        </View>
        <View>
          <Text className="text-center text-2xl font-semibold">
            Welcome to BBC!
          </Text>
          <View className="px-8">
            <Text className="text-center text-lg font-medium text-gray-400 mt-4">
              We are so excited for you to join us in this journey.
            </Text>
          </View>
        </View>

        <TouchableOpacity onPress={pressHandler} className="justify-center mx-auto bg-blue-200 rounded-lg mt-12">
          <Text className="text-base px-10 py-2">Start Tour</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  forest: {
    width: 300,
    height: 350,
  },
});
