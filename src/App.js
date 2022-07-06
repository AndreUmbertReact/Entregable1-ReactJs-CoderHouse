import React, { useState, useContext } from "react";
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import "./App.css";
import ItemDetailContainer from "./components/itemDetailConteiner/ItemDetailConteiner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductsProvider } from "./components/cartContext/CartContext";
import Cart from "./views/Cart";

function App() {

  return (
    <ProductsProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="Carteras" />}
            ></Route>
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </ProductsProvider>
  );
}

export default App;
