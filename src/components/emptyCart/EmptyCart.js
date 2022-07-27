import React from 'react';
import "./EmptyCart.css";
import { Link } from "react-router-dom";

const EmptyCart = () => {
    return (
        <div className='emptyCartDiv'>
            <img className='emptyCartImg' src='https://i.ibb.co/2NpptvK/empty-Cart.png' alt='imagen de carrito vacio' />
            <p className='emptyCartText'>You have no items in your cart.</p>
            <p className='emptyCartText'>Let's go to buy something!</p>
            <Link to={"/"}><button className='emptyCartButton'>Return to shop</button></Link>
        </div>
    )
}

export default EmptyCart;

