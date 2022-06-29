import React, { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams, Link } from "react-router-dom";
import "../itemDetailConteiner/ItemDetailContainer.css"
import { getProductById } from "../../data/data";


const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    let { id } = useParams();


    useEffect(() => {

        console.log(id);

        getProductById(id)
            .then(res => {
                setItem(res);
            })

        setTimeout(getProductById, 2000);


    }, [id]);


    return (
        <div className="itemDetailContainer">
            <Link to={`/item/${id}`}> <ItemDetail item={item} /></Link>
        </div>
    )
}

export default ItemDetailContainer;