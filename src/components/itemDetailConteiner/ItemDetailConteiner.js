import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams, Link } from "react-router-dom";
import "../itemDetailConteiner/ItemDetailContainer.css"


const ItemDetailContainer = (props) => {

    const [usuario, setUsuario] = useState({});

    let { id } = useParams();
    console.log(id);
    useEffect(() => {

        function axiosFunction() {
            axios(`https://api.github.com/users/${id}`)
                .then((res) => setUsuario(res.data));
        }

        setTimeout(axiosFunction, 2000);


    }, [id]);


    return (
        <div className="itemDetailContainer">
            <Link to={`/user/${id}`}> <ItemDetail usuario={usuario} /></Link>

        </div>
    )
}

export default ItemDetailContainer;