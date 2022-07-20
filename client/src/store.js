import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
import {
  userRegister,
  userVerify,
  userLogin,
  googleAuth,
} from "./Reducers/userReducers";

const preloadedState = {};

const reducer = combineReducers({
  userRegister,
  userVerify,
  userLogin,
  googleAuth,
});

const store = configureStore({
  reducer,
  devTools: process.env.REACT_APP_ENV !== "production",
  preloadedState,
});

export default store;
