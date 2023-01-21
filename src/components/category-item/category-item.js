import "./category-item.styles.scss";

const CategoryItem = (props) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${props.categories.imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{props.categories.title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;