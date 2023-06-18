import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { faBriefcase } from "@fortawesome/free-solid-svg-icons/faBriefcase";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
// import { faGraduationCap } from "@fortawesome/free-solid-svg-icons/faGraduationCap";
import React from "react";

export default function AiCard({ desc, icon, sizing }) {
    return (
        <TouchableOpacity className="mx-4 bg-white items-center justify-center mb-6 px-2 py-5 rounded-lg w-[40vw] shadow-xl">
            <View className="flex-row">
                <Text className="mt-1">
                    {" "}
                    <FontAwesomeIcon
                        icon={icon}
                        size={sizing}
                        color="#3b3b3b"
                    />{" "}
                </Text>
            </View>
            <Text className="text-center mt-2 text-sm font-semibold text-gray-500">
                {desc}
            </Text>
        </TouchableOpacity>
    );
}
