import React, { useContext, useState } from 'react';
import "./CartSummary.css";
import { CartContext } from "../cartContext/CartContext";
import { TextField } from '@mui/material';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/FirabaseConfig";
import OrderMessage from "../orderMessage/OrderMessage";
import { map } from '@firebase/util';
import OrderItems from '../orderItem/OrderItems';


const products = [];

const initialState = {
    name: "",
    phone: "",
    email: "",
    products: products,
    date: new Date(),
};






export const CartSummary = () => {
    const [cartList, addCart, isInCart, itemsQuantity, clear, totalPrice, removeCart] = useContext(CartContext);


    const [values, setValues] = useState(initialState);

    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        // Nuevo objeto de orders    
        let items = [];
        cartList.forEach((item) => items.push({ id: item.id, title: item.name, price: item.price, quantity: item.quantity }));
        // setValues({ ...values, [products]: [items] });
        setValues({ ...values, products: items });
    }

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value });

    }


    const onSubmit = async (a) => {

        //DATOS COMPRADOR
        a.preventDefault();
        console.log(values);

        const docRef = await addDoc(collection(db, "orders"), {
            values,
        });
        setOrderId(docRef.id);
        setValues(initialState);

        //DATOS PRODUCTOS

    }



    return (
        <div className='cartSummary'>
            <h2>Resumen de Orden</h2>
            <div>
                <div >
                    {cartList.map((cartera, indice) => (
                        <OrderItems title={cartera.name} id={cartera.id} price={cartera.price} carteras={cartera} key={indice} />
                    ))}
                </div>
                <p>Total: {totalPrice()}</p>
            </div>
            <div>
                <h1>Contact</h1>
                <form onSubmit={onSubmit}>
                    <TextField margin='normal' className="outlinedBasic" label="Name" name="name" variant="outlined" value={values.name} onChange={handleOnChange} />
                    <TextField margin='normal' className="outlinedBasic" label="Phone" name="phone" variant="outlined" value={values.phone} onChange={handleOnChange} />
                    <TextField margin='normal' className="outlinedBasic" label="Email" name="email" variant="outlined" value={values.email} onChange={handleOnChange} />
                    <button className='finishOrder' onClick={generarOrden}>Finalizar Compra</button>
                </form>
                {orderId && <OrderMessage orderId={orderId} />}
            </div>
        </div>
    )
}
