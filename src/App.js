import React from "react";
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import "./App.css";
import ItemDetailContainer from "./components/itemDetailConteiner/ItemDetailConteiner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductsProvider } from "./components/cartContext/CartContext";
import Cart from "./views/Cart";
import { async } from "@firebase/util";
import CategoryList from "../src/components/categoryList/CategoryList";

function App() {


  return (
    <Router>
      <ProductsProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="Carteras" />}
            ></Route>
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/categoryList/:category" element={<CategoryList />} />
            <Route path="/cart" element={<CategoryList />} />
          </Routes>
        </div>
      </ProductsProvider>
    </Router>
  );
}

export default App;
