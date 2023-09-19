import "./style.css";

import { useProductContext } from "../../Context/ProductContext";

import ItemList from "../ItemList";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function ItemListContainer() {
  const { product } = useProductContext();
  const [isLoading, setIsLoading] = useState(true); // control spinner
  console.log(product);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container-itemlist">
      {product.map((prod) => {
        return (
          <div key={prod.id}>
            <Link to={`/ItemDetail/${prod.id}`}>
              <ItemList data={prod} stock={prod.stock} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ItemListContainer;
