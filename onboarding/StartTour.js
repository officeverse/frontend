import { faBlackberry } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from "react-native";

export default function StartTour({ navigation }) {
  const pressHandler = () => {
    Alert.alert(
      "Reminder!",
      "Last reminder to read each section carefully before moving forward, and have fun!",
      [{ text: "OK" }]
    );
    navigation.navigate("OptionA");
  };
  return (
    <SafeAreaView className="h-[100vh] justify-around">
      <View className="">
        <View className="justify-center mx-auto">
          <Image
            style={styles.forest}
            source={require("../assets/StartTour.png")}
          />
        </View>
        <View className="h-[25vh] justify-between">
          <Text className="text-center text-2xl font-semibold">
            Welcome to BBC!
          </Text>

          <Text className="text-center text-lg font-medium text-gray-400 px-20">
            We are so excited for you to join us in this journey.
          </Text>

          <TouchableOpacity
            onPress={pressHandler}
            className="justify-center mx-auto bg-blue-200 rounded-lg"
          >
            <Text className="text-base px-10 py-3">Start Tour</Text>
          </TouchableOpacity>
        </View>
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
