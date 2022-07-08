import React, { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams, Link } from "react-router-dom";
import "../itemDetailConteiner/ItemDetailContainer.css"
import { getProductById } from "../../data/data";


const ItemDetailContainer = () => {

    const [carteras, setCarteras] = useState({});

    let { id } = useParams();


    useEffect(() => {

        getProductById(id)
            .then(res => {
                setCarteras(res);
            })
    }, [id]);


    return (
        <div className="itemDetailContainer">
            <ItemDetail carteras={carteras} />
        </div>
    )
}

// <Link className="itemDetailLink" to={`/item/${id}`}> <ItemDetail carteras={carteras} /></Link>
export default ItemDetailContainer;