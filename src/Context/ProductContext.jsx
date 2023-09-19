import React, { createContext, useContext, useState, useEffect } from "react";

// -----firebase-------
import { query, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProd = async () => {
      const q = query(collection(db, "products"));
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      setProduct(docs);
    };
    getProd();
  }, []);
  const updateStock = (productId, quantity) => {
    // Encuentra el producto por su ID y actualiza el stock
    const updatedProductList = product.map((p) => {
      if (p.id === productId) {
        // Asegura que el stock no sea menor que 0
        p.stock = Math.max(0, p.stock + quantity);
      }
      return { ...p }; // Devuelve una nueva copia del producto
    });

    // Actualiza el estado con la nueva lista de productos
    setProduct(updatedProductList);
  };

  return (
    <ProductContext.Provider value={{ product, updateStock }}>
      {children}
    </ProductContext.Provider>
  );
};

export function useProductContext() {
  return useContext(ProductContext);
}
