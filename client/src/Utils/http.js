import axios from "axios";
import config from "../Config/config";

const instance = axios.create({
  baseURL: config.baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

const get = (
  url,
  { params = {}, body = {}, accessToken = false, headers = {} } = {}
) => {
  const authHeaders = {};

  if (accessToken) {
    authHeaders["Authorization"] = `Bearer token`;
  }

  return instance({
    url,
    params,
    data: body,
    method: "get",
    headers: { authHeaders, headers },
  }).then((response) => response);
};

const post = (
  url,
  { params = {}, body = {}, accessToken = false, headers = {} } = {}
) => {
  const authHeaders = {};

  if (accessToken) {
    authHeaders["Authorization"] = `Bearer token`;
  }

  return instance({
    url,
    params,
    data: body,
    method: "post",
    headers: {authHeaders, headers },
  }).then((response) => response);
};

const put = (
  url,
  { params = {}, body = {}, accessToken = false, headers = {} } = {}
) => {
  const authHeaders = {};

  if (accessToken) {
    authHeaders["Authorization"] = `Bearer token`;
  }

  return instance({
    url,
    params,
    data: body,
    method: "put",
    headers: { authHeaders, headers },
  }).then((response) => response);
};

const patch = (
  url,
  { params = {}, body = {}, accessToken = false, headers = {} } = {}
) => {
  const authHeaders = {};

  if (accessToken) {
    authHeaders["Authorization"] = `Bearer token`;
  }

  return instance({
    url,
    params,
    data: body,
    method: "patch",
    headers: { authHeaders, headers },
  }).then((response) => response);
};

const remove = (
  url,
  { params = {}, body = {}, accessToken = false, headers = {} } = {}
) => {
  const authHeaders = {};

  if (accessToken) {
    authHeaders["Authorization"] = `Bearer token`;
  }

  return instance({
    url,
    params,
    data: body,
    method: "delete",
    headers: { authHeaders, headers },
  }).then((response) => response);
};

const http = {
  instance,
  get,
  post,
  put,
  patch,
  remove,
};

export default http;
