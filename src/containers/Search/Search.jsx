import React, {useState} from "react";
import CartItem from '../../components/CartItem';
import './Search.scss'
import Cart from "../../components/Cart";
import Container from "../../components/Container";
import {useDispatch, useSelector} from "react-redux";
import sanitazeProduct from "../../modules/products/sanitazeProductData";
import {matchProduct} from "../../modules/products/match";
import {goToProduct} from "../../hooks/store/use-cart-store";
import {setPageProduct} from "../../actions/products";
import {useHistory} from "react-router-dom";

const Search = ({closeSearch, active}) => {
  const [search, setSearch] = useState('')
  const { Products: { items } } = useSelector(state => state)
  const [,setGoToProd] = goToProduct({
    dispatch: useDispatch(),
    setPageProduct: setPageProduct,
    history: useHistory()
  })

  const isMatch = matchProduct(search)

  const sanitazedProducts = items.map(product => {
    return sanitazeProduct({
      ...product,
      selected: {}
    })
  }).filter(product => {
    return search && isMatch(product)
  })

  const handleCloseSearch = () => {
    setSearch('')
    closeSearch()
  }

  const handoGoToProd = (product) =>{
    const findedProduct = items.find(item => product.image === item.image)

    setGoToProd(findedProduct)
    handleCloseSearch()
  }

  const cardItemVisibilityConfig = {
    removeButton: false,
    size: false,
    quantity: false,
  }

  let outputNumberOfItems;
  let outputProducts;

  if(!!search){
    outputNumberOfItems = <div className="search__product-numbers">{sanitazedProducts.length} items</div>
  }

  if(search && sanitazedProducts.length){
    outputProducts = <ul className="search__content-full">
      { sanitazedProducts.map((product,idx) => (
        <li key={idx} className="search__content-item">
          <CartItem
            onClickImage={(product) => handoGoToProd(product,idx)}
            visibilityConfig={cardItemVisibilityConfig}
            product={product}
          />
        </li>
      )) }
    </ul>
  } else {
    outputProducts = <div className="search__content-empty">
           <span>
               Oquer voce procura ? 🧐
           </span>
    </div>
  }

  return (
    <Cart
      onClose={handleCloseSearch}
      title={`Digite algo`}
      active={active}
    >
      <Container className="search">
        <div className="search__input-container">
          <div className="form-field">
            <input type="text"
                   placeholder='Ex: vestido'
                   value={search} onChange={(e) => setSearch(e.target.value)}/>
          </div>
          { outputNumberOfItems }
        </div>

        <div className="search__content">
          { outputProducts }
        </div>
      </Container>
    </Cart>
  )

  // return(
  //     // <aside className= "minicart__overlay">
  //     //     <div className= "minicart__modal" >
  //     //         <div className= "minicart__header">
  //     //             <button
  //     //               className= "button-close"
  //     //               type= "button"
  //     //               name= "close cart button"
  //     //               onClick={closeSearch}>
  //     //               X
  //     //             </button>
  //     //             <span>
  //     //                 Busca
  //     //                 <input type="text" className="content__search"/>
  //     //             </span>
  //     //         </div>
  //     //         <div className= "minicart__content">
  //     //             <ul className= "mincart__content-full">
  //     //                 {
  //     //                   arr.map(item => (
  //     //                     <CartItem
  //     //                       title="Teste"
  //     //                       price="12"
  //     //                       size="M"
  //     //                     />
  //     //                   ))
  //     //                 }
  //     //             </ul>
  //     //             <div className= "minicart__content-empty">
  //     //                 <span>
  //     //                     Seu carrinho está vazio :(
  //     //                 </span>
  //     //             </div>
  //     //         </div>
  //     //         <div className= "minicart__footer">
  //     //             <div className= "minicart__footer__button">
  //     //                 <span className= "minicart__footer-full">
  //     //                     Subtotal R${value}
  //     //                 </span>
  //     //                 <a>
  //     //                 <span className="minicart__footer-empty">
  //     //                     Continuar comprando
  //     //                 </span>
  //     //                 </a>
  //     //             </div>
  //     //         </div>
  //     //     </div>
  //     // </aside>
  // )
}

export default Search;
