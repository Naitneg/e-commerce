import {
  CartIconContainer,
  ShoppingIconStyle,
  ItemCount,
} from "./cart-icon.styles.js";

import { useContext } from "react";
import { CartContext } from "../store/cart-context";

const CartIcon = () => {
  const cartCtx = useContext(CartContext);
  const toggleCart = () => {
    cartCtx.setIsCartOpen(!cartCtx.isCartOpen);
  };
  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIconStyle />
      <ItemCount>{cartCtx.totalQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
