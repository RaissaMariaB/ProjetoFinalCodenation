import React from "react";
import ShoppingCart from "../ShoppingCart";
import Search from "../Search";
import {useDispatch, useSelector} from "react-redux";
import {closeCart} from "../../actions/cart";
import {closeSearch} from "../../actions/search";
import {closeFavorites} from "../../actions/favorite";
import {setModalProduct} from "../../actions/products";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Favorites from "../Favorites";
import ProductModal from "../ProductModal";

const Drawers = () => {

  const dispatch = useDispatch()
  const { openCart, openSearch, openFavorites, openProductModal } = useSelector(state => ({
    openCart: state.Cart.open,
    openSearch: state.Search.open,
    openFavorites: state.Favorites.open,
    openProductModal: state.Products.modalProduct
  }))

  return(
    <React.Fragment>

      <ToastContainer />

      <ShoppingCart
        active={openCart}
        closeShoppingCart={() => dispatch(closeCart())}
      />

      <Search
        active={openSearch}
        closeSearch={() => dispatch(closeSearch())}
      />

      <Favorites
        active={openFavorites}
        closeSearch={() => dispatch(closeFavorites())}
      />

      <ProductModal
        active={openProductModal}
        closeProductModal={() => dispatch(setModalProduct(null))}
      />
    </React.Fragment>
  )
}

export default Drawers;
