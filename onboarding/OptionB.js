import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function OptionB({navigation}) {
  const [number, onChangeNumber] = React.useState("");
  const pressHandler = () => {
    navigation.navigate('Benefits')
  }
  return (
    <SafeAreaView className="h-[100vh]">
      <View className="px-10 mt-20">
        <Text className="text-center text-4xl font-semibold">Great job!</Text>
        <Text className="text-center text-xl font-medium px-10 mt-2">
          {" "}
          Your seed has now evolved to a seedling
        </Text>
      </View>

      <View>
        <Text className="text-base text-center text-gray-500 mt-12 px-10">
          Continue growing your plant by learning about your staff benefits now!
        </Text>
      </View>

      <TouchableOpacity onPress={pressHandler} className="bg-blue-100 w-[60vw] justify-center mx-auto rounded-2xl mt-14 py-2 shadow-lg">
        <Text className="text-lg text-center font-semibold">
          Fertilise My Plant
        </Text>
        <Text className="text-base text-center text-gray-500">+ 50 EXP</Text>
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
