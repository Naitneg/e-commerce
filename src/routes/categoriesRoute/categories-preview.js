import CategoryPreview from "../../components/category-preview/category-preview";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../redux/categories/category-selector";
import Spinner from "../../components/spinner/spinner";

const CategoriesPreview = () => {
  const isLoading = useSelector(selectIsLoading);

  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </>
  );
};

export default CategoriesPreview;
