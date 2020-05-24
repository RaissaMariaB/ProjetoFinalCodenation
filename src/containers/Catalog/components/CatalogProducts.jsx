import ProductCatalog from "../../../components/ProductCatalog";
import React from "react";
import { useHistory } from "react-router-dom";
import {useDispatch} from "react-redux";
import {setModalProduct, setPageProduct} from "../../../actions/products";
import {goToProduct} from "../../../hooks/store/use-cart-store";

const CatalogProducts = ({ items }) => {
  const dispatch = useDispatch()
  const [,setGoToProd] = goToProduct({
    dispatch,
    setPageProduct: setPageProduct,
    history: useHistory()
  })

  const handleClick = (product) => {
    dispatch(setModalProduct(product))
  }

  return (items.map((product, idx) => (
    <div key={idx} className="catalog__product-container">
      <ProductCatalog
        key={product.images}
        onClickImage={(product) => handleClick(product)}
        product={product}
      />
    </div>
  )))
}


CatalogProducts.defaultProps = {
  products: []
}

export default CatalogProducts
