import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Modal,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons/faBriefcase";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons/faGraduationCap";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import { faMugHot } from "@fortawesome/free-solid-svg-icons/faMugHot";
import { faChartLine } from "@fortawesome/free-solid-svg-icons/faChartLine";
import React, { useState } from "react";
import AiCard from "../components/AiCard";
import RoadMapGenerator from "./RoadmapGenerator";
import Upskill from "./Upskill";
const image = require("../assets/background.png");

export default function AiPal() {
  const [roadmapOpen, setRoadmapOpen] = useState(false);
  const [upskillOpen, setUpskillOpen] = useState(false);
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      className=" justify-center"
    >
      <SafeAreaView className="h-[100vh]">
        <View>
          <View className="flex-row items-center justify-center mt-14 h-[10vh]">
            <Text className="text-white text-3xl font-semibold">
              Work Smarter
            </Text>
            <Text className=" ml-2">
              <FontAwesomeIcon color="white" icon={faBriefcase} size={32} />
            </Text>
          </View>

          <View className="flex-row items-center justify-center px-14 mb-8">
            <Text className="text-white text-center">
              Smart insights, gathered from your Officeverse journey.
            </Text>
          </View>

          <View className="mx-auto h-[58vh] justify-content flex justify-around">
            <TouchableOpacity
              onPress={() => {
                setRoadmapOpen(true);
              }}
            >
              <AiCard desc="Roadmap your progress" icon={faUser} sizing={33} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setUpskillOpen(true);
              }}
            >
              <AiCard
                desc="Upskill yourself today"
                icon={faGraduationCap}
                sizing={43}
              />
            </TouchableOpacity>

            <Modal
              visible={roadmapOpen}
              animationType="slide"
              onRequestClose={() => {
                setRoadmapOpen(false);
              }}
            >
              <RoadMapGenerator setRoadmapOpen={setRoadmapOpen} />
            </Modal>

            <Modal
              visible={upskillOpen}
              animationType="slide"
              onRequestClose={() => {
                setUpskillOpen(false);
              }}
            >
              <Upskill setUpskillOpen={setUpskillOpen} />
            </Modal>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
