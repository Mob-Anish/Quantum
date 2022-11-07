export const wordBreak = (userInfo) => {
  const firstWord = userInfo.name.split(" ")[0];
  const secondWord = userInfo.name.split(" ")[1];
  const fName = firstWord.split("")[0];
  const sName = secondWord.split("")[0];
  return fName + sName;
};
