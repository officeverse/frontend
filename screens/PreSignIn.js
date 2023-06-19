import { ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
import Button from '../components/Button';
const image = require('../assets/background.png');

export default function PreSignIn({ navigation }) {
  const onButtonLogin = () => {};
  const onButtonSignUp = () => {};

  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      className=" justify-center"
    >
      <SafeAreaView className="h-[100vh] mt-8">
        <View className="flex-row items-center justify-center mt-16">
          <Text className="text-5xl font-bold color-white">Officeverse.</Text>
        </View>
        <View className="flex-row items-center justify-center mt-16 px-2">
          <Button title="Log In" onPress={onButtonLogin} />
          <Text>{'   '}</Text>
          <Button title="Sign Up" onPress={onButtonSignUp} type="secondary" />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
