import { Alert, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
const image = require('../assets/background.png');
import SignUpConfirmEmailForm from '../components/SignUpConfirmEmailForm';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Auth } from 'aws-amplify';
import { useDispatch, useSelector } from 'react-redux';
import { setEmailVerified } from '../src/features/authSlice';

export default function SignUp({ navigation }) {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const { isNewSignUp } = user;
  const { username, email } = user.attributes;

  const onSignUpConfirm = async (data) => {
    return Auth.confirmSignUp(username, data.confirmationCode)
      .then(() => {
        dispatch(setEmailVerified());
        navigation.reset({
          index: 0,
          routes: [
            {
              // if user has verified email but not logged in
              name: isNewSignUp ? 'OnboardingMain' : 'PreSignIn',
            },
          ],
        });
      })
      .catch((error) => {
        console.log('error confirming sign up', error);
        Alert.alert('Unable to confirm code. Try again');
      });
  };

  const onRequestResend = async () => {
    return Auth.resendSignUp(username)
      .then(() => {
        Alert.alert('Resent verification code to ' + email);
      })
      .catch((err) => {
        console.error(err);
        Alert.alert('Error resending code: ' + err);
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
          <SignUpConfirmEmailForm
            navigation={navigation}
            onSubmit={onSignUpConfirm}
            onRequestResend={onRequestResend}
            email={user.attributes.email}
          />
        </SafeAreaView>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
}
