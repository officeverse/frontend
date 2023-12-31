import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function OptionA({ navigation }) {
  const [number, onChangeNumber] = React.useState("");
  const pressHandler = () => {
    navigation.navigate("Values");
  };
  return (
    <SafeAreaView className="h-[100vh]">
      <View className="px-10 mt-16 h-[25vh] justify-around">
        <Text className="text-center text-3xl font-semibold">
          Grow as you find out more about us!
        </Text>

        <Text className="text-base text-center px-5">
          Start growing your plant by learning about our company's values
        </Text>
      </View>

      <View className="h-[40vh]">
        <TouchableOpacity
          onPress={pressHandler}
          className="bg-blue-100 w-[60vw] justify-center mx-auto rounded-2xl mt-14 py-2 shadow-lg"
        >
          <Text className="text-lg text-center font-semibold">
            Water My Plant
          </Text>
          <Text className="text-base text-center text-gray-500">+ 50 EXP</Text>
        </TouchableOpacity>
        <View className="justify-center mx-auto mt-14">
          <Image
            style={styles.forest}
            source={require("../assets/OptionA.png")}
          />
        </View>
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
