import React, { useState, useEffect, useContext } from "react";
import { BsCart3 } from 'react-icons/bs';
import { CartContext } from "../cartContext/CartContext";
import { Link } from "react-router-dom";
import Cart from "../../views/Cart";
import "./CartWidget.css";



const CartWidget = () => {

    const [cartList, addCart, isInCart, itemsQuantity, clear] = useContext(CartContext);

    return (
        cartList.length === 0 ? null : <Link to={"/cart"} className="cartDiv">
            <li className="navBarLi liAnchor"><BsCart3 fontSize={"1.3vw"} /></li >
            <p className="navBarLi liAnchor">{itemsQuantity()}</p>
        </Link>
    )
}

export default CartWidget;