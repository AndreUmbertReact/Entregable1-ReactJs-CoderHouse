import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Item from "../item/Item";
import { db } from "../../firebase/FirabaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";
import "./CategoryList.css";

const CategoryList = () => {

    const [productsData, setProductsData] = useState([]);
    console.log(productsData);

    const { category } = useParams();

    useEffect(() => {
        const getProductsData = async () => {
            const q = query(collection(db, "products"), where("category", "==", category));
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setProductsData(docs);
        }
        getProductsData();
    }, [category]);


    return (
        <div className='backgroundCategoryList'>
            <p className='categoryListTitle'>{category}</p>
            <div className='list'>
                {productsData.map((cartera, indice) => (
                    <Item carteras={cartera} key={indice} />
                ))}
            </div>
        </div>
    )
}

export default CategoryList;
