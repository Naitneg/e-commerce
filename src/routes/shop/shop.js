import { useContext } from "react";
import { ProductsContext } from "../../components/store/products-context";
import ProductCard from "../../components/product-card/product-card";
import "./shop.styles.scss";

const Shop = () => {
  const productsCtx = useContext(ProductsContext);
  return (
    <div className="products-container">
      {productsCtx.products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Shop;
