import React, { useContext } from "react";
import Item from "../components/item/Item";
import { CartContext } from "../components/cartContext/CartContext";



const Cart = () => {

    const [items, setItems] = useContext(CartContext);
    console.log(items);



    for (let index = 0; index < items.length; index++) {
        if (items[index].quantity === 0) {
            items.splice(index, 1);
            index--;
            setItems(items);
        }
    }



    return (
        <div className="list">
            {items.map((item, indice) => (
                <Item items={item} key={indice} />
            ))}
        </div>
    );
}

export default Cart;

