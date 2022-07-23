import React, { useContext, useState } from 'react';
import "./CartSummary.css";
import { CartContext } from "../cartContext/CartContext";
import { TextField } from '@mui/material';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/FirabaseConfig";
import OrderMessage from "../orderMessage/OrderMessage";
import { map } from '@firebase/util';
import OrderItems from '../orderItem/OrderItems';
import ErrorMessage from '../errorMessage/ErrorMessage';

const products = [];

const initialState = {
    name: "",
    phone: "",
    email: "",
    reEmail: "",
    products: products,
    date: new Date(),
};






export const CartSummary = () => {
    const [cartList, addCart, isInCart, itemsQuantity, clear, totalPrice, removeCart] = useContext(CartContext);


    const [values, setValues] = useState(initialState);

    const [orderId, setOrderId] = useState("");

    const [errorMail, setErrorMail] = useState(false);

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
        if (values.email === values.reEmail) {
            const docRef = await addDoc(collection(db, "orders"), {
                values,
            });
            setOrderId(docRef.id);
            setValues(initialState);
            setErrorMail(errorMail => false)
        } else {
            setErrorMail(errorMail => !errorMail);
        }
    }



    return (
        <div className='cartSummary'>
            {errorMail && <ErrorMessage />}
            <h2 className='cartTitle'>Resumen de Orden</h2>
            <div className='cartTextProducts'>
                <div className='cartTextProductsEachOne'>
                    {cartList.map((cartera, indice) => (
                        <OrderItems title={cartera.name} id={cartera.id} price={cartera.price} carteras={cartera} key={indice} />
                    ))}
                </div>
                <div className='totalPriceSummary'><p className='priceText'>Total:</p> <p className='priceText'>${totalPrice()}</p></div>
            </div>
            <div >
                <h1>Contact</h1>
                <form className='cartForm' onSubmit={onSubmit}>
                    <TextField margin='normal' className="outlinedBasic" label="Name and Lastname" name="name" variant="outlined" value={values.name} onChange={handleOnChange} />
                    <TextField margin='normal' className="outlinedBasic" label="Phone" name="phone" variant="outlined" value={values.phone} onChange={handleOnChange} />
                    <TextField margin='normal' className="outlinedBasic" label="Email" name="email" variant="outlined" value={values.email} onChange={handleOnChange} />
                    <TextField margin='normal' className="outlinedBasic" label="Re-Email" name="reEmail" variant="outlined" value={values.reEmail} onChange={handleOnChange} />
                    {values.name.length && values.phone.length && values.email.length && values.reEmail.length > 5 ? <button className='finishOrder' onClick={generarOrden}>Finalizar Compra</button> : null}
                </form>
                {orderId && <OrderMessage orderId={orderId} />}
            </div>
        </div>
    )
}
