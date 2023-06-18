import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import React, { useState, useRef } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";

const image = require("../assets/background.png");

export default function ApplyLeave({navigation}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "MC", value: "MC" },
    { label: "Leave", value: " Leave" },
  ]);

  const handleButtonPress = () => {
    Alert.alert(
      "Sucessfully Submitted!",
      "We will process your leave as soon as possible",
      [{ text: "OK" }]
    );
  };

  const [name, onChangeName] = React.useState("");

  const goback = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 "
    >
      <ImageBackground
        source={image}
        resizeMode="cover"
        className=" justify-center"
      >
        <SafeAreaView className="h-[100vh]">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              <TouchableOpacity onPress={goback} className="ml-5 flex-row mb-4 mt-2">
                <Text className="text-white mt-1 mr-2">
                  <FontAwesomeIcon
                    color={"white"}
                    icon={faArrowLeft}
                    size={24}
                  />
                </Text>
                <Text className="text-lg font-semibold text-white">Back</Text>
              </TouchableOpacity>

              <View className="flex-row items-center justify-center">
                <Text className="text-3xl mb-3 font-semibold text-white">
                  Apply Leave
                </Text>
              </View>

              <View className="text-white items-center justify-center mb-1 mt-2">
                <Text className="text-white text-base "> Full Name</Text>
              </View>

              <View className=" mt-1">
                <TextInput
                  //   onChangeName={onChangeNumber}
                  value={name}
                  placeholder="eg. John Doe"
                  className="mx-10 rounded-lg bg-white text-black px-4 py-4"
                ></TextInput>
              </View>

              <View className="text-white items-center justify-center mb-1 mt-12">
                <Text className="text-white text-base "> Department</Text>
              </View>

              <View className=" mt-1">
                <TextInput
                  //   onChangeName={onChangeNumber}
                  value={name}
                  placeholder="eg. Marketing"
                  className="mx-10 rounded-lg bg-white text-black px-4 py-4"
                ></TextInput>
              </View>

              <View className="text-white items-center justify-center mb-1 mt-14">
                <Text className="text-white text-base ">
                  {" "}
                  Duration of Leave
                </Text>
              </View>

              <View className=" mt-1">
                <TextInput
                  //   onChangeName={onChangeNumber}
                  value={name}
                  placeholder="eg. 02 March 2023 - 04 March 2023"
                  className="mx-10 rounded-lg bg-white text-black px-4 py-4"
                ></TextInput>
              </View>

              <View>
                <View className="text-white flex-row items-center justify-center mb-1 mt-12">
                  <Text className="text-white text-base">Type of Leave</Text>
                </View>
                <View className="px-10 mt-1">
                  <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                  />
                </View>
              </View>

              <View className="flex-row justify-center mx-auto">
                <TouchableOpacity
                  onPress={handleButtonPress}
                  className="justify-center mx-auto mt-8 flex-row mb-4"
                >
                  {/* <Text className="text-white mt-1 mr-2">
            <FontAwesomeIcon color={"white"} icon={faArrowLeft} size={24} />
          </Text> */}
                  <Text className="text-xl font-semibold text-white">
                    Submit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}
