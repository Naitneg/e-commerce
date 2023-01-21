import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../store/cart-context";

const CartIcon = () => {
  const cartCtx = useContext(CartContext);
  const toggleCart = () => {
    cartCtx.setIsCartOpen(!cartCtx.isCartOpen);
  };
  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCtx.totalQuantity}</span>
    </div>
  );
};

export default CartIcon;
