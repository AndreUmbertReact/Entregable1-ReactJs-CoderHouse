import React, { createContext, useState } from "react";


export const CartContext = createContext();


export const ProductsProvider = ({ children }) => {

    const [cartList, setCartList] = useState([]);


    function isInCart(id) {
        return cartList.some(item => item.id === id);
    }

    function addCart(cartera, quantity) {
        if (quantity === 0) {
            return;
        }


        let exist = isInCart(cartera.id);

        if (exist) {

            let itemCart = cartList.find(item => item.id === cartera.id);
            itemCart.quantity += quantity;
            setCartList([...cartList]);
        } else {
            setCartList([...cartList, { ...cartera, quantity }]);
        }
    }

    function itemsQuantity() {
        return cartList.reduce((total, cartera) => total + cartera.quantity, 0);
    }

    function totalPrice() {
        return cartList.reduce((total, cartera) => total + cartera.quantity * cartera.price, 0);
    }

    function clear() {
        cartList = [];
    }


    return (
        <CartContext.Provider value={[cartList, addCart, isInCart, itemsQuantity, clear, totalPrice]}>
            {children}
        </CartContext.Provider>
    )
}
