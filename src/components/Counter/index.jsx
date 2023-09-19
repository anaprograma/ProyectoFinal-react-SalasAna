import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Counter = ({ stock, onadd }) => {
  const [count, setCount] = useState(1);

  const Increase = count < stock;
  const Decrease = count > 1;
  const sum = () => {
    if (Increase) {
      setCount(count + 1);
    }
  };
  const minus = () => {
    if (Decrease) {
      setCount(count - 1);
    }
  };
  return (
    <div className="count">
      <button onClick={minus} className="buttons btn btn-link">
        <i className="bi bi-dash"></i>
      </button>
      <p className="Sum" style={{ margin: 0 }}>
        {count}
      </p>
      <button onClick={sum} className="buttons btn btn-link">
        <i className="bi bi-plus"></i>
      </button>
      <Link to={"/cart"}>
        <div className="addCart">
          <button
            onClick={() => onadd(count)}
            className={`btn button btn btn-link ${Increase ? "" : "disabled"}`}
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
