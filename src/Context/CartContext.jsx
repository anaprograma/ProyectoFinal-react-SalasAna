import React, { createContext, useState } from "react";

export const CartContext = createContext({ cart: [] });

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    if (!inCart(product.id)) {
      setCart((prev) => [...prev, { ...product, quantity }]);
    } else {
      console.log("el producto ya fue agregado");
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };
  const clearCart = () => {
    setCart([]);
  };
  const inCart = (product) => {
    return cart.some((prod) => prod.id === product.id);
  };
  return (
    <CartContext.Provider
      value={{ cart, removeFromCart, clearCart, addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
