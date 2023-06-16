import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons/faBriefcase";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons/faGraduationCap";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import { faMugHot } from "@fortawesome/free-solid-svg-icons/faMugHot";
import { faChartLine } from "@fortawesome/free-solid-svg-icons/faChartLine";
import React from "react";
import AiCard from "../components/AiCard";

export default function AiPal() {
  return (
    <SafeAreaView className="">
      <View className="flex-row items-center justify-center mt-10">
        <Text className="text-3xl mb-3 font-semibold">Work Smarter</Text>
        <Text className="mb-2 ml-2">
          <FontAwesomeIcon icon={faBriefcase} size={32} />
        </Text>
      </View>

      <View className="flex-row items-center justify-center mt-4 mb-3 px-10">
        <Text className="text-center">
          Smart insights, gathered from your Officeverse journey.
        </Text>
      </View>

      <ScrollView>
        <View className="flex-row justify-between mt-8 ">
          <AiCard desc="Roadmap your progress" icon={faUser} sizing={32} />
          <AiCard
            desc="Upskill yourself today"
            icon={faGraduationCap}
            sizing={43}
          />
        </View>

        <View className="flex-row justify-between mt-8 ">
          <AiCard desc="Recommended break timer" icon={faClock} sizing={34} />
          <AiCard
            desc="Connect with fellow colleagues"
            icon={faMugHot}
            sizing={38}
          />
        </View>

        <View className=" items-center mt-5 ">
          <AiCard
            desc="LinkedIn Post Generator"
            icon={faChartLine}
            sizing={34}
          />
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}
