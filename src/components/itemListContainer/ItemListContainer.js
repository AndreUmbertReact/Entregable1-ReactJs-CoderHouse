import React, { useState } from "react";
import "./ItemListContainer.css";
import "../itemCount/ItemCount";
import ItemCount from "../itemCount/ItemCount";

const ItemListContainer = (props) => {
    console.log(props);


    const onAdd = (counter) => {
        console.log(counter);
    }

    return (
        <div className="itemListContainer">
            <h1 className="title">{props.greeting}</h1>
            <h2 className="subtitle">{props.intro}</h2>
            <ItemCount stock={5} min={1} onAdd={onAdd} />
        </div>
    )
};

export default ItemListContainer;