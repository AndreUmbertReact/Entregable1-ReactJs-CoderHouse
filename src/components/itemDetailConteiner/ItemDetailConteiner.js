import React, { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "../itemDetailConteiner/ItemDetailContainer.css"
import { getProductById, products } from "../../data/data";
import IdNotExist from "../idNotExist/IdNotExist";


const ItemDetailContainer = () => {


    const [carteras, setCarteras] = useState({});

    const [idItem, setIdItem] = useState();

    let { id } = useParams();


    useEffect(() => {
        if (id > products.length) {
            console.log("este producto no esta disponible");
        } else {
            getProductById(id)
                .then(res => {
                    setCarteras(res);
                    setIdItem(id);
                })
        }
    }, [id]);


    return (
        <div className="itemDetailContainer">
            {idItem ? <ItemDetail carteras={carteras} /> : <IdNotExist />}
        </div>
    )
}

export default ItemDetailContainer;