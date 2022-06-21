import React from "react";
import Item from "../item/Item";
import "./ItemList.css";

const ItemList = ({ items }) => {
  return (
    <div className="list">
      {items.map((item) => (
        <Item items={item} />
      ))}
    </div>
  );
};

export default ItemList;
