import {globalActionApp} from "../constants/store";

/**
 *
 * @param {boolean} status
 * @returns {{payload: *, type: string}}
 */
export const setLoading = (status) => ({
  type: globalActionApp.LOADING,
  payload: status,
})

/**
 *
 * @param {Boolean}status
 * @return {{payload: *, type: string}}
 */
export const setInitialized = (status) => ({
  type: globalActionApp.SET_INITIALIZED,
  payload: status
})
