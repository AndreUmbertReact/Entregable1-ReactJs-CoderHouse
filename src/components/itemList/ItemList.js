import React from "react";
import Item from "../item/Item";
import "./ItemList.css";


const ItemList = ({ carteras }) => {
  return (
    <div className="list">
      {carteras.map((cartera, indice) => (
        <Item carteras={cartera} key={indice} />
      ))}
    </div>
  );
};

export default ItemList;
