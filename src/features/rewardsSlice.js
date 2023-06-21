import { createSlice } from "@reduxjs/toolkit";

const initialRewardsState = {
    rewards: [],
};

export const rewardsSlice = createSlice({
    name: "rewards",
    initialState: initialRewardsState,
    reducers: {
        setRewards: (state, action) => (state = [...action.payload]),
    },
});

// Action creators are generated for each case reducer function
export const { setRewards } = rewardsSlice.actions;

export default rewardsSlice.reducer;
