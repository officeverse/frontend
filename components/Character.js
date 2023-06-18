import React, { useEffect, useRef, useState } from "react";
import { View, Image, Animated, StyleSheet } from "react-native";

const Character = () => {
    const position = useRef(new Animated.Value(0)).current;
    const [flipped, setFlipped] = useState(false);
    const [direction, setDirection] = useState("right");

    useEffect(() => {
        const walkingAnimation = Animated.loop(
            Animated.sequence([
                Animated.timing(position, {
                    toValue: 50,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.delay(2000),
                Animated.timing(position, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ])
        );

        walkingAnimation.start();

        return () => {
            walkingAnimation.stop();
        };
    }, []);

    useEffect(() => {
        const listener = position.addListener(({ value }) => {
            if (value === 0) {
                setFlipped(false);
            } else if (value === 50) {
                setFlipped(true);
            }
        });

        return () => {
            position.removeListener(listener);
        };
    }, []);

    return (
        <View style={styles.characterContainer} className="mt-56 mr-16">
            <Animated.View
                style={[
                    styles.character,
                    {
                        transform: [
                            { translateX: position },
                            { scaleX: flipped ? -1 : 1 },
                            { perspective: 1000 }, // For Android devices
                        ],
                    },
                ]}
            >
                <Image
                    source={require("../assets/game_images/player.png")}
                    style={styles.characterImage}
                />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    characterContainer: {
        alignItems: "center",
    },
    character: {
        flexDirection: "row",
        justifyContent: "center",
    },
    characterImage: {
        width: 50,
        height: 50,
    },
});

export default Character;
