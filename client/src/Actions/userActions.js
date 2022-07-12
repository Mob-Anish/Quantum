import * as userConstants from "../Constants/userConstants";
import * as tokenSystem from "../Services/token";
import * as userServices from "../Services/user";
import { handleError } from "../Utils/error";

// Verify Email
export const verify = (email) => async (dispatch) => {
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
