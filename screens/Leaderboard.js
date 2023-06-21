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

const image = require("../assets/landscape_populated.png");

// Assume the dimensions of your image
const imageWidth = 900;
const imageHeight = 1200;

// Get the screen dimensions
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const Leaderboard = ({ navigation }) => {
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
        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.leaderButton} onPress={openModal}>
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
            <Character  setCharacterPopupOpen={setCharacterPopupOpen}/>
            <Modal isVisible={visible} style={styles.modalContent}>
              <ScrollView style={styles.scrollContent}>
                <Text style={styles.menuItem}>Mailey Zyrus</Text>
                <Text style={styles.menuItem}>Andy Lim</Text>
                <Text style={styles.menuItem}>Babybear380 (You)</Text>
                <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                  <Text style={styles.buttonText}>Close</Text>
                </TouchableOpacity>
              </ScrollView>
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
    top: 50,  // Change this value according to your preference
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
});