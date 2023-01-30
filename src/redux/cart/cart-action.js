import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart-types";

export const cartOpenHandler = () => createAction(CART_ACTION_TYPES.OPEN_CART);

export const addToCartHandler = (product) =>
  createAction(CART_ACTION_TYPES.ADD_ITEM_TO_CART, product);

export const removeFromCartHandler = (product) =>
  createAction(CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART, product);

export const deleteItemFromCart = (product) =>
  createAction(CART_ACTION_TYPES.DELETE_ITEM, product);
