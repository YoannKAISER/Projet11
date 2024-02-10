import { configureStore, createSlice } from '@reduxjs/toolkit';


const userInfosSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
    userName: null,
    firstName: null,
    lastName: null,
  },
  reducers: {
    saveToken: (state, action) => {
      state.token = action.payload;
    },

    saveUserName: (state, action) => {
      state.userName = action.payload;
    },

    saveFirstName: (state, action) => {
      state.firstName = action.payload;
    },

    saveLastName: (state, action) => {
      state.lastName = action.payload;
    },

    resetUser: (state) => {
      return {
        token: null,
        userName: null,
        firstName: null,
        lastName: null,
      };
    },

    saveUserInfo: (state, action) => {
      const { userName, firstName, lastName } = action.payload;
      state.userName = userName;
      state.firstName = firstName;
      state.lastName = lastName;
    },
  },
});

export const { saveUserInfo } = userInfosSlice.actions;


export const {
  saveToken,
  saveUserName,
  saveFirstName,
  saveLastName,
  resetUser,
} = userInfosSlice.actions;


export const store = configureStore({
  reducer: {
    user: userInfosSlice.reducer, 
  },
});