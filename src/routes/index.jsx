import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import Home from './../pages/Home';
import Product from './../pages/Product';
import Header from "../components/Header";
import AppContainer from "../containers/app/AppContainer";
import {useDispatch, useSelector} from "react-redux";
import Drawers from "../containers/Drawers/Drawers";
import {openCart} from "../actions/cart";
import {openSearch} from "../actions/search";
import {openFavorites} from "../actions/favorite";
import SuccessPurchases from "../pages/SuccessPurchases";
import Page404 from "../pages/404";

export default function App() {
  const hasOverlay = useSelector(state => {
     const {
       Search: { open: openSearch },
       Cart: { open: openCart },
       Products: { modalProduct }
     } = state

    return openCart || openSearch || modalProduct
  })

  const dispatch = useDispatch()

  return (
    <Router>
      <AppContainer overlay={hasOverlay}>

        <Drawers />

        <Header
          openShoppingCart={() => dispatch(openCart())}
          openSearch={() => dispatch(openSearch())}
          openFavorites={() => dispatch(openFavorites())}
        />

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/product/:product">
            <Product/>
          </Route>
          <Route path="/success-purchases">
            <SuccessPurchases/>
          </Route>

          <Route path="/404" exact={true} component={Page404} />
          <Redirect from='*' to='/404' />
        </Switch>
      </AppContainer>
    </Router>
  );
}
