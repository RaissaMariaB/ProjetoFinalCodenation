import {cartActionApp} from "../constants/store";

/**
 *
 * @param {Object} product
 * @returns {{payload: *, type: string}}
 */
export const addCartItem = (product) => ({
  type: cartActionApp.ADD_ITEM,
  payload: product
})

/**
 *
 * @returns {{payload: boolean, type: string}}
 */
export const openCart = () => ({
  type: cartActionApp.SET_CART_TOGGLE_STATUS,
  payload: true,
})

/**
 *
 * @returns {{payload: boolean, type: string}}
 */
export const closeCart = () => ({
  type: cartActionApp.SET_CART_TOGGLE_STATUS,
  payload: false,
})

/**
 * @param {String}sku
 * @return {{payload: *, type: string}}
 */
export const addBySku = (sku) => ({
  type: cartActionApp.ADD_ITEM_BY_SKU,
  payload: sku,
})

/**
 * @param {String}sku
 * @return {{payload: *, type: string}}
 */
export const removeBySku = (sku) => ({
  type: cartActionApp.REMOVE_ITEM_BY_SKU,
  payload: sku,
})

/**
 * @param {String}sku
 * @return {{payload: *, type: string}}
 */
export const removeAllBySku = (sku) => ({
  type: cartActionApp.REMOVE_ALL_BY_SKU,
  payload: sku,
})

