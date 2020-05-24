/**
 * Remove um item no cart com base no seu sku
 * @param {String}sku
 * @param {Array}items
 */
import slugify from "../../string/slugfy";

export const removeOneBySky = (sku, items) =>{
  let finded = false

  return items.filter(product =>{
    if(product.selected.sku === sku && finded === false){
      finded = true
      return false
    } else {
      return true
    }
  })
}

/**
 * Remove todos os itens no cart com base no seu sku
 * @param {String}sku
 * @param {Array}items
 */
export const removeAllBySku = (sku, items) => {
  return items.filter(product => product.selected.sku !== sku)
}

/**
 * Duplica um item no cart com base no seu sku
 * @param {String}sku
 * @param {Array}items
 */
export const addOneBySky = (sku, items) => {
  const product = items.find(product => product.selected.sku === sku)

  return [...items, product]
}

/**
 *
 * @param {String}name
 * @param {String}slug
 * @param {Array}items
 * @return {{}}
 */
export const findProductByNameAndSlug = (name = '', slug= '', items = []) => {
  const compareProducts = name => slug => (nameProd,slugProd) => {

    return (
      slugify(name) === slugify(nameProd) &&
      slugify(slug) === slugify(slugProd)
    )
  }

  const isMatch = compareProducts(name)(slug)

  return items.find(({ name, color_slug }) => isMatch(name,color_slug)) || null
}
