import "./style.css";
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";

function CartWidget() {
  const { cart } = useContext(CartContext);
  const totalQuantity = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );
  return (
    <Link to={"/cart"}>
      <div className="cartv">
        {" "}
        <Button className="cart-container" variant="light" size="lg">
          <i className="cart bi bi-cart3"></i>
          <span className="number">{totalQuantity}</span>
        </Button>
      </div>
    </Link>
  );
}

export default CartWidget;
