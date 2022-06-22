import React from "react";
import "./Item.css";
import ItemCount from "../itemCount/ItemCount";

const Item = ({ items }) => {
  const onAdd = (counter) => {
    console.log(counter);
  };

  return (
    <div className="itemDiv">
      <h3 className="itemName">{items.login}</h3>
      <img
        className="itemImg"
        src={items.avatar_url}
        alt="Imagen de cartera"
      ></img>
      <p className="itemPrice">Precio: ${items.id}</p>
      <button className="detailsButton">Detalles</button>
      <ItemCount stock={items.id} min={1} onAdd={onAdd} />
      <div className="stockDiv">
        <p className="stockText">Stock: {items.id}</p>
      </div>
    </div>
  );
};

export default Item;
