import validator from "validator";

export const validation = (fullName, userName, email) => {
  let errors = {};

  if (!fullName && !userName && !email) {
    errors.fullName = "Fullname is required 😅";
    errors.userName = "Username defines u on this server 😅";
    errors.email = "Oops your email is gone haywire 😅";
    return errors;
  }

  if (!fullName) {
    errors.fullName = "Fullname is required 😅";
    return errors;
  }

  if (!userName) {
    errors.userName = "Username defines u on this server 😅";
    return errors;
  }

  if (!validator.isEmail(email)) {
    errors.email = "Hmm your email wont support the system 😅";
    return errors;
  }
};
