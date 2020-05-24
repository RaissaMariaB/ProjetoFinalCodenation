import React from 'react'
import {useDispatch} from "react-redux";
import './style.scss'
import {floatToCurrency} from "../../modules/number/formaters";
import { closeCart } from '../../actions/cart';
import { Link } from 'react-router-dom';

const CartFooter = ({ value, className }) => {
  const dispatch = useDispatch()

  return (
    <div className={`cart-footer ${className}`.trim()}>
      <p className="cart-footer__subtotal">
        Subtotal {floatToCurrency(value)}
      </p>
      <Link to="/success-purchases" onClick={() => dispatch(closeCart())}>
        <div className="cart-footer__container">
          <span className="cart-footer__with-currency">
              Comprar
          </span>
            <span className="cart-footer__empty">
                Continuar comprando
            </span>
        </div>
      </Link>
    </div>
  )
}

CartFooter.defaultProps ={
  value: 0
}

export default CartFooter
