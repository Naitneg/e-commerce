import { useContext } from "react";
import { CategoriesContext } from "../../components/store/categories-context";
import CategoryPreview from "../../components/category-preview/category-preview";
import "./categories.styles.scss";

const CategoriesPreview = () => {
  const productsCtx = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(productsCtx.categoriesMap).map((title) => {
        const products = productsCtx.categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
