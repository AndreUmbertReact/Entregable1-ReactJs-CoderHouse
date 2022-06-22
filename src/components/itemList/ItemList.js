import React from "react";
import Item from "../item/Item";
import "./ItemList.css";

const ItemList = ({ items }) => {
  return (
    <div className="list">
      {items.map((item, indice) => (
        <Item items={item} key={indice} />
      ))}
    </div>
  );
};

export default ItemList;
