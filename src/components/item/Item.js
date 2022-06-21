import React from "react";
import "./Item.css";
import ItemCount from "../itemCount/ItemCount";

const Item = ({ items }) => {
  console.log(items);

  const onAdd = (counter) => {
    console.log(counter);
  };

  return (
    <div className="itemDiv">
      <h3 className="itemName">{items.name}</h3>
      <img
        className="itemImg"
        src={items.pictureUrl}
        alt="Imagen de cartera"
      ></img>
      <p className="itemPrice">Precio: ${items.price}</p>
      <button className="detailsButton">Detalles</button>
      <ItemCount stock={items.stock} min={1} onAdd={onAdd} />
      <div className="stockDiv">
        <p className="stockText">Stock: {items.stock}</p>
      </div>
    </div>
  );
};

export default Item;
