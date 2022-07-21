import * as userConstants from "../Constants/userConstants";
import * as userServices from "../Services/user";
import * as tokenService from "../Services/token";
import { handleError } from "../Utils/error";

// Verify Email
export const emailVerify = (email) => async (dispatch) => {
  try {
    const body = {
      email,
    };

    const { message } = await userServices.verifyEmail(body);

    console.log(message);

    dispatch({
      type: userConstants.USER_VERIFY_SUCCESS,
      payload: message,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: userConstants.USER_VERIFY_FAIL,
      payload: handleError(err),
    });
  }
};

// Login to the account
export const login = (email) => async (dispatch) => {
  try {
    const body = {
      email,
    };

    const { data, token } = await userServices.loginUser(body);

    console.log(message);

    const userInfo = {
      ...data,
      token,
    };

    // Setting userInfo to local storage
    tokenService.setToken(userInfo);

    dispatch({
      type: userConstants.USER_LOGIN_SUCCESS,
      payload: userInfo,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: userConstants.USER_LOGIN_FAIL,
      payload: handleError(err),
    });
  }
};

// Google login to the account
export const googleAuth = (name, email, photo) => async (dispatch) => {
  try {
    const body = {
      name,
      email,
    };

    const message = await userServices.googleAuthenticate(body);

    const { url } = message;

    if (message.token) {
      const { data, token } = message;

      const userInfo = { ...data, token };

      // Setting userInfo to the localStorage
      tokenService.setToken(userInfo);

      return dispatch({
        type: userConstants.GOOGLE_LOGIN_SUCCESS,
        payload: userInfo,
      });
    }

    dispatch({
      type: userConstants.GOOGLE_AUTH_SUCCESS,
      payload: url,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: userConstants.GOOGLE_AUTH_FAIL,
      payload: handleError(err),
    });
  }
};

// Create an account
export const register =
  (name, username, email, tagline) => async (dispatch) => {
    try {
      const body = {
        name,
        username,
        email,
        tagline,
      };

      const { data, token } = await userServices.registerUser(body);

      const userInfo = {
        ...data,
        token,
      };

      // Set userInfo to the local Storage
      tokenService.setToken(userInfo);

      dispatch({
        type: userConstants.USER_REGISTER_SUCCESS,
        payload: userInfo,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: userConstants.USER_REGISTER_FAIL,
        payload: handleError(err),
      });
    }
  };

// Logout user from system
export const logout = () => (dispatch) => {
  // Removing token from localStorage
  tokenService.removeToken();
  dispatch({
    type: userConstants.RESET,
  });
};
