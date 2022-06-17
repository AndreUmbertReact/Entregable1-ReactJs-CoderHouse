import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";
import "./ItemCount.css"

const ItemCount = ({ stock, min, onAdd }) => {

    const [counter, setCounter] = useState(min);


    const counterUp = () => {
        if (counter < stock) {
            setCounter(counter + 1);
            console.log(setCounter = (counter + 1));
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



    return (
        <div className="itemCountContainer">
            <div className="itemCounter">
                <button className="removeButton" onClick={counterMinus}><IoIosRemove className="remove" /></button>
                <p className="countNumber">{counter}</p>
                <button className="addButton" onClick={counterUp}><IoIosAdd className="add" /></button>
            </div>
            <button className="addCartButton" onClick={() => onAdd(counter)}>Agregar al carrito</button>
        </div>
    )


}




export default ItemCount;

