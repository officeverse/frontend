import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  ImageBackground,
} from "react-native";

const image = require("../assets/office_home.png");

export default function Home({ navigation }) {
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      className=" justify-center"
    >
      <SafeAreaView className="h-[100vh]">
        <View className="flex-row items-center justify-center mt-20">
          <Text className="text-5xl mb-2 font-bold color-white">
            Officeverse.
          </Text>
        </View>
        <View className=" items-center justify-center mt-1">
          <Text className="text-2xl font-semibold color-white">
            Welcome back,
          </Text>
          <Text className="text-2xl font-semibold color-white">
            {" "}
            Babybear380.
          </Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
