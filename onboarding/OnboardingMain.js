import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { useSelector } from "react-redux";
import SignOutButton from "../components/SignOutButton";

export default function Login({ navigation }) {
  const [number, onChangeNumber] = React.useState("");
  const user = useSelector((state) => state.auth.user);
  const { username } = user.attributes;
  const pressHandler = () => {
    Alert.alert(
      "NOTE!",
      "Do read each section carefully as you are unable to navigate back once you move forward",
      [{ text: "OK" }]
    );
    navigation.navigate("StartTour");
  };
  return (
    <SafeAreaView className="h-[100vh]">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View className="mt-32">
            <Text className="text-center text-3xl font-semibold">
              Hello, {username}.
            </Text>
            <View className="mx-auto justify-center ">
              <Text className="text-center text-2xl text-gray-400 mb-6 mt-8 font-medium ">
                Welcome to Officeverse.
              </Text>

              <TouchableOpacity
                onPress={pressHandler}
                className=" mx-auto justify-center flex-row mb-20 mt-2"
              >
                <Text
                  className=" text-2xl font-bold"
                  style={{ color: "#72CCFF" }}
                >
                  Proceed
                </Text>
                <Text className="mt-1 ml-2">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    size={28}
                    color={"#72CCFF"}
                    bounce
                  />
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Image
              style={styles.forest}
              source={require("../assets/LoginForest.png")}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  forest: {
    // width: 350,
    // height: 450,
    resizeMode: "cover",
  },
});
