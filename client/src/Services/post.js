import config from "../Config/config";
import http from "../Utils/http";

export const uploadImageCover = async (body) => {
  const { data } = await http.post(config.apiEndPoint.post.uploadImage, {
    body,
  });

  return data;
};

export const removeImgCover = async (body) => {
  const { data } = await http.remove(config.apiEndPoint.post.removeImage, {
    body,
  });

  return data;
};

export const storyCreate = async (body) => {
  const { data } = await http.post(config.apiEndPoint.post.postApi, {
    body,
    accessToken: true,
  });

  return data;
};

// Get all stories
export const fetchStories = async () => {
  const { data } = await http.get(config.apiEndPoint.post.postApi);

  return data;
};

// Get specific story
export const fetchStory = async (storyId) => {
  const { data } = await http.get(config.apiEndPoint.post.postApi + storyId);

  return data;
};

// Get user stories.
export const fetchUserStories = async (userId) => {
  const { data } = await http.get(config.apiEndPoint.post.postApi + userId);

  return data;
};


