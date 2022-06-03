import "./NavBar.css";
import logo from "../assets/logo.png"

const NavBar = () => {
    return (
        <header className="header">
            <div className="logo"><img className="logoImg" src={logo} alt="Imagen del logo de la marca Namour Handbags" /></div>
            <nav className="navBar">
                <ul className="navBarUl">
                    <li className="navBarLi"><a className="liAnchor" href="#">Products</a></li>
                    <li className="navBarLi"><a className="liAnchor" href="#">About Us</a></li>
                    <li className="navBarLi"><a className="liAnchor" href="#">Contact</a></li>
                    <li className="navBarLi"><a className="liAnchor" href="#">Cart</a></li>
                </ul>
            </nav>
        </header>
    )
};

export default NavBar;