import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      sub: '', // unique identifier
      isEmailVerified: false,
      attributes: {
        email: '',
        firstName: '',
        lastName: '',
        username: '',
      },
      isNewSignUp: false,
      hasCompletedOnboarding: false,
    },
  },
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
  },
});

// Action creators are generated for each case reducer function
export const { createNewUser, setEmailVerified, loginUser, setUsername } =
  authSlice.actions;

export default authSlice.reducer;
