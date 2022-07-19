import * as userConstants from "../Constants/userConstants";
import * as userServices from "../Services/user";
import { handleError } from "../Utils/error";

// Verify Email
export const emailVerify = (email) => async (dispatch) => {
  try {
    const body = {
      email,
    };

    const message = await userServices.verifyEmail(body);

    console.log(message);

    dispatch({
      type: userConstants.USER_VERIFY_SUCCESS,
      payload: message,
    });
  } catch (err) {
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

    const message = await userServices.loginUser(body);

    console.log(message);

    dispatch({
      type: userConstants.USER_LOGIN_SUCCESS,
      payload: message,
    });
  } catch (err) {
    dispatch({
      type: userConstants.USER_LOGIN_FAIL,
      payload: handleError(err),
    });
  }
};
