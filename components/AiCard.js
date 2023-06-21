import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { faBriefcase } from "@fortawesome/free-solid-svg-icons/faBriefcase";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
// import { faGraduationCap } from "@fortawesome/free-solid-svg-icons/faGraduationCap";
import React from "react";

const image = require("../assets/roadmap.jpg");

export default function AiCard({ desc, icon, sizing }) {
  return (
    <View className="rounded-xl">
      <ImageBackground
        source={image}
        resizeMode="cover"
        imageStyle={{ borderRadius: 8 }}
        className="mx-4 bg-white items-center justify-center mb-6 px-2 py-8 rounded-lg w-[80vw] shadow-xl"
      >
        <View className="flex-row">
          <Text className="mt-1">
            <FontAwesomeIcon icon={icon} size={sizing} color="white" />{" "}
          </Text>
        </View>
        <Text className="text-center mt-2 text-lg text-white">{desc}</Text>
      </ImageBackground>
    </View>
  );
}
