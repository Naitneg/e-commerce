import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductCard from "../../components/product-card/product-card";
import "./category.styles.scss";
import { selectCategoriesMap } from "../../redux/categories/category-selector";

const Category = () => {
  const categories = useSelector(selectCategoriesMap);
  const { category } = useParams();

  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);
  return (
    <>
      <h2>{category.toUpperCase()}</h2>
      <div className="category1-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
