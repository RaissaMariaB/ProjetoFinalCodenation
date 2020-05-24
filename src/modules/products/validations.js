export const isValidProduct = (product) => {
  const {
    actual_price,
    code_color,
    color,
    color_slug,
    image,
    installments,
    name,
    regular_price,
    sizes,
    style
  } = product

  const hasAllProps =
    actual_price &&
    code_color &&
    color &&
    color_slug &&
    image &&
    installments &&
    name &&
    regular_price &&
    sizes &&
    style

  if(hasAllProps){
    return true
  } else {
    console.log(`produto com o a code_color: ${code_color} contêm erros`)
    console.log('Simulando disparando uma action para o GA que tal produto deu um erro')
    return false
  }
}
