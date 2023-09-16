import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Counter = ({ stock, onadd }) => {
  const [count, setCount] = useState(1);
  const sum = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const minus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className="count">
      <button onClick={sum} className="buttons btn btn-link">
        <i className="bi bi-plus"></i>
      </button>
      <p className="Sum" style={{ margin: 0 }}>
        {count}
      </p>
      <button onClick={minus} className="buttons btn btn-link">
        <i className="bi bi-dash"></i>
      </button>
      <Link to={"/cart"}>
        <div className="addCart">
          <button
            onClick={() => onadd(count)}
            className="btn button btn btn-link"
          >
            <span className="buy">Add to Cart</span>
            <i className=" color bi bi-bag-heart-fill"></i>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Counter;
