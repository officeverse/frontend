import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  user: {
    sub: '', // unique identifier
    isEmailVerified: false,
    attributes: {
      email: '',
      username: '',
    },
    isNewSignUp: false,
    hasCompletedOnboarding: true,
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    setEmailVerified: (state) => {
      state.user.isEmailVerified = true;
    },
    createNewUser: (state, action) => {
      state.user.sub = action.payload.signUpResult.userSub;
      state.user.isEmailVerified = action.payload.signUpResult.userConfirmed;
      state.user.attributes = action.payload.attributes;
      state.user.isNewSignUp = true;
    },
    loginUser: (state, action) => {
      state.user.sub = action.payload.sub;
      state.user.attributes = action.payload.attributes;
    },
    setUsername: (state, action) => {
      state.user.attributes.username = action.payload;
    },
    logoutUser: (state) => {
      state = initialAuthState;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  createNewUser,
  setEmailVerified,
  loginUser,
  logoutUser,
  setUsername,
} = authSlice.actions;

export default authSlice.reducer;
