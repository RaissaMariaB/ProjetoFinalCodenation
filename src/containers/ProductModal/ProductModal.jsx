import React, {useEffect, useState} from "react";
import CartItem from '../../components/CartItem';
import './ProductModal.scss'
import Cart from "../../components/Cart";
import Container from "../../components/Container";
import {useDispatch, useSelector} from "react-redux";
import sanitazeProduct from "../../modules/products/sanitazeProductData";
import {matchProduct} from "../../modules/products/match";
import {goToProduct} from "../../hooks/store/use-cart-store";
import {setPageProduct} from "../../actions/products";
import {useHistory} from "react-router-dom";
import ProductFullContent from "../../components/ProductFullContent";
import ProductContainer from "../ProductContainer";

const ProductModal = ({closeProductModal, active}) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { Products: { modalProduct } } = useSelector(state => state)

  const [,setGoToProd] = goToProduct({
    dispatch,
    setPageProduct: setPageProduct,
    history: useHistory(),
    pushMode: false,
    scrollTop: false
  })

  const visibility =  {
    buttonText: 'Ver Produto',
    showName: true,
    showPrice: true,
    showSizes: true,
    showButton: true,
    addToCart: false,
    showDescription: true,
  }
  const [productState, setProductState] = useState(false)

  const handleClick = (product) => {
    setGoToProd(product)
    closeProductModal()
    // console.log({  })
  }

  useEffect(() => {
    if(modalProduct){
      // setGoToProd(modalProduct)
      setProductState(true)
    } else {
      // window.history.pushState(null,null,'/')
      setProductState(false)
    }
  },[modalProduct])

  let outputProduct
  if(productState){
    outputProduct = <ProductFullContent
      product={modalProduct}
      onClickImage={handleClick}
      onClickButton={handleClick}
      visilityConfig={visibility} />
  } else {
    outputProduct = null
  }

  return (
    <Cart
      className="product-modal"
      onClose={closeProductModal}
      title={``}
      active={active}
    >
      <div className="product-modal__content">
        {outputProduct}
      </div>
    </Cart>
  )

}

export default ProductModal;
