import { createContext, useEffect, useState } from 'react';

const incrementQuantity = (cartItems, quantityToIncrement) => {
  return cartItems.map((cartItem) =>
    cartItem.id === quantityToIncrement.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};

const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearItemFromCart = (cartItems, productToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
};

const addCartItem = (cartItems, productToAdd) => {
  //Find if cartitems contains product to add
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  //If found, increment quantity
  if (existingCartItem) {
    return incrementQuantity(cartItems, productToAdd);
  }
  // return new array with modified cartitems/ new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: null,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  incrementCartItemQuantity: () => {},
  removeCartItem: () => {},
  clearCartItem: () => {},
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) =>
    setCartItems(addCartItem(cartItems, productToAdd));

  const incrementCartItemQuantity = (quantityToUpdate) => {
    setCartItems(incrementQuantity(cartItems, quantityToUpdate));
  };

  const removeCartItem = (quantityToUpdate) =>
    setCartItems(removeItemFromCart(cartItems, quantityToUpdate));

  const clearCartItem = (productToRemove) => {
    setCartItems(clearItemFromCart(cartItems, productToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    incrementCartItemQuantity,
    removeCartItem,
    clearCartItem,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
