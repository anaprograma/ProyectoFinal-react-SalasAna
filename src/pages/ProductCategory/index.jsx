import React from "react";
import ItemList from "../../components/ItemList";
import { useEffect, useState } from "react";
import { useProductContext } from "../../Context/ProductContext";
import { Link, useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import "./style.css";

const ProductCategory = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { product } = useProductContext();
  const [categories, setCategories] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const filterProd = () => {
      try {
        setTimeout(() => {
          const productFiltered = product.filter(
            (prod) => prod.category === category
          );
          setCategories(productFiltered);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    filterProd();
  }, [category, product]);
  if (isLoading) {
    return <Spinner />;
  }
  console.log(product);
  return (
    <div className="product-category">
      {categories.map((product) => (
        <div key={product.id}>
          <Link to={`/ItemDetail/${product.id}`}>
            <ItemList data={product} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductCategory;
