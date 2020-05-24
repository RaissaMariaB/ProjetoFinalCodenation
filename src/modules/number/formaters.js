/**
 *
 * @param {String} currency
 * @return {number}
 */
export const currencyToFloat = (currency = '') => {
  return  parseFloat(currency.substring(3).replace(',','.'))
}

/**
 *
 * @param {number}currency
 * @return {String}
 */
export const floatToCurrency = (currency) =>{
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(currency);
}
