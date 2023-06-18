import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function OptionC({navigation}) {
  const [number, onChangeNumber] = React.useState("");
  const pressHandler = () => {
    navigation.navigate('Team')
  }
  return (
    <SafeAreaView className="h-[100vh]">
      <View className="px-10 mt-14">
        <Text className="text-center text-3xl font-semibold">
          Your plant has grown so beautifully!
        </Text>
      </View>

      <View>
        <Text className="text-base text-center mt-10 px-10">
          Exciting? Continue on to learn more about Our Team and continue to
          grow your plant!
        </Text>
      </View>

      <TouchableOpacity onPress={pressHandler} className="bg-blue-100 w-[60vw] justify-center mx-auto rounded-2xl mt-10 py-2 shadow-lg">
        <Text className="text-lg text-center font-semibold">
          Harvest Fruits
        </Text>
        <Text className="text-base text-center text-gray-500">+ 50 EXP</Text>
      </TouchableOpacity>
      <View className="justify-center mx-auto mt-14">
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
