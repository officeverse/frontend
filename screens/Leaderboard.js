import { SafeAreaView, ImageBackground } from "react-native";

const image = require("../assets/office_home.png");

export default function Leaderboard() {
  return (
    <ImageBackground source={image} style={{ flex: 1 }} resizeMode="cover">
      <SafeAreaView style={{ flex: 1 }}>
        {/* Here you will include the scrollable content of your leaderboard */}
      </SafeAreaView>
    </ImageBackground>
  );
}
