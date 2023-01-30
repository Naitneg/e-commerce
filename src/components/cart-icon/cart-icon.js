import {
  CartIconContainer,
  ShoppingIconStyle,
  ItemCount,
} from "./cart-icon.styles.js";

import { useDispatch, useSelector } from "react-redux";
import { cartOpenHandler } from "../../redux/cart/cart-action.js";

const CartIcon = () => {
  const dispatch = useDispatch();
  const toggleCart = () => {
    dispatch(cartOpenHandler());
  };
  const totalQuantity = useSelector((state) => state.cart.itemsQuantity);
  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIconStyle />
      <ItemCount>{totalQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
