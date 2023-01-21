import React, { useState } from "react";
import SHOP_DATA from "../../shop-data.json";

export const ProductsContext = React.createContext({
  products: [],
  getProducts: () => {},
});

const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState(SHOP_DATA);
  const value = { products, setProducts };

  return (
    <ProductsContext.Provider value={value}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
