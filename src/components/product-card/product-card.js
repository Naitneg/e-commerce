import "./product-card.styles.scss";
import Button, { BUTTON_STYLES_CLASSES } from "../button/button";
import { useDispatch } from "react-redux";
import { addToCartHandler } from "../../redux/cart/cart-action";

const ProductCard = (props) => {
  const { product } = props;
  const dispatch = useDispatch();
  const addtoCart2 = () => {
    dispatch(addToCartHandler(product));
  };
  return (
    <div className="product-card-container">
      <img src={props.product.imageUrl} alt={`${props.product.name}`} />
      <div className="footer">
        <span className="name">{props.product.name}</span>
        <span className="price">{props.product.price}</span>
      </div>
      <Button buttonType={BUTTON_STYLES_CLASSES.inverted} onClick={addtoCart2}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
