import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons/faDumbbell";

export default function Challenges() {
  const challenge = [
    { title: "Completed an upskilling course", points: "+ 100 exp" },
    { title: "Completed XXX", points: "+ 50 EXP" },
    { title: "Helped with XXX", points: "+ 25 EXP" },
    { title: "Managed to XXX", points: "+ 25 EXP" },
    { title: "Finished XXX", points: "+ 30 EXP" },
    { title: "Finished XXX", points: "+ 30 EXP" },
    { title: "Finished XXX", points: "+ 30 EXP" },
    { title: "Finished XXX", points: "+ 30 EXP" },
    { title: "Managed to XXX", points: "+ 25 EXP" },
    { title: "Managed to XXX", points: "+ 25 EXP" },
  ];

  return (
    <SafeAreaView className="">
      <View className="flex-row items-center justify-center mt-8">
        <Text className="text-3xl mb-3 font-semibold">Challenges</Text>
        <Text className="mb-2 ml-2">
          <FontAwesomeIcon icon={faDumbbell} size={32} />
        </Text>
      </View>

      <View className="flex-row items-center justify-center mb-3">
        <Text>Gain EXP and BBC coins today!</Text>
      </View>

      {/* change to ensure navbar doesnt block challenges */}
      <ScrollView className="max-h-[73vh] overflow-hidden">
        {challenge.map((item, index) => (
          <View
            className=" bg-blue-100 items-center justify-center mb-6 px-5 py-2 rounded-lg"
            key={index}
          >
            <Text className="text-lg mb-1 font-medium">{item.title}</Text>
            <Text className="text-xs text-gray-600">{item.points}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
