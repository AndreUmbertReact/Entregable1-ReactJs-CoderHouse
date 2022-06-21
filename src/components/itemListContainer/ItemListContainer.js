import React from "react";
import "./ItemListContainer.css";
import ItemCount from "../itemCount/ItemCount";
import ItemList from "../itemList/ItemList";
import Bella from "../../assets/Bella.png";
import Nina from "../../assets/Nina.png";
import UrbanChic from "../../assets/Urban-Chic.png";

const ItemListContainer = (props) => {
  console.log(props);

  const items = [
    {
      name: "Bella",
      price: 3000,
      pictureUrl: Bella,
      stock: 20,
    },
    {
      name: "Nina",
      price: 2000,
      pictureUrl: Nina,
      stock: 10,
    },
    {
      name: "Urban-Chic",
      price: 1000,
      pictureUrl: UrbanChic,
      stock: 5,
    },
  ];

  return (
    <div className="itemListContainer">
      <h1 className="title">{props.greeting}</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
