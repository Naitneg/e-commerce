import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card";

import { CategoriesContext } from "../../components/store/categories-context";
import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <>
      <h2>{category.toUpperCase()}</h2>
      <div className="category1-container">
        {products &&
          products.map((product) => (
            <div>
              <ProductCard key={product.id} product={product} />
            </div>
          ))}
      </div>
    </>
  );
};

export default Category;
