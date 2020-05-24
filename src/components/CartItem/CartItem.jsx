import React from "react"
import './CartItem.scss';

const CartItem = ({
  product,
  totalItems,
  visibilityConfig,
  onRemove,
  onAddOne,
  onClickImage,
  onRemoveOne,
  onClick }) => {

    const  {
    name,
    size,
    price,
    installments,
    image
  } = product
  const {
    removeButton: removeButtonVisibility,
    size: sizeVisibility,
    quantity: quantityVisibility,
  } = visibilityConfig

  return (
      <div className="cart-item" onClick={() => onClick(product)} >
        <div className="cart-item__media">
          <img src={image}
            onClick={() => onClickImage(product)}
          />
          { removeButtonVisibility &&
            <button type="button"
              onClick={() => onRemove(product)}
              name="remover item"
              className="cart-item__button-remove">
            Remover item
          </button>}
        </div>
        <div className="cart-item__description">
          <div className="cart-item__description-details">
            <div className="cart-item__description-title">
              <h4 className="cart-item__name">{name}</h4>
              { sizeVisibility && <p className="cart-item__size">Tam.: {size}</p> }
            </div>
            <div className="cart-item__description-price">
              <p className="cart-item__value">
                {price}
              </p>
              <p className="cart-item__splited-payment">{installments}</p>
            </div>
          </div>
          { quantityVisibility && <div className="cart-item__quantity">
            <button onClick={() => onRemoveOne(product)} className="cart-item__quantity-button"> - </button>
            <span className="cart-item__quantity-value">{totalItems}</span>
            <button onClick={() => onAddOne(product)} className="cart-item__quantity-button">+</button>
          </div> }
        </div>
      </div>
  )
}

CartItem.defaultProps = {
  product: {
    name:"<no prop title>",
    image: '',
    style:"<no prop style>",
    code_color:"<no prop code_color>",
    color_slug:"<no prop color_slug>",
    color:"<no prop color_slug>",
    price:"<no prop price>",
    installments:"<no prop installments>",
    size: "<no prop size>",
    sku: "<no prop sku>"
  },
  totalItems: '<no prop total>',
  visibilityConfig: {
    removeButton: true,
    size: true,
    quantity: true,
  },
  onRemove: () => { alert('no fn on prop {onRemove}')},
  onAddOne: () => { alert('no fn on prop {onAddOne}')},
  onRemoveOne: () => { alert('no fn on prop {onRemoveOne}')},
  onClick: () => {},
  onClickImage: () =>{}
}

export default CartItem;
