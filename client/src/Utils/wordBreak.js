export const wordBreak = (userInfo) => {
  const userInfoArr = userInfo.name.split(" ");
  const firstWord = userInfoArr[0];
  const secondWord = userInfoArr[userInfoArr.length - 1];
  const fName = firstWord.split("")[0];
  const sName = secondWord.split("")[0];
  return fName + sName;
};

export const imageUrlBreak = (imageUrl) => {
  const url = imageUrl.split("/");
  const image = url[7] + "/" + url[8];
  return image;
};

export const getImageId = (imageUrl) => {
  const url = imageUrl.split("/");
  const image = url[7] + "/" + url[8].split(".")[0];
  return image;
};
