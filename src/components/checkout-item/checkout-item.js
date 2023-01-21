import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../store/cart-context";

const CheckoutItem = (props) => {
  const cartCtx = useContext(CartContext);
  const clearItems = () => cartCtx.deleteItemFromCart(props.cartItem);
  const additem = () => cartCtx.addItemToCart(props.cartItem);
  const removeItem = () => cartCtx.removeItemFromCart(props.cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={props.cartItem.imageUrl} alt={`${props.cartItem.name}`} />
      </div>
      <span className="name">{props.cartItem.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItem}>
          &#10094;
        </div>
        <span className="value">{props.cartItem.quantity}</span>

        <div className="arrow" onClick={additem}>
          &#10095;
        </div>
      </span>
      <span className="price">{props.cartItem.price}</span>
      <div className="remove-button" onClick={clearItems}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
