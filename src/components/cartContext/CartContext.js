import React, { createContext, useState } from "react";
import { products } from "../../data/data";


export const CartContext = createContext();


export const ProductsProvider = ({ children }) => {
    const [items, setItems] = useState(products);

    return (
        <CartContext.Provider value={[items, setItems]}>
            {children}
        </CartContext.Provider>
    )
}
