import React, { useState, useEffect, useContext } from "react";
import { BsCart3 } from 'react-icons/bs';
import { CartContext } from "../cartContext/CartContext";
import { Link } from "react-router-dom";
import Cart from "../../views/Cart";
import "./CartWidget.css";



const CartWidget = () => {
    const [items, setItems] = useContext(CartContext);
    console.log(items);

    let cartQuantity = 0;

    for (let index = 0; index < items.length; index++) {
        cartQuantity += items[index].quantity;

    }

    console.log(cartQuantity);

    return (
        <div className="cartDiv">
            <Link className="liAnchor" to={"/cart"} element={<Cart />} ><li className="navBarLi"><BsCart3 fontSize={"1.3vw"} /></li ></Link>
            <p>{cartQuantity}</p>
        </div>
    )
}

export default CartWidget;