import config from "../Config/config";
import http from "../Utils/http";

export const uploadImageCover = async (body) => {
  const { data } = await http.post(config.apiEndPoint.post.uploadImage, {
    body,
  });

  return data;
};
