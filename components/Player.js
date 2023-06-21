// Player.js

import React from "react";
import { View, Image, StyleSheet } from "react-native";

const imageMapping = {
    fit1: require("../assets/game_images/male_player/fit1.png"),
    fit2: require("../assets/game_images/male_player/fit2.png"),
    fit3: require("../assets/game_images/male_player/fit3.png"),
    glasses1: require("../assets/game_images/male_player/glasses1.png"),
    glasses2: require("../assets/game_images/male_player/glasses2.png"),
    glasses3: require("../assets/game_images/male_player/glasses3.png"),
    hair1: require("../assets/game_images/male_player/hair1.png"),
    hair2: require("../assets/game_images/male_player/hair2.png"),
    hair3: require("../assets/game_images/male_player/hair3.png"),
    base1: require("../assets/game_images/male_player/base1.png"),
    base2: require("../assets/game_images/male_player/base2.png"),
    base3: require("../assets/game_images/male_player/base3.png"),
};

const Player = ({ avatarDetails }) => (
    <>
        {["base", "fit", "glasses", "hair"].map((property, index) => (
            <View key={index} style={styles.avatarImageContainer}>
                <Image
                    source={
                        imageMapping[`${property}${avatarDetails[property]}`]
                    }
                    style={styles.avatarImage}
                />
            </View>
        ))}
    </>
);

const styles = StyleSheet.create({
    avatarImageContainer: {
        position: "absolute",
        zIndex: 10,
        left: 0,
    },
    avatarImage: {
        width: 69,
        height: 156,
    },
});

export default Player;
