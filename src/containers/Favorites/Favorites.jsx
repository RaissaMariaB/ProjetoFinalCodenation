import React from 'react';
import Cart from '../../components/Cart'
import CartItem from '../../components/CartItem';
import CartFooter from "../../components/CartFooter";

const Favorites = ({closeFavorites, active}) => {
  return (
  <Cart
        className="shopping-cart__wrapper"
        onClose={closeFavorites}
        title="Itens favoritados"
        active={active}
      >
        {/* { outputCartContent }
        { outputCartFooter } */}
  </Cart>
  );
};

export default Favorites;
