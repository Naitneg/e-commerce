import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./category-item.styles.js";

const CategoryItem = ({ categories }) => {
  const { imageUrl, title, route } = categories;
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(route);
  };
  return (
    <DirectoryItemContainer onClick={navigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default CategoryItem;
