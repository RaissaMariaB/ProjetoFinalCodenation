import React from 'react';
import './style.scss'

const ProductInfo = ({ name, regularPrice, discountedPrice, center, discount })  => {
  const centerClass = center ? 'center' : ''
  const discountClass = discount ? 'has-discount': ''

  return (
    <div className={`product-information__description ${centerClass} ${discountClass}`.trim() }>
      <div className="product-information__name">{name}</div>
      <div className="product-information__prices">
        <span className="product-information__price is-regular">
          {regularPrice}
        </span>
        <span className="product-information__price is-discount">
          {discountedPrice}
        </span>
      </div>
    </div>
  );
}

export default ProductInfo
