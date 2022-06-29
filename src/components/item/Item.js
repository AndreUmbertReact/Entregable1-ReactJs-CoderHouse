import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ items }) => {

  return (
    <Link className="anchorItem" to={`/item/${items.id}`}>
      <div className="itemDiv">
        <h3 className="itemName">{items.login}</h3>
        <img
          className="itemImg"
          src={items.pictureUrl}
          alt="Imagen de cartera"
        />
        <p className="itemPrice">Precio: ${items.price}</p>
        <button className="detailsButton">Detalles</button>
        <div className="stockDiv">
          <p className="stockText">Stock: {items.stock}</p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
