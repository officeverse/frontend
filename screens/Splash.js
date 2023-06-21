import { Provider, useDispatch } from "react-redux";
import { View, Text, SafeAreaView } from "react-native";
import store from "../src/store";
import { setChallenges } from "../src/features/challengesSlice";
import { setRewards } from "../src/features/rewardsSlice";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Splash({ setAppIsReady }) {
    const user = useSelector((state) => state.auth.user);
    const sub = user.sub;
    console.log(sub);
    console.log(user);
    const challengesUrl =
        "https://12khg2a8xi.execute-api.ap-south-1.amazonaws.com/challenges?page=1&limit=100";
    const rewardsUrl =
        "https://12khg2a8xi.execute-api.ap-south-1.amazonaws.com/rewards?page=1&limit=100";
    const dispatch = useDispatch();
    const getItems = async () => {
        console.log("getting challenges");
        await axios
            .get(challengesUrl)
            .then((response) => {
                const { challenges } = response.data.data;
                console.log(challenges.length);
                dispatch(setChallenges(challenges));
            })
            .catch((error) => {
                console.log(error);
            });
        console.log("getting rewards");
        await axios
            .get(rewardsUrl)
            .then((response) => {
                const { rewards } = response.data.data;
                console.log(rewards.length);
                dispatch(setRewards(rewards));
                setAppIsReady(true);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getItems();
    }, []);

    return (
        <Provider store={store}>
            <SafeAreaView className="h-screen bg-slate-800 flex justify-center items-center">
                <Text className="text-white text-5xl font-bold">
                    Officeverse.
                </Text>
            </SafeAreaView>
        </Provider>
    );
}
