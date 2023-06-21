import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Modal,
  Button,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import { useState, useRef, useEffect } from 'react';
import WheelOfFortune from 'react-native-wheel-of-fortune';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDharmachakra } from '@fortawesome/free-solid-svg-icons/faDharmachakra';
import Character from '../components/Character';
import { useDispatch, useSelector } from 'react-redux';
import QRCodeStyled from 'react-native-qrcode-styled';
import Svg, {
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  Path,
} from 'react-native-svg';
import { setLeaderboards } from '../src/features/leaderboardSlice';

import axios from 'axios';
const image = require('../assets/office_home.png');
const wheelImage = require('../assets/mockaroon-lgi3W65lmvA-unsplash.jpg');

const min = 0;
const max = 100;
const count = 50;

const generateRandomNumbers = (min, max, count) => {
  const randomNumbers = [];
  for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumbers.push(randomNumber);
  }

  return randomNumbers;
};
const rewards = generateRandomNumbers(min, max, count);

export default function Home({ navigation }) {
  const wheelRef = useRef(null);

  const user = useSelector((state) => state.auth.user);
  const { username } = user.attributes;
  const [dailyWheelOpen, setDailyWheelOpen] = useState(false);
  const [characterPopupOpen, setCharacterPopupOpen] = useState(false);
  const [prize, setPrize] = useState('');
  const [userData, setUserData] = useState('');
  const dispatch = useDispatch();

  const sub = user.sub;

  useEffect(() => {
    console.log('getting details');
    let profileConfig = {
      method: 'get',
      maxBodyLength: Infinity,
      url:
        'https://12khg2a8xi.execute-api.ap-south-1.amazonaws.com//users/profile?cognitoSub' +
        sub,
      headers: {},
    };

    axios
      .request(profileConfig)
      .then((response) => {
        console.log(response.data);
        setUserData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });

    const leaderboardConfig = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://12khg2a8xi.execute-api.ap-south-1.amazonaws.com/users/leaderboards',
      headers: {},
    };

    axios
      .request(leaderboardConfig)
      .then((response) => {
        dispatch(setLeaderboards(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const closeDailyWheel = () => {
    setDailyWheelOpen(false);
  };

  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      className=" justify-center"
    >
      {/* FORTUNE WHEEL POPUP */}
      <Modal
        visible={dailyWheelOpen}
        animationType="slide"
        onRequestClose={closeDailyWheel}
      >
        <ImageBackground
          source={wheelImage}
          resizeMode="cover"
          className=" justify-center"
        >
          <View className="my-auto mx-auto h-full ">
            <WheelOfFortune
              options={{
                rewards,
                knobSize: 30,
                borderWidth: 4,
                borderColor: '#fff',
                innerRadius: 30,
                duration: 6000,
                backgroundColor: 'black',
                textAngle: 'vertical',
                knobSource: require('../assets/images/knob.png'),
                getWinner: (value, index) => {
                  // this.setState({
                  //     winnerValue: value,
                  //     winnerIndex: index,
                  // });
                  setPrize(value);
                  Alert.alert('Congratulations!', `You won ${value} coins!`, [
                    { text: 'Claim' },
                  ]);
                },
                onRef: (ref) => (wheelRef.current = ref),
              }}
            />
          </View>
          <View className="mb-16 py-4 bg-white justify-center mx-auto w-[80vw] rounded-lg">
            <Text className="px-6 text-center text-black text-xl font-semibold mx-auto ">
              Spin to win coins!
            </Text>
            <View className="bg-slate-800 rounded-lg w-auto mx-auto p-2 my-4">
              <TouchableOpacity
                className="p-1 px-3"
                onPress={() => {
                  wheelRef.current._onPress();
                }}
              >
                <Text className="text-lg text-white">Spin The Wheel</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={closeDailyWheel}>
              <Text className="mx-auto underline">Close</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </Modal>
      <SafeAreaView className="h-[100vh]">
        <View className="items-center justify-center mt-16">
          <Text className="text-5xl font-bold color-white">Officeverse.</Text>
        </View>
        <View className=" items-center justify-center mt-3">
          <Text className="text-2xl font-medium color-white">
            Welcome back,
          </Text>
          <Text className="text-2xl mb-6 font-medium color-white">
            {username}.
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            setDailyWheelOpen(true);
          }}
          className="mx-auto flex flex-row justify-center items-center bg-slate-800 p-2 px-4 rounded-lg"
        >
          <FontAwesomeIcon color={'white'} icon={faDharmachakra} size={32} />
          <Text className="text-white mx-2">Daily Spin</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            position: 'absolute',
            left: '20%',
            top: '42%',
            width: '60%',
            height: '30%',
            justifyContent: 'flex-end', // Aligns children at the bottom of the view
            alignItems: 'center', // Centers children horizontally
          }}
          onPress={() => {
            navigation.navigate('Leaderboard');
          }}
        >
          <Text className="text-white font-semibold flex justify-center items-center">
            Tap to enter office
          </Text>
        </TouchableOpacity>
        <Character
          setCharacterPopupOpen={setCharacterPopupOpen}
          characterPopupOpen={characterPopupOpen}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popupContent: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  popupText: {
    fontSize: 18,
    marginBottom: 8,
  },
});
