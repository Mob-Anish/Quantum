// Get token from local storage
export const  getAccessToken = () => {
  const data = JSON.parse(localStorage.getItem("userInfo"));
  return data.token;
};

// Set Token in local storage
export const setToken = (userInfo) => {
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
};

// Remove token from local storage.
export const removeToken = () => {
  localStorage.removeItem("userInfo");
};
