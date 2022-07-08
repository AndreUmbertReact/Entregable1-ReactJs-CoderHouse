import React, { useContext } from 'react';
import "./CartDetail.css";
import { CartContext } from "../cartContext/CartContext";

export const CartDetail = ({ item }) => {

    const [cartList, addCart, isInCart, itemsQuantity, clear, totalPrice] = useContext(CartContext);


    return (
        <div className='itemCart' key={item.id}>
            <img className='itemCartImg' src={item.pictureUrl} alt={item.details} />
            <div className='itemCartInfo'>
                <h3 className='itemCartTitle'>{item.name}</h3>
                <div className='itemQuantity'>Cantidad: {item.quantity} unidades</div>
                <p className='itemPrice'>Precio: ${item.price}-.</p>
                <p className='itemSubtotal'>Subtotal: ${item.price * item.quantity}-.</p>
                <button className='removeButtonCart'>Eliminar</button>
            </div>
        </div>
    )
}
