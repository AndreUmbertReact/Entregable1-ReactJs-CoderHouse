import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ carteras }) => {

  return (
    <Link className="anchorItem" to={`/item/${carteras.id}`}>
      <div className="itemDiv">
        <h3 className="itemName">{carteras.name}</h3>
        <img
          className="itemImg"
          src={carteras.pictureUrl}
          alt="Imagen de cartera"
        />
        <p className="itemPrice">Precio: ${carteras.price}</p>
        <button className="detailsButton">Detalles</button>
        <div className="stockDiv">
          <p className="stockText">Stock: {carteras.stock}</p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
