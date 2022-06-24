import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../itemList/ItemList";
import Bella from "../../assets/Bella.png";
import Nina from "../../assets/Nina.png";
import UrbanChic from "../../assets/Urban-Chic.png";
import { render } from "@testing-library/react";



const ItemListContainer = (props) => {

  // const items = [
  //   {
  //     name: "Bella",
  //     price: 3000,
  //     pictureUrl: Bella,
  //     stock: 20,
  //   },
  //   {
  //     name: "Nina",
  //     price: 2000,
  //     pictureUrl: Nina,
  //     stock: 10,
  //   },
  //   {
  //     name: "Urban-Chic",
  //     price: 1000,
  //     pictureUrl: UrbanChic,
  //     stock: 5,
  //   },
  // ];

  const [items, setItems] = useState([]);


  useEffect(() => {

    function fetchFunction() {
      fetch('https://api.github.com/users')
        .then((data) => data.json())
        .then((info) => setItems(info))
    }

    setTimeout(fetchFunction, 2000);


  }, []);


  return (
    <div className="itemListContainer">
      <h1 className="title">{props.greeting}</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
