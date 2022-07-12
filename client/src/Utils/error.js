export const handleError = (err) => {
  if (err.reponse) {
    if (err.reponse.data) {
      return err.reponse.data;
    } else {
      return {
        Error: "Something went wrong 🙏",
      };
    }
  } else {
    return err.message;
  }
};
