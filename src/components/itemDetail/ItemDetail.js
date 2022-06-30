import React from "react";
import ItemCount from '../itemCount/ItemCount';
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {

    const onAdd = (add) => {

        console.log(add);
    }



    return (
        <div className="itemDetail" id={item.id} key={item.id}>
            <h4 className="itemName">{item.name}</h4>
            <img className='itemImg' src={item.pictureUrl} alt="Imagen del item" />
            <p className='itemInfo' >{item.details}</p>
            <p className='itemPrice'>$ {item.price}</p>
            <ItemCount className="itemCount" stock={item.stock} min={1} onAdd={onAdd} />
        </div >
    );


}

export default ItemDetail;