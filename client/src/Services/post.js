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
  const { data } = await http.post(config.apiEndPoint.post.createPost, {
    body,
    accessToken: true,
  });

  return data;
};
