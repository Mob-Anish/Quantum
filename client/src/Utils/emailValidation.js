import validator from "validator";

export const validation = (email) => {
  let errors = {};

  if (!email) {
    errors.email = "Oops your email is gone haywire 😅";
    return errors;
  }

  if (!validator.isEmail(email)) {
    errors.email = "Hmm your email wont support the system 😅";
    return errors;
  }
};
