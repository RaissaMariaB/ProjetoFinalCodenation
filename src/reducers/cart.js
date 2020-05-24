import {cartActionApp} from "../constants/store";
import {addOneBySky, removeOneBySky, removeAllBySku} from "../modules/redux/cart/helpers";

const INITIAL_STATE = {
  // items: [],
  items: [
    {
      name: 'VESTIDO TRANSPASSE BOW',
      style: '20002605',
      code_color: '20002605_613',
      color_slug: 'tapecaria',
      color: 'TAPEÇARIA',
      on_sale: false,
      regular_price: 'R$ 199,90',
      actual_price: 'R$ 199,90',
      discount_percentage: '',
      installments: '3x R$ 66,63',
      image: 'https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg',
      sizes: [
        {
          available: false,
          size: 'PP',
          sku: '5807_343_0_PP'
        },
        {
          available: true,
          size: 'P',
          sku: '5807_343_0_P'
        },
        {
          available: true,
          size: 'M',
          sku: '5807_343_0_M'
        },
        {
          available: true,
          size: 'G',
          sku: '5807_343_0_G'
        },
        {
          available: false,
          size: 'GG',
          sku: '5807_343_0_GG'
        }
      ],
      selected: {
        available: false,
        size: 'PP',
        sku: '5807_343_0_PP'
      }
    }
  ],
  open: false
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case cartActionApp.ADD_ITEM:
      return {
        ...state,
        items: [ ...state.items, payload]
      }

    case cartActionApp.ADD_ITEM_BY_SKU:
      return {
        ...state,
        items: addOneBySky(payload,state.items)
      }

    case cartActionApp.REMOVE_ITEM_BY_SKU:
      return {
        ...state,
        items: removeOneBySky(payload,state.items)
      }

    case cartActionApp.REMOVE_ALL_BY_SKU:
      return {
        ...state,
        items: removeAllBySku(payload, state.items)
      }

    case cartActionApp.SET_CART_TOGGLE_STATUS:
      return {
        ...state,
        open: !!payload
      }

    default:
      return state;
  }
};
