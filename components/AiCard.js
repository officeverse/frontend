import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { faBriefcase } from "@fortawesome/free-solid-svg-icons/faBriefcase";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
// import { faGraduationCap } from "@fortawesome/free-solid-svg-icons/faGraduationCap";
import React from "react";

export default function AiCard({ desc, icon, sizing }) {
  return (
    <TouchableOpacity className="mx-4 bg-blue-100 items-center justify-center mb-6 px-2 py-5 rounded-lg w-[40vw]">
      <View className="flex-row">
        <Text className="text-[#78BEFF] mt-1">
          {" "}
          <FontAwesomeIcon
            className="text-blue-400"
            icon={icon}
            size={sizing}
            color="#78BEFF"
          />{" "}
        </Text>
      </View>
      <Text className="text-center mt-2 text-sm font-semibold text-gray-500">
        {desc}
      </Text>
    </TouchableOpacity>
  );
}
