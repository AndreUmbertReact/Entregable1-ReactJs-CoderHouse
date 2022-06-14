import React from "react";
import "./ItemListContainer.css";

const ItemListContainer = (props) => {
    console.log(props);
    return (
        <div className="itemListContainer">
            <h1 className="title">{props.greeting}</h1>
            <h2 className="subtitle">{props.intro}</h2>
        </div>
    )
};

export default ItemListContainer;