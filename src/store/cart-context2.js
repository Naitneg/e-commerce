import React, { useReducer } from "react";
export const CartContext2 = React.createContext({
  isCartOpen: false,
  cartItems: [],
  itemsQuantity: 0,
  totalAmount: 0,
});

const INITIAL_STATE2 = {
  isCartOpen: false,
  cartItems: [],
  itemsQuantity: 0,
  totalAmount: 0,
};

const Cart2Reducer = (state, action) => {
  switch (action.type) {
    case "CART_IS_OPEN":
      return { ...state, isCartOpen: !state.isCartOpen };
    case "ADD_TO_CART":
      const newtotalAmount1 = state.totalAmount + action.item.price;
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.item.id
      );
      const newTotal = state.itemsQuantity + 1;
      let updatedCartItems;
      if (!existingCartItem) {
        updatedCartItems = [
          ...state.cartItems,
          { ...action.item, quantity: 1 },
        ];
      } else {
        updatedCartItems = state.cartItems.map((cartItem) =>
          cartItem.id === action.item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return {
        ...state,
        cartItems: updatedCartItems,
        itemsQuantity: newTotal,
        totalAmount: newtotalAmount1,
      };
    case "REMOVE_ITEM":
      const newtotalAmount2 = state.totalAmount - action.item.price;
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.item.id
      );

      const existingItem = state.cartItems[itemIndex];
      const newtotal2 = state.itemsQuantity - 1;
      let updatedItems;
      if (existingItem.quantity === 1) {
        updatedItems = state.cartItems.filter(
          (item) => item.id !== existingItem.id
        );
      } else {
        updatedItems = [...state.cartItems];
        updatedItems[itemIndex] = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };
      }

      return {
        ...state,
        cartItems: updatedItems,
        itemsQuantity: newtotal2,
        totalAmount: newtotalAmount2,
      };
    case "DELETE_ITEM":
      const newtotal3 = state.itemsQuantity - action.item.quantity;
      const newtotalAmount3 =
        state.totalAmount - action.item.quantity * action.item.price;
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.item.id),
        itemsQuantity: newtotal3,
        totalAmount: newtotalAmount3,
      };
    default:
      return state;
  }
};

const CartContext2Provider = (props) => {
  const [{ isCartOpen, cartItems, itemsQuantity, totalAmount }, dispatch] =
    useReducer(Cart2Reducer, INITIAL_STATE2);

  const cartIsOpenHandler = () => {
    dispatch({ type: "CART_IS_OPEN" });
  };
  const addToCartHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", item: product });
  };

  const removeFromCartHandler = (product) => {
    dispatch({ type: "REMOVE_ITEM", item: product });
  };

  const deleteFromCartHandler = (product) => {
    dispatch({ type: "DELETE_ITEM", item: product });
  };
  const value = {
    isCartOpen,
    cartIsOpenHandler,
    cartItems,
    addToCartHandler,
    itemsQuantity,
    removeFromCartHandler,
    deleteFromCartHandler,
    totalAmount,
  };
  return (
    <CartContext2.Provider value={value}>
      {props.children}
    </CartContext2.Provider>
  );
};

export default CartContext2Provider;
