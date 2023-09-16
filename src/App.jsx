import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

//-----component----
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import ItemDetail from "./components/ItemDetail";
//-----pages----
import Inicio from "./pages/Inicio";
import ProductCategory from "./pages/ProductCategory";

//-----contextProviders----------
import { ProductProvider } from "./Context/ProductContext";

import { CartProvider } from "./Context/CartContext";
function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <div className="page-container">
          <div className="content-wrap">
            <Router>
              <div className="main">
                <Navbar></Navbar>

                <Routes>
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/" element={<Inicio />} />
                  <Route
                    path="/productos/:category"
                    element={<ProductCategory />}
                  />

                  <Route path="/Itemdetail/:id" element={<ItemDetail />} />
                </Routes>
              </div>
            </Router>
          </div>
          <Footer />
        </div>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
