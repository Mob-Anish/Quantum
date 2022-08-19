import * as postConstants from "../Constants/postConstants";
import * as postServices from "../Services/post";
// import * as tokenService from "../Services/token";
import { handleError } from "../Utils/error";

// Uploading image to the cloudinary
export const imageCoverUpload = (data) => async (dispatch) => {
  try {
    const message = await postServices.uploadImageCover(data);

    dispatch({
      type: postConstants.UPLOAD_IMAGE_SUCCESS,
      payload: message.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: postConstants.UPLOAD_IMAGE_FAIL,
      payload: handleError(err),
    });
  }
};
