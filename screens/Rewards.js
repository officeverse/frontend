import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    ImageBackground,
    FlatList,
    TouchableOpacity,
    Image,
    Alert,
    Button,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons/faGift";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const image = require("../assets/background.png");

export default function Rewards() {
    const rewards = useSelector((state) => state.rewards);
    const [refresh, setRefresh] = useState(false);
    const user = useSelector((state) => state.auth.user);
    const renderItem = ({ item }) => (
        <View
            className="bg-white rounded-xl w-[46vw] max-w-xs mx-auto my-4"
            style={[
                {
                    shadowColor: "black",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                },
            ]}
        >
            <TouchableOpacity
                onPress={() => {
                    Alert.alert(
                        item.name,
                        `Redeem Reward with ${item.cost} EXP`,
                        [
                            {
                                text: "Confirm",
                                onPress: () => {
                                    let data = JSON.stringify({
                                        coins: item.cost * -1,
                                    });

                                    let config = {
                                        method: "post",
                                        maxBodyLength: Infinity,
                                        url:
                                            "https://12khg2a8xi.execute-api.ap-south-1.amazonaws.com//users/" +
                                            user.attributes.userId +
                                            "/updateCoins",
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                        data: data,
                                    };

                                    axios
                                        .request(config)
                                        .then((response) => {
                                            console.log(
                                                JSON.stringify(response.data)
                                            );
                                        })
                                        .catch((error) => {
                                            console.log(error);
                                        });
                                },
                            },
                            { text: "Cancel" },
                        ]
                    );
                }}
            >
                <Image
                    source={{ uri: item.imageDataUrl }}
                    className="w-full h-32 rounded-t-lg p-4"
                    resizeMode="cover"
                />
                <View className="p-4">
                    <View>
                        <Text className="mb-3  text-sm text-stone-500">
                            {item.cost} coins
                        </Text>
                        <View className="">
                            <Text className=" text-slate-900 text-base font-bold">
                                {item.name}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );

    return rewards.length >= 1 ? (
        <ImageBackground
            source={image}
            resizeMode="cover"
            className=" justify-center"
        >
            <SafeAreaView className="h-[100vh]">
                <View className="flex-row items-center justify-center mt-10">
                    <Text className="text-white text-3xl mb-3 font-semibold">
                        Rewards
                    </Text>
                    <Text className="mb-2 ml-2">
                        <FontAwesomeIcon
                            color={"white"}
                            icon={faGift}
                            size={32}
                        />
                    </Text>
                </View>
                <View className="flex-row items-center justify-center mb-3">
                    <Text className="text-white">
                        Start exchanging coins for rewards now!
                    </Text>
                </View>
                <FlatList
                    onRefresh={() => {
                        console.log("yes");
                        setRefresh(true);
                        setRefresh(false);
                    }}
                    refreshing={refresh}
                    data={rewards}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    className="row mb-14"
                />
                {/* </ScrollView> */}
            </SafeAreaView>
        </ImageBackground>
    ) : (
        <ImageBackground
            source={image}
            resizeMode="cover"
            className=" justify-center"
        >
            <SafeAreaView className="h-[100vh]">
                <Text className="mx-auto text-white text-xl mt-80">
                    Loading rewards...
                </Text>
            </SafeAreaView>
        </ImageBackground>
    );
}
