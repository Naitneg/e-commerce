import { useContext } from "react";
import "./product-card.styles.scss";
import Button, { BUTTON_STYLES_CLASSES } from "../button/button";
import { CartContext } from "../store/cart-context";

const ProductCard = (props) => {
  const cartCtx = useContext(CartContext);

  const addtoCart = () => {
    cartCtx.addItemToCart(props.product);
  };
  return (
    <div className="product-card-container">
      <img src={props.product.imageUrl} alt={`${props.product.name}`} />
      <div className="footer">
        <span className="name">{props.product.name}</span>
        <span className="price">{props.product.price}</span>
      </div>
      <Button buttonType={BUTTON_STYLES_CLASSES.inverted} onClick={addtoCart}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
