import React from "react";
import "./ItemListContainer.css";
import ItemList from "../itemList/ItemList";




const ItemListContainer = (props) => {



  return (
    <div className="itemListContainer">
      <h1 className="title">{props.greeting}</h1>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
