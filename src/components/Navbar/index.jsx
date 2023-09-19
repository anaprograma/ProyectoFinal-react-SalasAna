import CartWidget from "./CartWidget";
import Brand from "./brand";
import "./style.css";
import { Link } from "react-router-dom";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";

function Navbar() {
  return (
    <nav className="navbar  bg-body-tertiary ">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Contacto
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Productos
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/productos/remera">
                    Remeras
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/productos/pantalon">
                    Pantalones
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/productos/sweater">
                    Sweaters
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Brand />
        <CartWidget />
      </div>
    </nav>
  );
}

export default Navbar;
