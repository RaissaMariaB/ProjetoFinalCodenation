import {toast} from "react-toastify";

export const defaultOptions = {
  type: toast.TYPE.INFO,
  hideProgressBar: false,
  position: toast.POSITION.TOP_LEFT,
  pauseOnHover: true,
  autoClose: 6000000,
}

/**
 * @param {String} message
 * @param params
 */
export const toastyInfo = (message, params = {}) => {
  return toast.info(message, {
    ...defaultOptions,
    bodyClassName: 'fs-transition__into',
    ...params
  })
}
