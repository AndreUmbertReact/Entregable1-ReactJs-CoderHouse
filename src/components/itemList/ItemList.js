import React, { useState, useEffect } from "react";
import Item from "../item/Item";
import "./ItemList.css";
import { db } from "../../firebase/FirabaseConfig";
import { collection, query, getDocs } from "firebase/firestore";


const ItemList = () => {

  const [carterasData, setCarterasData] = useState([]);

  const getCarteras = async () => {
    const q = query(collection(db, 'products'));
    const querySnapshot = await getDocs(q);
    const docs = [];
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, '=>', doc.data());
      docs.push({ ...doc.data(), id: doc.id })
    });
    setCarterasData(docs);
  };

  useEffect(() => {
    getCarteras();
  }, []);

  return (
    <div className="list">
      {carterasData.map((cartera, indice) => (
        <Item carteras={cartera} key={indice} />
      ))}
    </div>
  );
};

export default ItemList;
