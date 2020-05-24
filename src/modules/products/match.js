import {toLowerCase} from "../string/helpers";
import slugify from "../string/slugfy";
/**
 *
 * @param {String}value
 * @return {function(...[*]=)}
 */

export const matchProduct = (value) => product => {
  const {
    name
  } = product
  return slugify(
    toLowerCase(name)
  ).includes(slugify(toLowerCase(value)))

  // return toLowerCase(name).includes(toLowerCase(value))
}
