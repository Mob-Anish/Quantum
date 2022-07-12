import * as userConstants from "../Constants/userConstants";

export const userRegister = (state = {}, action) => {
  switch (action.type) {
    case userConstants.USER_REGISTER_START:
      return {
        loading: true,
      };
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

    default:
      return state;
  }
};
