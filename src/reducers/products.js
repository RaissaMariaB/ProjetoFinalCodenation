import { productionActionTypes } from '../constants/store';

const INITIAL_STATE = {
  items: [
  ],
  product: null,
  modalProduct: null,
};

export const productsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case productionActionTypes.SET_PRODUCTS:
      return {
        ...state,
        items: [...payload]
      }

    case productionActionTypes.SET_PAGE_PRODUCT:
      return {
        ...state,
        product: payload
      }

    case productionActionTypes.PRODUCTS_SET_MODAL_PRODUCT:
      return {
        ...state,
        modalProduct: payload
      }

    default:
      return state;
  }
}



