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
    createNewUser: (state, action) => {
      state.user.sub = action.cognitoUser.userSub;
      state.user.isEmailVerified = action.cognitoUser.userConfirmed;
      state.user.attributes = action.attributes;
    },
  },
});

// Action creators are generated for each case reducer function
export const { createNewUser } = authSlice.actions;

export default authSlice.reducer;
