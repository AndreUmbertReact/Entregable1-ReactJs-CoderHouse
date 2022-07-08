import React, { useContext } from 'react';
import "./CartSummary.css";
import { CartContext } from "../cartContext/CartContext";

export const CartSummary = () => {

    const [cartList, addCart, isInCart, itemsQuantity, clear, totalPrice, removeCart] = useContext(CartContext);

    return (
        <div className='cartSummary'>
            <h2>Resumen de Orden</h2>
            <div>
                <p>Total: {totalPrice()}</p>
            </div>
            <button className='finishOrder'>Finalizar Compra</button>
        </div>
    )
}
