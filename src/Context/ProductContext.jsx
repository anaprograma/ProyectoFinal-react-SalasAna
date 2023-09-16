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

  return (
    <ProductContext.Provider value={{ product }}>
      {children}
    </ProductContext.Provider>
  );
};

export function useProductContext() {
  return useContext(ProductContext);
}
