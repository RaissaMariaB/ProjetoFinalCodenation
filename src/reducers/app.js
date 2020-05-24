import packageJson from '../../package.json';
import {globalActionApp} from "../constants/store";

const INITIAL_STATE = {
  version: packageJson.version,
  loading: false,
  initialized: false,
};

export const appReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case globalActionApp.LOADING:
      return {
        ...state,
        loading: payload
      }

    case globalActionApp.SET_INITIALIZED:
      return {
        ...state,
        initialized: payload
      }

    default:
      return state;
  }
};
