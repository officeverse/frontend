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
} from "react-native";
import axios from "axios";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { OPENAI_SECRET_KEY } from "@env";

export default function LinkedInGenerator({ setLinkedInOpen }) {
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
                                "You are a helpful assistant. Help to generate a professional linkedIn post. I will tell you what it is about next.",
                        },
                        {
                            role: "user",
                            content: `It is about ${text}`,
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
        <SafeAreaView className="mx-auto w-5/6 h-screen">
            <TouchableOpacity
                onPress={() => {
                    setLinkedInOpen(false);
                }}
            >
                <FontAwesomeIcon icon={faArrowLeft} size={20} />
            </TouchableOpacity>

            <Text className="text-xl my-4 text-center font-semibold">
                LinkedIn Post Generator
            </Text>
            <Text className="text-center">
                Generate Engaging Posts in a Snap
            </Text>
            <View className="my-4 w-3/4 mx-auto">
                <TextInput
                    placeholderTextColor={"gray"}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Enter post description."
                    className="mx-2 rounded-lg bg-blue-100 px-10 py-4"
                ></TextInput>
            </View>
            <TouchableOpacity
                onPress={generatePost}
                className="mx-auto bg-slate-800 p-2 rounded-md my-1 px-4"
            >
                <Text className="text-xl text-white font-semibold">
                    Generate
                </Text>
            </TouchableOpacity>
            {loading && <ActivityIndicator />}
            {response && (
                <TextInput
                    className="h-3/4 px-8 font-semibold my-4"
                    multiline={true}
                    numberOfLines={10}
                    value={response}
                ></TextInput>
            )}
        </SafeAreaView>
    );
}
