import React, {useEffect} from 'react'
import './style.scss'
import Footer from "../../components/Footer";
import {useDispatch} from "react-redux";
import {setLoading, setInitialized} from "../../actions/app";
import {setProducts} from "../../actions/products";
import getData from "../../services";
import {delay} from "../../modules/time";
import {isValidProduct} from "../../modules/products/validations";

const AppContainer = ({children, overlay}) => {

  const hasOverlay = overlay ? 'has--overlay' : ''
  const body = window.document.querySelector('body')

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(setLoading(false))
      const { data: products } = await getData()
      const sanitazedProducts = products.filter(product => isValidProduct(product))

      await delay()

      dispatch(setLoading(true))
      dispatch(setProducts(sanitazedProducts))
      dispatch(setInitialized(true))

      setInitialized(true)
    };

    fetchProducts()
  },[])

  useEffect(() => {
    body.style.overflowY = overlay ? 'hidden' : 'scroll'
  }, [overlay, body])
  return (
    <div className={`app-container ${hasOverlay}`.trim()}>
      {children}
      <Footer />
    </div>
  )
}

export default AppContainer
