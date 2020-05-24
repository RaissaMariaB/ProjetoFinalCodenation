import React, {useEffect, useRef} from "react";
import PropType from 'prop-types'
import './style.scss'

const Cart = ({title, onClose, active, children, className, ...props}) => {
  const activeCart = active ? 'is--active' : '';

  return (
    <aside
      className={`minicart__overlay ${activeCart} ${className}`.trim()}>
      <div className="minicart__overlayclick"
        onClick={onClose}
      ></div>
      <div className="minicart__modal">
        <div className="minicart__header">
          <button
            className="button-close"
            type="button"
            name="close cart button"
            onClick={onClose}>
            X
          </button>
          <span>{title}</span>
        </div>
        <div className="minicart__content">{children}</div>
      </div>
    </aside>
  )
}

Cart.defaultProps = {
  title: '<no prop title>',
  onClose: () => { alert('no fn on prop {onclose}')},
  active: PropType.bool.isRequired,
  className: ''
}

Cart.PropType = {
  title: PropType.string.isRequired,
  onClose: PropType.func.isRequired,
  active: PropType.bool.isRequired,
  className: PropType.string
}

export default Cart
