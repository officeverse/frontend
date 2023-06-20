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
    },
  },
});

// Action creators are generated for each case reducer function
export const { createNewUser, setEmailVerified } = authSlice.actions;

export default authSlice.reducer;
