import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./cart-dropdown.styles.scss";
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import { CartContext } from "../store/cart-context";

const CartDropdown = () => {
  const cartCtx = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartCtx.cartItems.map((product) => (
          <CartItem cartItem={product} key={product.id} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
