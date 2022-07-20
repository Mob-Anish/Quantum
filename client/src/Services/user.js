import config from "../Config/config";
import http from "../Utils/http";

export const verifyEmail = async (body) => {
  const { data } = await http.post(config.apiEndPoint.user.verifyEmail, {
    body,
  });

  return data;
};

export const loginUser = async (body) => {
  const { data } = await http.post(config.apiEndPoint.user.login, {
    body,
  });

  return data;
};

export const googleAuthenticate = async (body) => {
  const { data } = await http.post(config.apiEndPoint.user.googleAuthenticate, {
    body,
  });

  return data;
};
