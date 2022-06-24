import React from 'react';
import ItemCount from '../itemCount/ItemCount';
import "./ItemDetail.css";

const ItemDetail = ({ usuario }) => {
    console.log(usuario);
    return (
        <div className="itemDetail" id={usuario.id} key={usuario.id}>
            <h4 className="itemName">{usuario.name}</h4>
            <img className='itemImg' src={usuario.avatar_url} alt="Imagen del item" />
            <p className='itemInfo' > Lorem ipsum dolor sit amet. Est explicabo velit qui porro maxime aut quos voluptas hic magnam rerum et dolorem labore ea nesciunt assumenda. Aut unde ipsum non ducimus expedita et enim corporis ut velit voluptas est incidunt nulla.

                Et adipisci numquam id deserunt dignissimos eum nemo aspernatur. Eum perspiciatis eligendi ut voluptatibus maiores id placeat impedit eum labore aperiam. Eum animi voluptatibus qui laborum provident in consequatur labore qui dolorem quia est aliquam odio. Et iure consequatur aut reprehenderit molestiae 33 assumenda delectus.</p>
            <p className='itemPrice'>$ {usuario.id}</p>
            <ItemCount stock={usuario.login} min={0} />
        </div >
    );
}

export default ItemDetail;