import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Image,
  Animated,
  StyleSheet,
  Dimensions,
  Modal,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import Player from "./Player"; // Import Player component
const avatarDetails = {
  fit: 1,
  glasses: 1,
  hair: 1,
  base: 1,
};
import QRCodeStyled from "react-native-qrcode-styled";
import { useSelector } from "react-redux";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const Character = ({ setCharacterPopupOpen, characterPopupOpen }) => {
  const positionX = useRef(new Animated.Value(0)).current;
  const positionY = useRef(new Animated.Value(0)).current;
  const [flipped, setFlipped] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const { username } = user.attributes;

  useEffect(() => {
    const walkingAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(positionX, {
          toValue: 150, // Increased distance
          duration: 3000, // Increased duration
          useNativeDriver: true,
        }),
        Animated.delay(Math.random() * 3000 + 1000),
        Animated.timing(positionY, {
          toValue: 150, // Increased distance
          duration: 3000, // Increased duration
          useNativeDriver: true,
        }),
        Animated.delay(Math.random() * 3000 + 1000),
        Animated.timing(positionX, {
          toValue: 0,
          duration: 3000, // Increased duration
          useNativeDriver: true,
        }),
        Animated.delay(Math.random() * 3000 + 1000),
        Animated.timing(positionY, {
          toValue: 0,
          duration: 3000, // Increased duration
          useNativeDriver: true,
        }),
        Animated.delay(Math.random() * 3000 + 1000),
      ])
    );

    walkingAnimation.start();

    return () => {
      walkingAnimation.stop();
    };
  }, []);

  useEffect(() => {
    const listenerX = positionX.addListener(({ value }) => {
      if (value < 75 && flipped) {
        // Adjusted condition
        setFlipped(false);
      } else if (value >= 75 && !flipped) {
        // Adjusted condition
        setFlipped(true);
      }
    });

    return () => {
      positionX.removeListener(listenerX);
    };
  }, [flipped]);

  return (
    <View style={styles.characterContainer} className="absolute">
      <Animated.View
        style={[
          styles.character,
          {
            transform: [
              { translateX: positionX },
              { translateY: positionY },
              { scaleX: flipped ? -1 : 1 },
              { perspective: 1000 }, // For Android devices
            ],
          },
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            setCharacterPopupOpen(true);
          }}
        >
          <View className="w-[69px] h-[156px] scale-50">
            <Player avatarDetails={avatarDetails} />
          </View>
        </TouchableOpacity>
      </Animated.View>
      {/* CHARACTER POPUP */}
      <Modal
        visible={characterPopupOpen}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.popupContainer}>
          <View style={styles.popupContent} className="p-18">
            <View className="flex-row">
              <View className="w-[69px] h-[156px]">
                <Player avatarDetails={avatarDetails} />
              </View>
              <View className="ml-4">
                <View>
                  <Text className="mt-4 font-bold text-2xl">{username}</Text>
                </View>
                <Text className="font-semibold mt-3 text-lg">
                  Senior Software Engineer
                </Text>
              </View>
            </View>
            <View className="mx-auto justify-center">
              <QRCodeStyled
                data={`${username}`}
                style={{ backgroundColor: "white" }}
                padding={20}
                pieceSize={8}
              />
            </View>

            <Button
              title="Close"
              onPress={() => {
                console.log("test");
                setCharacterPopupOpen(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  characterContainer: {
    alignItems: "center",
    marginTop: screenHeight / 2 + 20,
    marginLeft: screenWidth / 2 - 40,
  },
  character: {
    flexDirection: "row",
    justifyContent: "center",
  },
  characterImage: {
    width: 50,
    height: 50,
  },
  popupContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  popupContent: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
  },
});

export default Character;
