import React, { useEffect, useState } from "react";

const addItem = (cartItems, product) => {
  const existingItem = cartItems.find((item) => item.id === product.id);
  if (!existingItem) {
    cartItems.push({
      ...product,
      quantity: 1,
    });
  } else {
    existingItem.quantity++;
  }
  return [...cartItems];
};

const removeItem = (cartItems, product) => {
  const existingItemIndex = cartItems.findIndex(
    (item) => item.id === product.id
  );
  let updatedItems;
  if (
    cartItems[existingItemIndex] &&
    cartItems[existingItemIndex].quantity > 1
  ) {
    cartItems[existingItemIndex].quantity =
      cartItems[existingItemIndex].quantity - 1;
    updatedItems = [...cartItems];
    return updatedItems;
  }
  if (cartItems[existingItemIndex].quantity === 1) {
    updatedItems = cartItems.filter((item) => item.id !== product.id);
    return [...updatedItems];
  }
};

const deleteItem = (cartItems, product) => {
  return cartItems.filter((item) => item.id !== product.id);
};
const countTotalPrice = (cartItems) => {
  let total = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  return total;
};

export const CartContext = React.createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  totalQuantity: 0,
  removeItemFromCart: () => {},
  deleteItemFromCart: () => {},
  totalPrice: 0,
});

const CartContextProvider = (props) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotal = cartItems.reduce((ac, cart) => ac + cart.quantity, 0);
    setTotalQuantity(newTotal);
    setTotalPrice(countTotalPrice(cartItems));
  }, [cartItems]);

  const addItemToCart = (product) => {
    setCartItems(addItem(cartItems, product));
  };

  const removeItemFromCart = (product) => {
    setCartItems(removeItem(cartItems, product));
  };
  const deleteItemFromCart = (product) => {
    setCartItems(deleteItem(cartItems, product));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    totalQuantity,
    removeItemFromCart,
    deleteItemFromCart,
    totalPrice,
  };
  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};

export default CartContextProvider;
