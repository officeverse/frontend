import React, { useState, useEffect, useRef } from "react";
import {
    Text,
    View,
    StyleSheet,
    Button,
    Alert,
    TouchableOpacity,
    Modal,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import Player from "../components/Player";
import { useSelector } from "react-redux";
import axios from "axios";

export default function CameraScan({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [characterPopupOpen, setCharacterPopupOpen] = useState(false);
    const [data, setData] = useState("");

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === "granted");
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        let profileConfig = {
            method: "get",
            maxBodyLength: Infinity,
            url:
                "https://12khg2a8xi.execute-api.ap-south-1.amazonaws.com//users/profile?cognitoSub" +
                data,
            headers: {},
        };

        axios
            .request(profileConfig)
            .then((response) => {
                console.log(response.data.data);
                setData(response.data.data);
                setCharacterPopupOpen(true);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <Modal
                visible={characterPopupOpen}
                animationType="slide"
                transparent={true}
            >
                <View style={styles.popupContainer}>
                    <View style={styles.popupContent} className="p-18">
                        <View className="flex-row">
                            <View className="w-[69px] h-[156px] scale-50">
                                <Player avatarDetails={data.avatar} />
                            </View>

                            <View className="ml-4">
                                <View>
                                    <Text className="mt-4 font-bold text-2xl">
                                        {data.firstName + " " + data.lastName}
                                    </Text>
                                </View>
                                <Text className="font-semibold mt-3 text-lg">
                                    {data.jobTitle}
                                </Text>
                                <TouchableOpacity
                                    className="bg-slate-800 flex justify-center items-center p-2 rounded-lg mt-2"
                                    onPress={() => {
                                        Alert.alert(
                                            "Connect",
                                            `Connect with ${data.firstName} ${data.lastName}?`,
                                            [
                                                { text: "Confirm" },
                                                { text: "Cancel" },
                                            ]
                                        );
                                    }}
                                >
                                    <Text className="text-white text-xl">
                                        Connect
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Button
                            title="Close"
                            onPress={() => {
                                setCharacterPopupOpen(false);
                                navigation.navigate("NavBar");
                            }}
                        />
                    </View>
                </View>
            </Modal>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            <View className="">
                <Button
                    title={"Back"}
                    color="grey"
                    onPress={() => {
                        navigation.navigate("Home");
                    }}
                />
            </View>

            {scanned && (
                <Button
                    title={"Tap to Scan Again"}
                    onPress={() => setScanned(false)}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
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
    popupText: {
        fontSize: 18,
        marginBottom: 8,
    },
});
