import { useContext } from "react";
import { Link } from "react-router-dom";
import "./cart-dropdown.styles.scss";
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import { CartContext } from "../store/cart-context";

const CartDropdown = () => {
  const cartCtx = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartCtx.cartItems.map((product) => (
          <CartItem cartItem={product} key={product.id} />
        ))}
      </div>
      <Button buttonType="inverted">
        <Link to="/checkout">GO TO CHECKOUT</Link>
      </Button>
    </div>
  );
};

export default CartDropdown;
