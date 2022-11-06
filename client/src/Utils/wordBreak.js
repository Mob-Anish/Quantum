export const wordBreak = (userInfo, message) => {
  const firstWord = (userInfo ? userInfo : message).name.split(" ")[0];
  const secondWord = (userInfo ? userInfo : message).name.split(" ")[1];
  const fName = firstWord.split("")[0];
  const sName = secondWord.split("")[0];
  return fName + sName;
};
