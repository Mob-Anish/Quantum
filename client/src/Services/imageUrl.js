// Get token from local storage
export const getImageUrl = () => {
  const data = JSON.parse(localStorage.getItem("userInfo"));
  return data.photo;
};
