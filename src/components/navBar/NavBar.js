import React, { useState, useEffect } from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png"
import CartWidget from '../cartWidget/CartWidget';
import { Link, useParams } from "react-router-dom";
import ItemListContainer from "../itemListContainer/ItemListContainer";
import { getProductsByCategoryId } from "../../data/data";

const NavBar = () => {

    const [category, setCategory] = useState({});

    let { categoryId } = useParams();


    useEffect(() => {

        getProductsByCategoryId(categoryId)
            .then(res => {
                setCategory(res);
            })

        setTimeout(getProductsByCategoryId, 2000);


    }, [categoryId]);



    return (
        <header className="header">
            <div className="logo"><Link className="anchorLogo" to={"/"}><img className="logoImg" src={logo} alt="Imagen del logo de la marca Namour Handbags" /></Link></div>
            <nav className="navBar">
                <ul className="navBarUl">
                    <li className="navBarLi"><Link className="liAnchor" to={`/category/:${categoryId}`} element={<ItemListContainer category={category} />}>Carteras</Link></li>
                    <li className="navBarLi"><Link className="liAnchor" to={`/category/:${categoryId}`} element={<ItemListContainer category={category} />}>Bandoleras</Link> </li>
                    <li className="navBarLi"><Link className="liAnchor" to={`/category/:${categoryId}`} element={<ItemListContainer category={category} />}>Mochilas</Link></li>
                    <li className="navBarLi"><Link className="liAnchor" to={`/category/:${categoryId}`} element={<ItemListContainer category={category} />}>Riñoneras</Link></li>
                    <li className="navBarLi"><Link className="liAnchor" to={`/category/:${categoryId}`} element={<ItemListContainer category={category} />}>Billeteras</Link></li>
                    <CartWidget />
                </ul>
            </nav>
        </header>
    )
};

export default NavBar;