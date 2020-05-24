import React, {useState} from "react";
import Badge from "../Badge";
import ProductInfo from './../ProductInfo'
import "./style.scss";
import Sizes from "../Sizes";

const ProductCatalog = ({product, loading, onClickImage, onAddCart}) => {

  const [selected, setSelected] = useState(null)
  const [message, setMessage] = useState('')
  const {name, image, regular_price, actual_price, discount_percentage} = product;
  const hasDiscount = discount_percentage.toString().includes('%')

  const isLoading = loading ? 'is--loading' : ''

  const availableSizes = product.sizes.filter(({available}) => available)

  const handleSelected = (size) => {
    setSelected(size)
    setMessage('')
  }

  return (
    isLoading
      ? <div className='product-catalog__loading-wrapper'></div>
      : <div className={`product-catalog ${isLoading}`}>
        <div className="product-catalog__image-wrapper">
          { discount_percentage && <Badge text={discount_percentage}/> }
          <img
            onClick={() => onClickImage(product)}
            src={image} loading="eager" alt="produto"/>
        </div>

        <ProductInfo
          discount={hasDiscount}
          center
          name={name}
          regularPrice={regular_price}
          discountedPrice={actual_price}/>

        <Sizes
          className="product-catalog__sizes-container"
          maxitems={2}
          active={false}
          sizes={availableSizes}
          onSelected={size => handleSelected(size)}/>

      </div>
  )
}

ProductCatalog.defaultProps = {
  product: {
    name: 'foo',
    image: "https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg",
    regular_price: 200,
    actual_price: 100,
    discount_percentage: '',
    sizes: []
  },
  onAddCart: () => { },
  children: () => {}
}

export default ProductCatalog;
