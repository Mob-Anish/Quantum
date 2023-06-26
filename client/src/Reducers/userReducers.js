import * as userConstants from "../Constants/userConstants";

export const userRegister = (state = {}, action) => {
  switch (action.type) {
    case userConstants.USER_REGISTER_SUCCESS:
      return {
        message: action.payload,
        success: true,
      };
    case userConstants.USER_REGISTER_FAIL:
      return {
        error: action.payload,
      };
    case userConstants.USER_REGISTER_RESET:
      return {};

    default:
      return state;
  }
};

export const userLogin = (state = {}, action) => {
  switch (action.type) {
    case userConstants.USER_LOGIN_SUCCESS:
      return {
        userInfo: action.payload,
        success: true,
      };
    case userConstants.USER_INFO_UPDATE:
      return {
        userInfo: action.payload,
        success: true,
      };
    case userConstants.USER_LOGIN_FAIL:
      return {
        error: action.payload,
      };
    case userConstants.RESET:
      return {};

    default:
      return state;
  }
};

export const userInfo = (state = {}, action) => {
  switch (action.type) {
    case userConstants.USER_INFO_UPDATE:
      return {
        userInfo: action.payload,
        success: true,
      };
    case userConstants.USER_INFO_UPDATE_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userVerify = (state = {}, action) => {
  switch (action.type) {
    case userConstants.USER_VERIFY_SUCCESS:
      return {
        message: action.payload,
        success: true,
      };
    case userConstants.USER_VERIFY_FAIL:
      return {
        error: action.payload,
      };
    case userConstants.USER_VERIFY_RESET:
      return {};

    default:
      return state;
  }
};

export const googleAuth = (state = {}, action) => {
  switch (action.type) {
    case userConstants.GOOGLE_AUTH_SUCCESS:
      return {
        message: action.payload,
        success: true,
        googleAuth: true,
      };
    case userConstants.GOOGLE_LOGIN_SUCCESS:
      return {
        message: action.payload,
        isAuthenticated: true,
      };
    case userConstants.GOOGLE_AUTH_FAIL:
      return {
        error: action.payload,
      };
    case userConstants.GOOGLE_AUTH_RESET:
      return {};

    default:
      return state;
  }
};
