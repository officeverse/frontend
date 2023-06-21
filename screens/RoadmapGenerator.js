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
} from "react-native";
import axios from "axios";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { OPENAI_SECRET_KEY } from "@env";

export default function LinkedInGenerator({ setRoadmapOpen }) {
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
                                "You are a helpful assistant. Help to generate a roadmap to guide me on my learning journey. I will tell you what it is about next.",
                        },
                        {
                            role: "user",
                            content: `I wan to learn about ${text}`,
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
                <View className="h-screen">
                    <TouchableOpacity
                        onPress={() => {
                            setRoadmapOpen(false);
                        }}
                        className="mt-8"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} size={20} />
                    </TouchableOpacity>

                    <Text className="text-2xl my-4 text-center font-semibold">
                        Personalized Learning Roadmaps{" "}
                    </Text>
                    <Text className="text-center text-base">
                        Your Guided Path to Knowledge
                    </Text>
                    <View className="my-4 w-3/4 mx-auto">
                        <TextInput
                            placeholderTextColor={"gray"}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder="Enter item to learn."
                            className="mx-2 rounded-lg bg-blue-100 px-10 py-4"
                        ></TextInput>
                    </View>
                    <TouchableOpacity
                        onPress={generatePost}
                        className="mx-auto bg-slate-800 p-2 rounded-md my-1 px-4"
                    >
                        <Text className="text-xl text-white font-semibold">
                            Generate Roadmap
                        </Text>
                    </TouchableOpacity>
                    {loading && <ActivityIndicator />}
                    {response && (
                        <ScrollView style={{ height: 200 }}>
                            <Text style={{ overflow: "scroll" }}>
                                {response}
                            </Text>
                        </ScrollView>
                    )}
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}
