import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import challengesReducer from "./features/challengesSlice";
import rewardsReducer from "./features/rewardsSlice";
import leaderboardReducer from "./features/leaderboardSlice";

export default configureStore({
    reducer: {
        auth: authReducer,
        challenges: challengesReducer,
        rewards: rewardsReducer,
        leaderboard: leaderboardReducer
    },
});
