import React from 'react';
import "./OrderItems.css";

const OrderItems = ({ carteras }) => {
    return (
        <div className='orderItemsDiv'>
            <p className='orderItemsTexts'> {carteras.name}: </p> <p className='orderItemsTexts'> {carteras.quantity} </p> <p className='orderItemsTexts'>  ................ </p> <p className='orderItemsTexts'> ${carteras.price * carteras.quantity}</p>
        </div>
    )
}


export default OrderItems;
