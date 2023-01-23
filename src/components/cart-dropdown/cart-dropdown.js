import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  CartDropDownContainer,
  CartItems,
  EmptyCart,
} from "./cart-dropdown.styles.js";
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
    <CartDropDownContainer>
      <CartItems>
        {cartCtx.cartItems.length ? (
          cartCtx.cartItems.map((product) => (
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
