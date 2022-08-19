import * as postConstants from "../Constants/postConstants";
import * as postServices from "../Services/post";
// import * as tokenService from "../Services/token";
import { handleError } from "../Utils/error";

// Uploading image to the cloudinary
export const imageUpload = (data) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("file", data);
    formData.append("upload_preset", "imageUpload");
    formData.append("folder", "imageCover");

    const body = {
      formData,
    };

    const { message } = await postServices.uploadImage(body);

    const { url } = message;

    dispatch({
      type: postConstants.UPLOAD_IMAGE_SUCCESS,
      payload: url,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: postConstants.UPLOAD_IMAGE_FAIL,
      payload: handleError(err),
    });
  }
};
