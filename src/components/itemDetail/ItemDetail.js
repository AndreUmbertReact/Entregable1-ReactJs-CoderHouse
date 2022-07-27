import React, { useContext, useParams } from "react";
import ItemCount from '../itemCount/ItemCount';
import "./ItemDetail.css";
import { CartContext } from "../cartContext/CartContext";

const ItemDetail = ({ carteras }) => {

    const [cartList, addCart, isInCart, itemsQuantity, clear] = useContext(CartContext);

    const onAdd = (quantity) => {

        addCart(carteras, quantity);
    }


    return (
        <div className="itemDetail" id={carteras.id} key={carteras.id}>
            <h4 className="itemName">{carteras.name}</h4>
            <img className='itemImg' src={carteras.pictureUrl} alt="Imagen del item" />
            <p className='itemInfo' >{carteras.details}</p>
            <p className='itemPrice'>$ {carteras.price}</p>
            <ItemCount className="itemCount" stock={carteras.stock} min={1} onAdd={onAdd} />
        </div >
    );


}

export default ItemDetail;