import { createSlice } from "@reduxjs/toolkit";

const initialLeaderboardsState = {
    weekly: [],
    allTime: [],
    updatedAt: [],
};

export const leaderboardSlice = createSlice({
    name: "leaderboard",
    initialState: initialLeaderboardsState,
    reducers: {
        setLeaderboards: (state, action) => {
            state.allTime = action.payload.allTime;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setLeaderboards } = leaderboardSlice.actions;

export default leaderboardSlice.reducer;
