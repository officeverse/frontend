import React from 'react';
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
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane';
import { useSelector } from 'react-redux';

export default function Login({ navigation }) {
  const [number, onChangeNumber] = React.useState('');
  const user = useSelector((state) => state.auth.user);
  const { username } = user.attributes;
  const pressHandler = () => {
    Alert.alert(
      'NOTE!',
      'Do read each section carefully as you are unable to navigate back once you move forward',
      [{ text: 'OK' }]
    );
    navigation.navigate('StartTour');
  };
  return (
    <SafeAreaView className="h-[100vh]">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View className="mt-32">
            <Text className="text-center text-3xl font-semibold">
              Hello, {username}.
            </Text>
            <Text className="text-center text-lg text-gray-400 mt-3 font-medium">
              Enter your company code
            </Text>
          </View>
          <View className="flex-row justify-center ">
            <TextInput
              onChangeText={onChangeNumber}
              value={number}
              placeholder="eg. 120348"
              keyboardType="numeric"
              className=" rounded-lg bg-blue-100 px-4 py-4 w-[55vw] mt-5 mb-20 "
            />

            <TouchableOpacity onPress={pressHandler} className="">
              <Text className="mt-9 ml-4">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  size={28}
                  color={'#BFE0FF'}
                  bounce
                />
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <Image
              style={styles.forest}
              source={require('../assets/LoginForest.png')}
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
    resizeMode: 'cover',
  },
});
