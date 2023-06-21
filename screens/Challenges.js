import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Modal,
  Image,
  ImageBackground,
  Dimensions,
  TextInput,
} from "react-native";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons/faDumbbell";
import axios from "axios";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { generateLinkedInPost } from "../helper/linkedIn";

const image = require("../assets/background.png");
const challengesUrl =
  "https://12khg2a8xi.execute-api.ap-south-1.amazonaws.com/challenges?page=1&limit=100";

const initialLayout = { width: Dimensions.get("window").width };

const AvailableChallengesScreen = ({ challenges, renderItem }) => (
  <ImageBackground
    source={image}
    resizeMode="cover"
    className=" justify-center"
  >
    <SafeAreaView className="h-[100vh]">
      <View className="h-[8vh] mt-14">
        <View className="flex-row items-center justify-center ">
          <Text className="text-3xl mb-3 font-semibold text-white">
            Challenges
          </Text>
          <Text className="mb-2 ml-2">
            <FontAwesomeIcon icon={faDumbbell} size={32} color="white" />
          </Text>
        </View>
        <View className="flex-row items-center justify-center ">
          <Text className="text-white">Gain EXP and BBC coins today!</Text>
        </View>
      </View>
      <FlatList
        className="mb-[55px] mt-20"
        data={challenges}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}

        // extraData={selectedId}
      />
    </SafeAreaView>
  </ImageBackground>
);
const CompletedChallengesScreen = ({ challenges, renderItem }) => (
  <ImageBackground
    source={image}
    resizeMode="cover"
    className=" justify-center"
  >
    <SafeAreaView className="h-[100vh]">
      <View className="h-[8vh] mt-14">
        <View className="flex-row items-center justify-center ">
          <Text className="text-3xl mb-3 font-semibold text-white">
            Challenge
          </Text>
          <Text className="mb-2 ml-2">
            <FontAwesomeIcon icon={faDumbbell} size={32} color="white" />
          </Text>
        </View>
        <View className="flex-row items-center justify-center mb-3 ">
          <Text className="text-white">Gain EXP and BBC coins today!</Text>
        </View>
      </View>
      <FlatList
        className="mb-[55px] mt-20"
        data={challenges}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  </ImageBackground>
);

