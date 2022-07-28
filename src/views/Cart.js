import React, { useContext, useState } from "react";
import { CartContext } from "../components/cartContext/CartContext";
import { CartDetail } from "../components/cartDetail/CartDetail";
import "./Cart.css";
import { CartSummary } from "../components/cartSummary/CartSummary";
import EmptyCart from "../components/emptyCart/EmptyCart";



const Cart = () => {

    const [cartList, addCart, isInCart, itemsQuantity, clear, totalPrice] = useContext(CartContext);

    const [summary, setSummary] = useState(false);


    function changeBoolean() {
        setSummary(summary => !summary);
        console.log(summary);
    }

    console.log(cartList);
    return (
        <div className="listCartContainer" >
            <div className="listCart">
                {cartList.length > 0 ? <h1 className="listTitle">Cart</h1> : null}
                {cartList.map((item, indice) => (
                    <CartDetail item={item} key={indice} />
                ))}
            </div>
            {cartList.length > 0 ? <button className="getCheckOutButton" onClick={changeBoolean}>Checkout</button> : <EmptyCart />}
            {summary && cartList.length > 0 ? <CartSummary style={{ display: 'block' }} /> : null}
        </div>
    );


}

export default Cart;

