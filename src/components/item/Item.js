import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ carteras }) => {

  return (
    <Link className="anchorItem" to={`/item/${carteras.id}`}>
      <div className="itemDiv">
        <h3 className="itemNameList">{carteras.name}</h3>
        <img
          className="itemImgList"
          src={carteras.pictureUrl}
          alt="Imagen de cartera"
        />
        <p className="itemPriceList">Price: ${carteras.price}</p>
        <button className="detailsButton">Details</button>
        <div className="stockDiv">
          <p className="stockText">Stock: {carteras.stock}</p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
