import React from "react";
import "./style.scss";
import {useSelector} from "react-redux";
import Container from "../../components/Container";
import CatalogLoading from "./components/CatalogLoading";
import CatalogProducts from "./components/CatalogProducts";

const Catalog = () => {
  const {
    Info: { loading, initialized },
    Products: { items },
  } = useSelector(state => state)

  const isInitialized = !initialized && !loading

  return (
    <div className="catalog">
      <Container className="catalog__itens">
        { isInitialized
          ? <CatalogLoading />
          : <CatalogProducts items={items}/>
        }
      </Container>
    </div>
  );
}

export default Catalog;
