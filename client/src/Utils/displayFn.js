// Continue with email
export const displayEmailBox = () => {
  document.querySelector(
    ".section__onstart .section__continue__button"
  ).style.display = "none";

  if (document.querySelector(".section__onstart .section__enter__email")) {
    document.querySelector(
      ".section__onstart .section__enter__email"
    ).style.display = "block";
  }

  if (document.querySelector(".section__onstart .section__check__email")) {
    document.querySelector(
      ".section__onstart .section__check__email"
    ).style.display = "flex";
  }
};

// Continue with more options
export const displayLoginOptions = () => {
  document.querySelector(
    ".section__onstart .section__continue__button"
  ).style.display = "block";

  if (document.querySelector(".section__onstart .section__enter__email")) {
    document.querySelector(
      ".section__onstart .section__enter__email"
    ).style.display = "none";
  }

  if (document.querySelector(".section__onstart .section__check__email")) {
    document.querySelector(
      ".section__onstart .section__check__email"
    ).style.display = "none";
  }
};

// View popup in login
export const viewProfile = () => {
  document.querySelector(".container__profile__card").style.display = "block";
};

// Hide popup in login
export const hideProfile = () => {
  document.querySelector(".container__profile__card").style.display = "none";
};
