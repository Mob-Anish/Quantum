import config from "../Config/config";
import http from "../Utils/http";

export const verifyEmail = async (body) => {
  const { data } = await http.post(config.apiEndPoint.user.verifyEmail, {
    body,
  });

  return data;
};
