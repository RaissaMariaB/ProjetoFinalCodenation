import { delay } from "../../modules/time"
import slugify from "../../modules/string/slugfy"
import {ScrollToTopControlller} from "../router";

export const goToProduct = ({
  dispatch,
  setPageProduct,
  history,
  pushMode = true,
  scrollTop = true,
}) => {

  const setGoToProduct = (product) => {

    const {
      name,
      color_slug
    } = product

    dispatch(setPageProduct(product))

    if(scrollTop){
      window.scroll({
        top: 0,
        left: 0,
      });
    }
    if(pushMode){
      history.push(`product/${slugify(name)}?color=${color_slug}`)
    } else {
      history.replace(`product/${slugify(name)}?color=${color_slug}`)
    }
  }

  return[null, setGoToProduct]

}




