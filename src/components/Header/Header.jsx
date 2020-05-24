import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faShoppingBag} from '@fortawesome/free-solid-svg-icons';

import './Header.scss';
import Container from "../Container/Container";
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";

const Header = ({openShoppingCart, openSearch }) => {

  const { Cart: { items = [] }} = useSelector(state => state)

  let outputBadge;
  if(items.length){
    outputBadge = <span className="bag-badget">{items.length}</span>
  }

  return (
    <header className="main-header">
      <Container className="main-header__icons-container">
        <Link to="/" className="main-header__link">
          <h1 className="main-header__title is--320">B & B</h1>
          <h1 className="main-header__title is--375">BARRY&BERRY</h1>
        </Link>

        <button className="main-header__icons is--search"
                onClick={openSearch}>
          <FontAwesomeIcon
            icon={faSearch}
            color="#000"
            size="lg"/>
        </button>
        <button
          className="main-header__icons icon__bag"
          onClick={openShoppingCart}>
          <FontAwesomeIcon
            icon={faShoppingBag}
            color="#000"
            size="lg"/>
          { outputBadge }
        </button>
      </Container>
    </header>
  );
}

export default Header;
