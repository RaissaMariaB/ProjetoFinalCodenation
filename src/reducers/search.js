import {searchActionApp} from "../constants/store";

const INITIAL_STATE = {
  open: false
};

export const searchReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
        case searchActionApp.SET_SEARCH_TOGGLE_STATUS:
      return {
        ...state,
        open: !!payload
      }

    default:
      return state;
  }
};
