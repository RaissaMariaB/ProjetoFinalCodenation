import {favoriteActionApp} from "../constants/store";

/**
 *
 * @returns {{payload: boolean, type: string}}
 */
export const openFavorites = () => ({
  type: favoriteActionApp.SET_FAVORITE_STATUS,
  payload: true,
})

/**
 *
 * @returns {{payload: boolean, type: string}}
 */
export const closeFavorites = () => ({
  type: favoriteActionApp.SET_FAVORITE_STATUS,
  payload: false,
})