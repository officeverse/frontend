import { ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
const image = require('../assets/background.png');
import SignUpForm from '../components/SignUpForm';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function SignUp({ navigation }) {
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
          <SignUpForm navigation={navigation} />
        </SafeAreaView>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
}
