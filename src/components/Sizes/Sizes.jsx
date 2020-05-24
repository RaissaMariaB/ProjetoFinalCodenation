import React, {useState} from "react";

import './style.scss'

const Sizes = ({ className, sizes, onSelected, maxitems, active }) => {
  const [selected,setSelected] = useState(null)

  const handleClick = (el) => {
    const newSelected = selected && el.size === selected['size'] ? null : el
    onSelected(newSelected)
    setSelected(newSelected)
  }

  let outputLeftSizes;
  if(maxitems !== null && sizes.length - maxitems > 0  ){
    outputLeftSizes = <div className="product-full__remaining-sizes"> +{ sizes.length - maxitems}</div>
  }

  const sizesShown = maxitems === null ? sizes : sizes.slice(0,maxitems)

  return (
    <div className={`product-full__sizes ${className}`.trim()}>
      { sizesShown.map((el) => (
        <button
          key={el.size}
          onClick={() => handleClick(el)}
          className={`button_size ${
            active && selected && el.size === selected['size'] ? 'is--selected': ''
          }`.trim()}>{el.size}</button>)
      )}

      { outputLeftSizes }
    </div>
  )
}

Sizes.defaultProps = {
  sizes: [],
  maxitems: null,
  active: true,
}

export default Sizes;
