import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png"
import CartWidget from '../cartWidget/CartWidget';
import { Link, useParams } from "react-router-dom";
import CategoryList from "../categoryList/CategoryList";
import { CartContext } from "../cartContext/CartContext";
import BurguerButton from "../burguerButton/BurguerButton";

const NavBar = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }
    return (
        <header className="header">
            <div className="logo"><Link className="anchorLogo" to={"/"}><img className="logoImg" src={logo} alt="Imagen del logo de la marca Namour Handbags" /></Link></div>
            <nav className={`navBar ${clicked ? "active" : " "}`}>
                <ul className="navBarUl">
                    <li className="navBarLi"><Link className="liAnchor" to={`/categoryList/Bandolera`} element={<CategoryList />}>Bandoleras</Link></li>
                    <li className="navBarLi"><Link className="liAnchor" to={`/categoryList/Mochila`} element={<CategoryList />}>Mochilas</Link> </li>
                    <li className="navBarLi"><Link className="liAnchor" to={`/categoryList/Riñonera`} element={<CategoryList />}>Riñoneras</Link></li>
                    <li className="navBarLi"><Link className="liAnchor" to={`/categoryList/Sobre`} element={<CategoryList />}>Sobres</Link></li>
                    <li className="navBarLi"><Link className="liAnchor" to={`/categoryList/Billetera`} element={<CategoryList />}>Billeteras</Link></li>
                    <CartWidget />
                </ul>
            </nav>
            <div className={`backgroundDiv  initial ${clicked ? "active" : ""}`}></div>
            <div className={`backgroundBlur  initial ${clicked ? "active" : ""}`}></div>
            <BurguerButton className="burgerButton" clicked={clicked} handleClick={handleClick} />
        </header>
    )
};

export default NavBar;