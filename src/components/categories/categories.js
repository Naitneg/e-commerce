import React from "react";
import "./categories.styles.scss";
import CategoryItem from "../category-item/category-item";

function Categories(props) {
  return (
    <div className="categories-container">
      {props.categories.map((category) => (
        <CategoryItem key={category.id} categories={category} />
      ))}
    </div>
  );
}

export default Categories;
