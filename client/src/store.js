import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

// import thunk from "redux-thunk";
import {
  userRegister,
  userVerify,
  userLogin,
  googleAuth,
} from "./Reducers/userReducers";

const reducer = combineReducers({
  userRegister,
  userVerify,
  userLogin,
  googleAuth,
});

// UserInfo from local storage
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const preloadedState = {
  userLogin: {
    userInfo: userInfoFromStorage,
  },
};

const store = configureStore({
  reducer,
  devTools: process.env.REACT_APP_ENV !== "production",
  preloadedState,
});

export default store;
