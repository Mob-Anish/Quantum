import * as postConstants from "../Constants/postConstants";

export const postImageCover = (state = {}, action) => {
  switch (action.type) {
    case postConstants.UPLOAD_IMAGE_SUCCESS:
      return {
        imageUrl: action.payload,
        success: true,
      };
    case postConstants.UPLOAD_IMAGE_FAIL:
      return {
        error: action.payload,
      };
    case postConstants.UPLOAD_IMAGE_RESET:
      return {};

    default:
      return state;
  }
};
