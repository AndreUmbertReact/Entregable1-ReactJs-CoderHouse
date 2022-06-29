import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../itemList/ItemList";
import { products } from "../../data/data"



const ItemListContainer = (props) => {


  const [items, setItems] = useState([]);


  useEffect(() => {

    setTimeout(() => { setItems(products); }, 2000);

  }, []);

  return (
    <div className="itemListContainer">
      <h1 className="title">{props.greeting}</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
