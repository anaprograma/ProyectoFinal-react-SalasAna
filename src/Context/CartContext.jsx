import React, { createContext, useState, useContext } from "react";
import { useProductContext } from "../Context/ProductContext";

export const CartContext = createContext({ cart: [] });

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //para poder manejar el stock necesito tener el contexto de product
  const productContext = useProductContext();

  const addToCart = (product, quantity) => {
    // Verificar si el producto ya está en el carrito
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // Producto ya en el carrito, actualizar cantidad
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      // Producto no en el carrito, agregarlo
      setCart([...cart, { ...product, quantity }]);
    }
    productContext.updateStock(product.id, -quantity);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
    productContext.updateStock(product.id, product.quantity);
  };
  const clearCart = () => {
    // Devuelve todas las cantidades de productos al stock en el contexto de productos
    cart.forEach((product) => {
      productContext.updateStock(product.id, product.quantity);
    });
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
