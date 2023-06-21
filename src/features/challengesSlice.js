import { createSlice } from "@reduxjs/toolkit";

const initialChallengesState = {
    challenges: [],
};

export const challengesSlice = createSlice({
    name: "challenges",
    initialState: initialChallengesState,
    reducers: {
        setChallenges: (state, action) => (state = [...action.payload]),
    },
});

// Action creators are generated for each case reducer function
export const { setChallenges } = challengesSlice.actions;

export default challengesSlice.reducer;
