import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import Animated, { set, cond, eq, add, event } from "react-native-reanimated";
import Character from "../components/Character";

const image = require("../assets/landscape_populated.png");

export default function Leaderboard({ navigation }) {
  const [visible, setVisible] = useState(false);
  const openModal = () => setVisible(true);
  const closeModal = () => setVisible(false);

  // Declare animated values
  const dragX = new Animated.Value(0);
  const dragY = new Animated.Value(0);
  const gestureState = new Animated.Value(-1);

  // Reset position on release
  const onGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: dragX,
          translationY: dragY,
          state: gestureState,
        },
      },
    ],
    { useNativeDriver: true }
  );

  const afterDrag = cond(eq(gestureState, State.END), [
    set(dragX, add(dragX, 0)),
    set(dragY, add(dragY, 0)),
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={openModal}>
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
            transform: [
              {
                translateX: dragX,
              },
              {
                translateY: dragY,
              },
            ],
          }}
        >
          <ImageBackground
            source={image}
            style={{ flex: 1 }}
            resizeMode="cover"
          >
            <Character />
            <Modal isVisible={visible} style={styles.modalContent}>
              <ScrollView style={styles.scrollContent}>
                <Text style={styles.menuItem}>Item 1</Text>
                <Text style={styles.menuItem}>Item 2</Text>
                <Text style={styles.menuItem}>Item 3</Text>
                <TouchableOpacity style={styles.button} onPress={closeModal}>
                  <Text style={styles.buttonText}>Close</Text>
                </TouchableOpacity>
              </ScrollView>
            </Modal>
          </ImageBackground>
        </Animated.View>
      </PanGestureHandler>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    backgroundColor: "white",
    maxHeight: Dimensions.get("window").height * 0.6, // 60% of screen height
    padding: 20,
  },
  scrollContent: {
    flex: 1,
  },
  menuItem: {
    padding: 10,
    alignContent: "center",
  },
  buttonContainer: {
    position: "absolute",
    top: 50, // Change this value according to your preference
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
    zIndex: 999,
  },
  button: {
    backgroundColor: "rgba(255,255,255,1)",
    padding: 10,
    borderRadius: 0,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
  },
});
