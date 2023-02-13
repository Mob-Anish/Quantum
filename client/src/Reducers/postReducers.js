import * as postConstants from "../Constants/postConstants";

export const postImageCover = (state = {}, action) => {
  switch (action.type) {
    case postConstants.UPLOAD_IMAGE_SUCCESS:
      return {
        imageId: action.payload.public_id,
        imageUrl: action.payload.secure_url,
        success: true,
      };
    case postConstants.UPLOAD_IMAGE_FAIL:
      return {
        imageCoverError: action.payload,
      };
    case postConstants.UPLOAD_IMAGE_RESET:
      return {};

    default:
      return state;
  }
};

export const createStory = (state = {}, action) => {
  switch (action.type) {
    case postConstants.CREATE_STORY_SUCCESS:
      return {
        message: action.payload,
        success: true,
      };
    case postConstants.CREATE_STORY_FAIL:
      return {
        error: action.payload,
      };
    case postConstants.CREATE_STORY_RESET:
      return {};

    default:
      return state;
  }
};

export const storyList = (state = {}, action) => {
  switch (action.type) {
    case postConstants.STORIES_FETCH_SUCCESS:
      return {
        message: action.payload,
        success: true,
      };
    case postConstants.STORIES_FETCH_FAIL:
      return {
        error: action.payload,
      };

    default:
      return state;
  }
};
