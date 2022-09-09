export const validation = (title, description) => {
  let errors = {};

  if (!title && !description) {
    errors.title = "Any story must has a title 😄";
    errors.description = "You need to describe your story 📓";
    return errors;
  }

  if (!title) {
    errors.title = "Any story must has a title 😄";
    return errors;
  }

  if (!description) {
    errors.description = "You need to describe your story 📓";
    return errors;
  }
};
