import {currencyToFloat} from "../number/formaters";

/**
 *
 * @param {Object} items
 */

export const formatCartData = (items) => {
  const cartItems = Object.keys(items).map(key => {
    const productList = items[key]

    const totalProductReducer = (acc, cur) => acc + currencyToFloat(cur.price)
    const totalProduct = productList.reduce(totalProductReducer,0)

    const [product] = productList

    return {
      total: totalProduct,
      totalItems: productList.length,
      product
    }
  })

  const totalCartPriceReducer = (acc,cur) => acc + cur.total
  const totalCartPrice = cartItems.reduce(totalCartPriceReducer,0)

  return {
    cartItems,
    totalCartPrice
  }

}

