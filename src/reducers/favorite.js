import {favoriteActionApp} from "../constants/store";

const INITIAL_STATE = {
  open: false
};

export const favoritesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
        case favoriteActionApp.SET_FAVORITE_STATUS:
      return {
        ...state,
        open: !!payload
      }

    default:
      return state;
  }
};
