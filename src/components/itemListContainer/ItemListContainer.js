import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../itemList/ItemList";
import { products } from "../../data/data"



const ItemListContainer = (props) => {


  const [carteras, setCarteras] = useState([]);


  useEffect(() => {

    setTimeout(() => { setCarteras(products); }, 2000);

  }, []);

  return (
    <div className="itemListContainer">
      <h1 className="title">{props.greeting}</h1>
      <ItemList carteras={carteras} />
    </div>
  );
};

export default ItemListContainer;
