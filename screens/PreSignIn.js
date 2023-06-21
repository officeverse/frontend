import { Alert, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
const image = require("../assets/background.png");
import LoginForm from "../components/LoginForm";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Auth } from "aws-amplify";
import { loginUser, setUsername } from "../src/features/authSlice";
import { useDispatch, useSelector } from "react-redux";

export default function PreSignIn({ navigation }) {
    const hasCompletedOnboarding = useSelector(
        (state) => state.auth.user.hasCompletedOnboarding
    );
    const dispatch = useDispatch();
    const onLogin = async (data) => {
        const { username, password } = data;
        Auth.signIn(username, password)
            .then((user) => {
                const { attributes, username } = user;
                const {
                    email,
                    family_name: lastName,
                    given_name: firstName,
                    sub,
                } = attributes;
                dispatch(
                    loginUser({
                        sub,
                        isEmailVerified: true,
                        attributes: { email, lastName, firstName, username },
                    })
                );
                navigation.reset({
                    index: 0,
                    routes: [
                        {
                            name: hasCompletedOnboarding
                                ? "NavBar"
                                : "OnboardingMain",
                        },
                    ],
                });
            })
            .catch(async (err) => {
                if (err.message === "User is not confirmed.") {
                    dispatch(setUsername(username));
                    // resend code
                    await Auth.resendSignUp(username).catch((err) => {
                        Alert.alert("Error resending code: " + err);
                    });
                    navigation.reset({
                        index: 0,
                        routes: [{ name: "SignUpConfirmEmail" }],
                    });
                    return;
                }
                Alert.alert("Error: " + err);
            });
    };

    return (
        <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled={true}
        >
            <ImageBackground
                source={image}
                resizeMode="cover"
                className=" justify-center"
            >
                <SafeAreaView className="h-[100vh] mt-8">
                    <View className="flex-row items-center justify-center mt-16">
                        <Text className="text-5xl font-bold color-white">
                            Officeverse.
                        </Text>
                    </View>
                    <LoginForm navigation={navigation} onSubmit={onLogin} />
                </SafeAreaView>
            </ImageBackground>
        </KeyboardAwareScrollView>
    );
}
