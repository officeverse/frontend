import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";

export default function Login() {
  const [number, onChangeNumber] = React.useState("");
  return (
    <SafeAreaView className="h-[100vh]">
      <View className="mt-32">
        <Text className="text-center text-3xl font-semibold">Hello!</Text>
        <Text className="text-center text-lg text-gray-400 mt-3 font-medium">
          Enter your company code
        </Text>
      </View>
      <View>
        <TextInput
          onChangeText={onChangeNumber}
          value={number}
          placeholder="eg. 120348"
          keyboardType="numeric"
          className="mx-20 rounded-lg bg-gray-100 px-4 py-4 h-[5vh] mt-5 mb-20"
        />
      </View>
      <View>
        <Image
          style={styles.forest}
          source={require("../assets/LoginForest.png")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  forest: {
    // width: 350,
    // height: 450,
    resizeMode: "cover",
  },
});
