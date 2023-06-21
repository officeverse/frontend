import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Modal,
  KeyboardAvoidingView,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollViewBase,
} from "react-native";
import axios from "axios";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { OPENAI_SECRET_KEY } from "@env";

export default function Upskill({ setUpskillOpen }) {
  const [text, onChangeText] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const generatePost = async () => {
    try {
      console.log("Generating");
      setLoading(true);
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "You are a helpful assistant. Help to generate a list of upskilling course recommendations. I will tell you what it is about next.",
            },
            {
              role: "user",
              content: `My interests lies in ${text}`,
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.OPENAI_SECRET_KEY}`,
          },
        }
      );
      setLoading(false);
      setResponse(response.data.choices[0].message.content);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <SafeAreaView className="mx-auto w-5/6">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView className="h-screen">
          <TouchableOpacity
            onPress={() => {
              setUpskillOpen(false);
            }}
            className="mt-8"
          >
            <FontAwesomeIcon icon={faArrowLeft} size={20} />
          </TouchableOpacity>

          <Text className="text-2xl my-4 text-center font-semibold">
            Personalised Course Recommendations
          </Text>
          <Text className="text-center text-base">
            Get recommendations tailored to your interests today
          </Text>
          <View className="my-4 w-3/4 mx-auto">
            <TextInput
              placeholderTextColor={"gray"}
              onChangeText={onChangeText}
              value={text}
              placeholder="eg. My interest lies in..."
              className="mx-2 rounded-lg bg-gray-200 px-6 py-4"
            ></TextInput>
          </View>
          <TouchableOpacity
            onPress={generatePost}
            className="mx-auto bg-blue-200 p-2 px-8 rounded-md my-1 shadow-xl"
          >
            <Text className="text-lg text-slate-800 font-semibold">
              Generate Courses
            </Text>
          </TouchableOpacity>
          {loading && <ActivityIndicator />}
          {response && (
            <View className="mb-20 mt-4 bg-gray-700 p-4 rounded-lg">
              <Text className="text-center text-base text-white">
                {response}
              </Text>
            </View>
          )}
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
