import { ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
const image = require('../assets/background.png');
import SignUpForm from '../components/SignUpForm';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Auth } from 'aws-amplify';
import { useDispatch } from 'react-redux';
import { createNewUser } from '../src/features/authSlice';

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();

  const onSignUp = async (data) => {
    const { email, firstName, lastName, password, username } = data;
    Auth.signUp({
      username,
      password,
      attributes: {
        email,
        given_name: firstName,
        family_name: lastName,
      },
      autoSignIn: {
        enabled: true,
      },
    })
      .then((result) => {
        const { userSub, userConfirmed } = result;
        dispatch(
          createNewUser({
            signUpResult: {
              userSub,
              userConfirmed,
            },
            attributes: {
              email,
              firstName,
              lastName,
              username,
            },
          })
        );
        navigation.reset({
          index: 0,
          routes: [{ name: 'SignUpConfirmEmail' }],
        });
      })
      .catch((err) => {
        console.error('Error occurred during sign up');
        throw err;
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
            <Text className="text-5xl font-bold color-white">Officeverse.</Text>
          </View>
          <SignUpForm navigation={navigation} onSubmit={onSignUp} />
        </SafeAreaView>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
}
