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
export const googleAuth = (name, email) => async (dispatch) => {
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

      // Dispatch to userLogin
      dispatch({
        type: userConstants.USER_LOGIN_SUCCESS,
        payload: userInfo,
      });

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

      // Dispatch to userLogin
      dispatch({
        type: userConstants.USER_LOGIN_SUCCESS,
        payload: userInfo,
      });

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

// Update user info
export const updateUserInfo =
  (name, username, email, tagline, photo, userId) => async (dispatch) => {
    try {
      const body = {
        name,
        username,
        email,
        tagline,
        photo,
      };

      const { data } = await userServices.updateUser(body, userId);

      const token = tokenService.getAccessToken();

      const userInfo = {
        ...data,
        token,
      };

      // Set userInfo to the local Storage
      tokenService.setToken(userInfo);

      dispatch({
        type: userConstants.USER_INFO_UPDATE,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: userConstants.USER_INFO_UPDATE_FAIL,
        payload: handleError(err),
      });
    }
  };

export const getUserProfile = (username) => async (dispatch) => {
  try {
    const { data } = await userServices.getUser(username);

    dispatch({
      type: userConstants.USER_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: userConstants.USER_PROFILE_FAIL,
      payload: handleError(err),
    });
  }
};

// Logout user from system
export const logout = () => (dispatch) => {
  tokenService.removeToken();
  dispatch({
    type: userConstants.RESET,
  });
  dispatch({
    type: userConstants.GOOGLE_AUTH_RESET,
  });
};
