import { ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
const image = require('../assets/background.png');
import LoginForm from '../components/LoginForm';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function PreSignIn({ navigation }) {
  const onLogin = () => {};

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
          <LoginForm navigation={navigation} onSubmit={onLogin} />
        </SafeAreaView>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
}
