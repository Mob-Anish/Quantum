export const validation = (title, description) => {
  let errors = {};

  if (!title && !description) {
    errors.title = "Any story must have a title 😄";
    errors.description = "You need to describe your story 📓";
    return errors;
  }

  if (!title) {
    errors.title = "Any story must have a title 😄";
    return errors;
  }

  if (!description) {
    errors.description = "You need to describe your story 📓";
    return errors;
  }
};
