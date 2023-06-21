import React, { useState, useRef } from "react";
import {
  View,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Button
} from "react-native";
import Modal from "react-native-modal";
import {
  PanGestureHandler,
  State,
  PanGestureHandlerStateChangeEvent,
} from "react-native-gesture-handler";
import Animated, {
  Value,
  event,
  block,
  set,
  cond,
  eq,
  and,
  not,
  greaterThan,
  lessThan,
  add,
  useCode,
  call,
} from "react-native-reanimated";


import Character from "../components/Character";

import Player from '../components/Player'; // Import Player component
const avatarDetails = ({
    fit: 1,
    glasses: 1,
    hair: 1,
    base: 1,
});

const image = require("../assets/landscape_populated.png");

const imageWidth = 900;
const imageHeight = 1200;

// Get the screen dimensions
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const Leaderboard = ({ navigation }) => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);  // for the inner modal
  const [characterPopupOpen, setCharacterPopupOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const openModal = () => setVisible(true);
  const closeModal = () => setVisible(false);

  const offsetX = useRef(new Value(-(imageWidth - screenWidth) / 2)).current;
  const offsetY = useRef(new Value(-(imageHeight - screenHeight) / 2)).current;  
  const translationX = useRef(new Value(0)).current;
  const translationY = useRef(new Value(0)).current;
  const gestureState = useRef(new Value(-1)).current;

  const translateX = cond(
    and(
      greaterThan(add(translationX, offsetX), -(imageWidth - screenWidth)),
      lessThan(add(translationX, offsetX), 0)
    ),
    add(translationX, offsetX),
    cond(
      lessThan(add(translationX, offsetX), -(imageWidth - screenWidth)),
      -(imageWidth - screenWidth),
      0
    )
  );

  const translateY = cond(
    and(
      greaterThan(add(translationY, offsetY), -(imageHeight - screenHeight)),
      lessThan(add(translationY, offsetY), 0)
    ),
    add(translationY, offsetY),
    cond(
      lessThan(add(translationY, offsetY), -(imageHeight - screenHeight)),
      -(imageHeight - screenHeight),
      0
    )
  );

  useCode(() => {
    return block([
      cond(
        eq(gestureState, State.END),
        [set(offsetX, translateX), set(offsetY, translateY)],
        [set(offsetX, offsetX), set(offsetY, offsetY)]
      ),
    ]);
  }, []);

  const onGestureEvent = event(
    [
      {
        nativeEvent: {
          translationX: translationX,
          translationY: translationY,
          state: gestureState,
        },
      },
    ],
    { useNativeDriver: true }
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity className="bg-white mt-2 p-2 rounded-lg bg-white" onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white mt-2 p-2 ml-4 rounded-lg" onPress={openModal}>
          <Text style={styles.buttonText}>Leaderboard</Text>
        </TouchableOpacity>
      </View>
      <PanGestureHandler
        maxPointers={1}
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onGestureEvent}
      >
        <Animated.View
          style={{
            flex: 1,
            transform: [{ translateX: translateX }, { translateY: translateY }],
          }}
        >
          <ImageBackground
            source={image}
            style={{ width: imageWidth, height: imageHeight }}
          >
            <Character setCharacterPopupOpen={setCharacterPopupOpen} characterPopupOpen={characterPopupOpen}/>
            <Modal isVisible={visible} style={styles.modalContent}>
            <ScrollView style={styles.scrollContent}>
                {players.map((player, index) => (
                    <TouchableOpacity key={index} style={styles.item} onPress={() => setSelectedPlayer(player)}>
                      <Player avatarDetails={avatarDetails} />
                      <Text style={styles.username}>{player.username}</Text>
                      <Text style={styles.weeklyExp}>{player.weeklyExp} EXP</Text>
                    </TouchableOpacity>
                
                ))}
            </ScrollView>
            <View style={styles.centered}>
                <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                    <Text style={styles.buttonText}>Close</Text>
                </TouchableOpacity>
            </View>
            </Modal>
          
            <Modal  // modal inside modal
                visible={!!selectedPlayer} // visible when selectedPlayer is not null
                animationType="slide"
                transparent={true}
            >
                <View style={styles.popupContainer}>
                    <View style={styles.popupContent}>
                        <View>
                            <Player avatarDetails={avatarDetails} />
                            <View>
                                <View>
                                    <Text>{selectedPlayer?.username}</Text>
                                </View>
                                <Text>
                                    {selectedPlayer?.weeklyExp} EXP
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            title="Close"
                            onPress={() => setSelectedPlayer(null)} // reset selectedPlayer to null when closing the modal
                        />
                    </View>
                </View>
            </Modal>
          </ImageBackground>
        </Animated.View>
      </PanGestureHandler>
    </SafeAreaView>
  );
};

export default Leaderboard;


const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    backgroundColor: 'white',
    maxHeight: Dimensions.get('window').height * 0.6, // 60% of screen height
    padding: 20,
  },
  scrollContent: {
    flex: 1,
  },
  menuItem: {
    padding: 10,
    alignContent: "center"
  },
  buttonContainer: {
    position: 'absolute',
    top: 20,
    flexDirection: 'row',
    justifyContent: "flex-start",
    width: '100%',
    paddingHorizontal: 0,
    zIndex: 999
  },
  leaderButton: {
    backgroundColor: 'rgba(255,255,255,1)',
    padding: 110,
    paddingVertical:10,
    borderRadius: 0,
  },
  closeButton: {
    backgroundColor: 'rgba(255,255,255,1)',
    padding: 10,
    borderRadius: 0,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 10,
  },
  Player: {
    width: 50,
    height: 50,
    borderRadius: 25, // half of width and height to create a circle
  },
  username: {
    flex: 1, // this will allow the name to take up remaining space and push the EXP to the right
    paddingLeft: 10,
  },
  weeklyExp: {
    paddingRight: 10,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContainer: { // for inner modal
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 10,
  },
  popupContent: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
  }
});



const players = [ //...just hardcoded for now
    { 
      position: 1,
      id: 123,
      username: "Mailey Zyrus",
      weeklyExp: 3450,
      weeklyCoins: 56,
      avatar: require("../assets/game_images/player.png"),
      
    },
    {
        position: 3,
        id: 124,
        username: "Andy Lim",
        weeklyExp: 3210,
        weeklyCoins: 23,
        avatar: require("../assets/game_images/player.png"),
    },
    {
        position: 2,
        id: 690,
        username: "Babybear380",
        weeklyExp: 3300,
        weeklyCoins: 94,
        avatar: require("../assets/game_images/player.png"),
    },
    //... more players
  ];