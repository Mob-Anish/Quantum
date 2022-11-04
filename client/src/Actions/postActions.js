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

// Removing image from cloudinary
export const removeImageCover = (imageID) => async (dispatch) => {
  try {
    const body = {
      imageID,
    };

    const message = await postServices.removeImgCover(body);

    console.log(message);

    dispatch({
      type: postConstants.UPLOAD_IMAGE_RESET,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: postConstants.UPLOAD_IMAGE_FAIL,
      payload: handleError(err),
    });
  }
};

// Create post for user blog
export const createStory = (photo, title, description) => async (dispatch) => {
  try {
    const body = {
      title,
      description,
      photo,
    };

    const message = await postServices.storyCreate(body);

    console.log(message);

    dispatch({
      type: postConstants.CREATE_STORY_SUCCESS,
      payload: message.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: postConstants.CREATE_STORY_FAIL,
      payload: handleError(err),
    });
  }
};
