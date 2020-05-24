import {cartActionApp, productionActionTypes} from "../constants/store";

// globalActionApp,
/**
 *
 * @param {Array} products
* @returns {{payload: *, type: string}}
 */
export const setProducts = (products) => ({
  type: productionActionTypes.SET_PRODUCTS,
  payload: products
})

/**
 *
 * @param {Product}product
 * @return {{payload: *, type: string}}
 */
export const setPageProduct = (product) => ({
  type: productionActionTypes.SET_PAGE_PRODUCT,
  payload: product
})

/**
 *
 * @param {Object|Null} product
 * @returns {{payload: *, type: string}}
 */
export const setModalProduct = (product) => ({
  type: productionActionTypes.PRODUCTS_SET_MODAL_PRODUCT,
  payload: product
})
