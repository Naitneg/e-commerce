import { useNavigate } from "react-router-dom";
import {
  CartDropDownContainer,
  CartItems,
  EmptyCart,
} from "./cart-dropdown.styles.js";
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import { useSelector } from "react-redux";

const CartDropdown = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((product) => (
            <CartItem cartItem={product} key={product.id} />
          ))
        ) : (
          <EmptyCart>Your cart is empty</EmptyCart>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
