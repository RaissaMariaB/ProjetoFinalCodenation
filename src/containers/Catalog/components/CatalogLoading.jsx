import ProductCatalog from "../../../components/ProductCatalog";
import React from "react";

const CatalogLoading = () => {
  return (Array.from([1,2,3,4]).map((idx) => (
    <div key={idx} className="catalog__product-container">
      <ProductCatalog loading={true} />
    </div>
  )))
}

export default CatalogLoading
