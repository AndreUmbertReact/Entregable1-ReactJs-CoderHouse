import React, { useState, useContext } from "react";
import { IoIosAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";
import "./ItemCount.css"
import { Link } from "react-router-dom";
import Cart from "../../views/Cart";
import { CartContext } from "../cartContext/CartContext";

const ItemCount = ({ data, stock, min, onAdd }) => {
    const [counter, setCounter] = useState(min);

    const [item, setItem] = useContext(CartContext)
    console.log(item);

    const counterUp = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        } else {
            console.log("You are actually out of stock");
            alert("You are actually out of stock");
        }
    };

    const counterMinus = () => {
        if (counter > min) {
            setCounter(counter - 1)
        } else {
            console.log("Please entry quantity higher than 0");
            alert("Please entry quantity higher than 0");
        }

    };

    const [add, setAdd] = useState(1);

    const getItems = [item]
    console.log(getItems);
    const newItem = [data];
    console.log(newItem);

    function pushCarrito() {
        onAdd(counter)
        setAdd(counter)
        newItem[0].quantity = counter;
        setItem(newItem);
    }


    return (

        <div className="itemCountContainer">
            <div className="itemCounter">
                <button className="removeButton" onClick={counterMinus}><IoIosRemove className="remove" /></button>
                <p className="countNumber">{counter}</p>
                <button className="addButton" onClick={counterUp}><IoIosAdd className="add" /></button>
            </div>
            <Link to={"/cart"} element={<Cart />}><button className="addCartButton" onClick={pushCarrito}>Agregar al carrito</button></Link>
            {/* <button onClick={Delete}>Delete</button> */}
        </div>
    )


}




export default ItemCount;

