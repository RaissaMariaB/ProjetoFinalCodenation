import React, {useEffect} from 'react'
import SVGkeyBoardCursor from './../../assets/svg/keyboard-cursor.svg'

import './style.scss'
import {useDispatch, useSelector} from "react-redux";
import Container from "../../components/Container";
import {goToProduct} from "../../hooks/store/use-cart-store";
import {useHistory} from "react-router-dom"
import {setPageProduct} from "../../actions/products";

const Page404 = () => {

  const dispatch = useDispatch()
  const history = useHistory()
  const [backgroundProduct, suggestedProduct] = useSelector(state => {
    const { Products: { items } } = state
    return [
      items[Math.floor(Math.random() * items.length)],
      items[Math.floor(Math.random() * items.length)]
    ]
  })

  const [,handleProduct] = goToProduct({
    setPageProduct,
    dispatch:dispatch,
    history: history
  })

  const handleClick = () =>{
    handleProduct(suggestedProduct)
  }

  let outputPage;
  if(backgroundProduct){
    outputPage = <div className="page-404__container">
      <div className="page-404__image-wrapper">
        <img className="page-404__image" src={backgroundProduct.image} alt=""/>
      </div>
      <div className="page-404__info-container">
        <p className="page-404__not-found">
          404,
          <br/>
          Pagina não encontrada.
        </p>
        <button className="page-404__button" onClick={() => handleClick()}>Conhecer um novo produto agora</button>
      </div>
    </div>
  }

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  },[])

  return (
      <Container className="page-404">
        {outputPage}
      </Container>
  )
}

export default Page404
