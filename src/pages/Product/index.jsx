import React from 'react';

import './style.scss';

import Container from '../../components/Container/Container';
import ProductContainer from "../../containers/ProductContainer";

function Product() {
  return (
    <Container>
      <ProductContainer />
    </Container>
  )
}

export default Product;
