import { configureStore, createSlice } from '@reduxjs/toolkit';


const userInfosSlice = createSlice({
  name: 'user', 
  initialState: {
    token: null, 
    userName: localStorage.getItem('userName'),
    firstName: localStorage.getItem('firstName'), 
    lastName: localStorage.getItem('lastName'), 
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
  },
});


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