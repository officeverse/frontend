import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  ImageBackground,
} from "react-native";

const image = require("../assets/office_home.png");

export default function Home({navigation}) {
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      className=" justify-center"
    >
      <SafeAreaView className="h-[100vh]">
        <View className="flex-row items-center justify-center mt-12">
          <Text className="text-3xl mb-3 font-bold color-white">Officeverse.</Text>
        </View>
        <View className="flex-row items-center justify-center mt-3">
          <Text className="text-1xl mb-3 font-semibold color-white">Welcome back, Babybear380.</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
  
}
