import config from "../Config/config";
import http from "../Utils/http";

export const uploadImage = async (body) => {
  const { data } = await http.postImage(config.apiEndPoint.post.uploadImage, {
    body,
  });

  return data;
};
