const sanitazeProduct = (product) => {
  const {
    name,
    image,
    style,
    code_color,
    color_slug,
    color,
    actual_price,
    regular_price,
    discount_percentage,
    installments,
    selected: {
      size,
      sku
    }
  } = product

  const price = discount_percentage ? actual_price : regular_price

  return {
    name,
    image,
    style,
    code_color,
    color_slug,
    color,
    price,
    installments,
    size,
    sku
  }
}

export default sanitazeProduct
