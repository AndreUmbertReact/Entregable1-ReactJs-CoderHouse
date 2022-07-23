import React, { useContext, useState } from "react";
import Item from "../components/item/Item";
import { CartContext } from "../components/cartContext/CartContext";
import { CartDetail } from "../components/cartDetail/CartDetail";
import "./Cart.css";
import { CartSummary } from "../components/cartSummary/CartSummary";



const Cart = () => {

    const [cartList, addCart, isInCart, itemsQuantity, clear, totalPrice] = useContext(CartContext);

    const [summary, setSummary] = useState(false);


    function changeBoolean() {
        setSummary(summary => !summary);
        console.log(summary);
    }


    return (
        <div className="listCartContainer" >
            <div className="listCart">
                <h1 className="listTitle">Carrito</h1>
                {cartList.map((item, indice) => (
                    <CartDetail item={item} key={indice} />
                ))}
            </div>
            <button className="getCheckOutButton" onClick={changeBoolean}>Check Out</button>
            {summary && <CartSummary style={{ display: 'block' }} />}
        </div>
    );


}

export default Cart;

