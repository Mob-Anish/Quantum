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

export const registerUser = async (body) => {
  const { data } = await http.post(config.apiEndPoint.user.register, {
    body,
  });

  return data;
};

export const updateUser = async (body, userId) => {
  const { data } = await http.patch(
    config.apiEndPoint.user.update + `/${userId}`,
    {
      body,
      accessToken: true,
    }
  );

  return data;
};
