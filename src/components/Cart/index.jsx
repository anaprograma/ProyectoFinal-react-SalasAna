import React, { useContext } from "react";

import "./cart.css";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const getSubtotal = (product) => {
    return product.quantity * product.price;
  };
  const getTotal = () => {
    return cart.reduce((total, product) => total + getSubtotal(product), 0);
  };
  return (
    <div>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          {cart.map((product) => (
            <div className="cart-container" key={product.id}>
              <div className="row">
                <div className="col-3">
                  <img
                    src={product.img}
                    className="cart-img "
                    alt={product.name}
                  />
                </div>
                <div className="col">
                  <div>{product.name}</div>
                  <div>Cantidad: {product.quantity}</div>
                  <div>Precio: {product.price}</div>
                </div>
                <div className="col">
                  <button
                    className="buttons btn btn-link"
                    onClick={() => removeFromCart(product)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                  <div>Subtotal: {getSubtotal(product)}</div>
                </div>
              </div>
            </div>
          ))}

          <div className="cart-container">
            <div className="row">
              <div className="col-3">Total:{getTotal()}</div>
              <div className="col">
                <Link to={"/checkout"}>
                  <button type="button" className="btn btn-dark">
                    Confirmar
                  </button>
                </Link>
              </div>

              <div className="col">
                <Link to={"/"}>
                  <button type="button" className="btn btn-dark">
                    Volver
                  </button>
                </Link>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={clearCart}
                >
                  Vaciar
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