export default function Challenges() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isCompletedPopupVisible, setCompletedPopupVisible] = useState(false);
  const [challenges, setChallenges] = useState([]);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "available", title: "Available" },
    { key: "completed", title: "Completed" },
  ]);
  const [post, setPost] = useState("");
  const [postLoading, setPostLoading] = useState(false);

  const renderScene = SceneMap({
    available: () => (
      <AvailableChallengesScreen
        challenges={challenges}
        renderItem={renderItem}
      />
    ),
    completed: () => (
      <CompletedChallengesScreen
        challenges={challenges}
        renderItem={renderCompletedItem}
      />
    ),
  });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "white", height: 3 }}
      labelStyle={{
        fontSize: 15,
        fontWeight: "bold",
        textTransform: "none",
      }}
      className="bg-transparent h-[50px]"
      style={{
        position: "absolute",
        top: 150,
        width: "100%",
      }}
    />
  );

  const getChallenges = () => {
    axios
      .get(challengesUrl)
      .then((response) => {
        setChallenges([...response.data.data.challenges]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log("Loading challenges");
    getChallenges();
  }, []);

  const renderItem = ({ item }) => {
    const openPopup = () => {
      setPopupVisible(item.id);
    };

    const closePopup = () => {
      setPopupVisible(null);
    };

    const isPopupOpen = isPopupVisible === item.id;

    return (
      <TouchableOpacity onPress={openPopup}>
        <View
          className="bg-white rounded-xl w-full max-w-xs mx-auto my-4 mt-20"
          style={[
            {
              shadowColor: "black",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            },
          ]}
        >
          <Image
            source={{ uri: item.imageDataUrl }}
            className="w-full h-64 rounded-t-xl"
            resizeMode="cover"
          />

          <View className="p-6">
            <Text className="text-slate-900 text-lg font-bold">
              {item.name}
            </Text>
            <Text className="mt-1 text-sm text-stone-400">
              + {item.reward} EXP
            </Text>
          </View>
        </View>

        <Modal
          visible={isPopupOpen}
          animationType="slide"
          onRequestClose={closePopup}
        >
          {/* Content of the pop-up */}
          <ImageBackground
            source={{ uri: item.imageDataUrl }}
            resizeMode="cover"
            className=" justify-center"
          >
            <View className="flex flex-col mx-auto h-[100vh] px-10">
              <View className="my-auto bg-slate-800 py-5 rounded-xl">
                <Text className="text-center text-blue-200 px-5 text-2xl font-bold">
                  {item.name}
                </Text>
                <Text className="text-white text-base text-center my-2 px-10">
                  {item.description}
                </Text>
                <TouchableOpacity
                  className="py-4 rounded-lg bg-blue-100 w-[150px] mx-auto mt-4"
                  onPress={() => {}}
                >
                  <Text className="text-black font-semibold text-center">
                    Start Challenge
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={closePopup} className="mt-4">
                  <Text className="text-blue-200 font-semibold text-center">
                    Close
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </Modal>
      </TouchableOpacity>
    );
  };

  const renderCompletedItem = ({ item }) => {
    const openPopup = () => {
      setCompletedPopupVisible(item.id);
    };

    const closePopup = () => {
      setCompletedPopupVisible(null);
    };

    const isPopupOpen = isCompletedPopupVisible === item.id;

    return (
      <View>
        <View
          className="bg-slate-600 rounded-xl w-full max-w-xs mx-auto my-4"
          style={[
            {
              shadowColor: "black",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            },
          ]}
        >
          <View className="p-6 rounded-lg mx-auto justify-center">
            <Text className=" text-white text-lg font-bold">{item.name}</Text>
            <View className="flex-row items-center mt-4 mx-auto justify-center">
              <TouchableOpacity
                className="bg-white p-2 rounded-lg "
                onPress={async () => {
                  setPostLoading(true);
                  openPopup();
                  const data = await generateLinkedInPost(item.description);
                  setPost(data);
                  setPostLoading(false);
                }}
              >
                <Text className="font-bold">Claim Rewards</Text>
              </TouchableOpacity>
              <Text className="ml-2 text-sm text-stone-200 ml-20">
                + {item.reward} EXP
              </Text>
            </View>
          </View>
        </View>
        <Modal
          visible={isPopupOpen}
          animationType="slide"
          onRequestClose={closePopup}
        >
          {/* Content of the pop-up */}
          <ImageBackground
            source={require("../assets/jason-leung-Xaanw0s0pMk-unsplash.jpg")}
            resizeMode="cover"
            className=" justify-center"
          >
            <View className="flex flex-col mx-auto h-[100vh] px-4">
              <View className="my-auto bg-slate-800 py-5 rounded-xl">
                <Text className="text-center text-white px-5 text-2xl font-bold">
                  Congratulations!
                </Text>
                <Text className="text-center text-blue-200 px-5 font-semibold">
                  Share your achievement!
                </Text>
                {post ? (
                  <TextInput
                    className="text-white mx-auto h-[40vh] p-8"
                    value={post}
                    multiline={true}
                  />
                ) : (
                  <Text className="mx-auto text-white p-8 mt-4">
                    Generating your personal LinkedIn post...
                  </Text>
                )}
                <TouchableOpacity
                  className="py-4 rounded-lg bg-blue-100 w-[150px] mx-auto mt-4"
                  onPress={() => {}}
                >
                  <Text className="text-black font-semibold text-center text-base">
                    Share and Claim
                  </Text>
                </TouchableOpacity>
                <Text className="text-base mx-auto mt-2 underline text-stone-200">
                  Claim rewards only
                </Text>
                <TouchableOpacity onPress={closePopup} className="mt-4">
                  <Text className="text-blue-200 font-semibold text-center">
                    Close
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </Modal>
      </View>
    );
  };

  return challenges.length >= 1 ? (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  ) : (
    <ImageBackground
      source={image}
      resizeMode="cover"
      className=" justify-center"
    >
      <SafeAreaView className="h-[100vh]">
        <Text className="mx-auto text-white text-xl mt-80">
          Loading challenges...
        </Text>
      </SafeAreaView>
    </ImageBackground>
  );
}
