import React from 'react';
import { BsHandbag } from 'react-icons/bs';
import "./IdNotExist.css";
import { Link } from "react-router-dom";

const IdNotExist = () => {


    return (
        <div className='notExistContainer'>
            <p className='notExistText'>Este producto no se encuentra en stock</p>
            <BsHandbag className='notExistIcon' />
            <Link to={"/"}><button className='notExistRedirectButton'>Otros productos</button></Link>
        </div>
    )
}

export default IdNotExist;