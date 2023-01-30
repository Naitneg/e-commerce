import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../categoriesRoute/categories-preview";
import Category from "../category/category";
import "./shop.styles.scss";
import { getCategoriesandDocuments } from "../../utils/firebase/firebase.utils.js";
import { setCategoriesMap } from "../../redux/categories/category-actions";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesandDocuments();
      dispatch(setCategoriesMap(categoryMap));
    };
    getCategories();
  }, [dispatch]);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
