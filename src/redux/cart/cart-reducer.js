import { CART_ACTION_TYPES } from "./cart-types";

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  itemsQuantity: 0,
  totalAmount: 0,
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case CART_ACTION_TYPES.OPEN_CART: {
      return { ...state, isCartOpen: !state.isCartOpen };
    }
    case CART_ACTION_TYPES.ADD_ITEM_TO_CART: {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      state.itemsQuantity++;
      state.totalAmount = state.totalAmount + action.payload.price;

      let updatedCartItems;
      if (!existingItem) {
        updatedCartItems = [
          ...state.cartItems,
          { ...action.payload, quantity: 1 },
        ];
      } else {
        updatedCartItems = state.cartItems.map((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }
    case CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART: {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      let updatedItems;
      state.itemsQuantity--;
      state.totalAmount = state.totalAmount - action.payload.price;
      if (existingItem.quantity > 1) {
        updatedItems = state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        updatedItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      }
      return {
        ...state,
        cartItems: updatedItems,
      };
    }
    case CART_ACTION_TYPES.DELETE_ITEM: {
      const newTotal =
        state.totalAmount - action.payload.quantity * action.payload.price;
      const newQuantity = state.itemsQuantity - action.payload.quantity;
      return {
        ...state,
        totalAmount: newTotal,
        itemsQuantity: newQuantity,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    }
    default:
      return state;
  }
};
