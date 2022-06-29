import React from 'react';
import ItemCount from '../itemCount/ItemCount';
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
    console.log(item);
    return (
        <div className="itemDetail" id={item.id} key={item.id}>
            <h4 className="itemName">{item.name}</h4>
            <img className='itemImg' src={item.pictureUrl} alt="Imagen del item" />
            <p className='itemInfo' >{item.details}</p>
            <p className='itemPrice'>$ {item.price}</p>
            <ItemCount stock={item.stock} min={0} />
        </div >
    );
}

export default ItemDetail;