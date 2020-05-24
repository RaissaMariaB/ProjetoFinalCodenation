import {searchActionApp} from "../constants/store";

/**
 *
 * @returns {{payload: boolean, type: string}}
 */
export const openSearch = () => ({
  type: searchActionApp.SET_SEARCH_TOGGLE_STATUS,
  payload: true,
})

/**
 *
 * @returns {{payload: boolean, type: string}}
 */
export const closeSearch = () => ({
  type: searchActionApp.SET_SEARCH_TOGGLE_STATUS,
  payload: false,
})
