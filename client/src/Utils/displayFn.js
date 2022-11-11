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
  if (document.querySelector(".container__profile__card")) {
    document.querySelector(".container__profile__card").style.display = "block";
  }
  document.querySelector(".user__profile__card").style.display = "flex";
};

// Hide popup in login
export const hideProfile = () => {
  if (document.querySelector(".container__profile__card")) {
    document.querySelector(".container__profile__card").style.display = "none";
  }

  if (document.querySelector(".user__profile__card")) {
    document.querySelector(".user__profile__card").style.display = "none";
  }
};
