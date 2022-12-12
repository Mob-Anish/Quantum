import * as activeConstants from "../Constants/activeConstants";

export const activeUI = (state = {}, action) => {
  switch (action.type) {
    case activeConstants.ACTIVE_FEED:
      return {
        activeFeed: true,
      };
    case activeConstants.ACTIVE_EXPLORE:
      return {
        activeExplore: true,
      };
    case activeConstants.ACTIVE_ABOUT:
      return {
        activeAbout: true,
      };
    case activeConstants.ACTIVE_RESET:
      return {};
    default:
      return state;
  }
};
