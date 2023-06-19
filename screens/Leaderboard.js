import { SafeAreaView, ImageBackground } from "react-native";

const image = require("../assets/office_home.png");

export default function Leaderboard() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={image}
        style={{flex: 1}}
        resizeMode="cover"
      >
        {/* Here you will include the scrollable content of your leaderboard */}
      </ImageBackground>
    </SafeAreaView>
  );
}
