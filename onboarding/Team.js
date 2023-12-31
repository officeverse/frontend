import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function Team({ navigation }) {
  const [number, onChangeNumber] = React.useState("");
  const pressHandler = () => {
    navigation.navigate("EndTour");
  };
  return (
    <SafeAreaView className="h-[100vh] justify-around">
      <View className="px-10 mt-10">
        <Text className="text-center text-3xl font-semibold">Our Team</Text>
      </View>

      <View>
        <Text className="text-lg text-center mt-6 px-10">
          Lorem ipsum dolor sit amet consectetur. Vulputate tortor eu eu quis
          diam. Dolor nulla id amet facilisi quis nibh purus. Iaculis dignissim
          scelerisque in quisque in porttitor amet bibendum est.
        </Text>
      </View>

      <TouchableOpacity
        onPress={pressHandler}
        className="bg-blue-100 w-[60vw] justify-center mx-auto rounded-2xl mt-8 py-3 shadow-lg"
      >
        <Text className="text-lg text-center font-semibold">
          Collect My Reward!
        </Text>
        <Text className="text-md pt-1 text-center text-gray-500">
          Redeem 50 EXP
        </Text>
      </TouchableOpacity>
      <View className="justify-center mx-auto mt-10">
        <Image
          style={styles.forest}
          source={require("../assets/OptionC.png")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  forest: {
    width: 180,
    height: 250,
    resizeMode: "cover",
  },
});
