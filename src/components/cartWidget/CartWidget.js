import cart from '../../assets/cart.svg';

const CartWidget = () => {
    return (
        <li className="navBarLi"><a className="liAnchor" href="#"><img src={cart} alt="Icono de carrito de compras"></img></a></li>
    )
}

export default CartWidget;