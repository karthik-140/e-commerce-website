import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [items, setItems] = useState([]);
    let initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);
    const [userEmail, setUserEmail] = useState('');

    const userIsLoggedIn = !!token;

    const userIdentifierHandler = (email) => {
        const newUserEmail = email.replace('@', '').replace('.', '');
        setUserEmail(newUserEmail);
    }

    const addItemToCartHandler = async (item) => {
        let existingItemsIdx = items.findIndex((i) => i.id === item.id);
        if (existingItemsIdx === -1) {
            await axios.post(`https://crudcrud.com/api/5fbd8792fec44ee4832a7a07668a48f0/${userEmail}`, item)
        } else {
            const existingCartItem = items[existingItemsIdx];
            const id = items[existingItemsIdx]._id;
            const updatedCartItem = { ...item, quantity: existingCartItem.quantity + 1 };
            await axios.put(`https://crudcrud.com/api/5fbd8792fec44ee4832a7a07668a48f0/${userEmail}/${id}`, updatedCartItem)
        }
        const response = await axios.get(
            `https://crudcrud.com/api/5fbd8792fec44ee4832a7a07668a48f0/${userEmail}`
        )
        const data = await response.data;
        setItems(data);
    }

    useEffect(() => {
        const email = localStorage.getItem('email');
        const token = localStorage.getItem('token');
        if (email && token) {
            setToken(token);
            setUserEmail(email);
            axios.get(
                `https://crudcrud.com/api/5fbd8792fec44ee4832a7a07668a48f0/${userEmail}`
            ).then((res) => {
                setItems(res.data);
            })
        }
    }, [userEmail, token])

    const removeItemFromCartHandler =async (item) => {
        const existingItemsIdx = items.findIndex((i) => i.id === item.id);
        if (existingItemsIdx !== -1) {
            const id = items[existingItemsIdx]._id;
           await axios.delete(
                `https://crudcrud.com/api/5fbd8792fec44ee4832a7a07668a48f0/${userEmail}/${id}`
            )
        }
        const response =await axios.get(
            `https://crudcrud.com/api/5fbd8792fec44ee4832a7a07668a48f0/${userEmail}`
        )
        const data = response.data;
        setItems(data);
    }

    let totalPrice = 0;
    items.forEach((item) => {
        totalPrice = totalPrice + Number(item.price * item.quantity);
    });
    // const totalPrice = items.reduce((total,item)=>{
    //     return total + Number(item.price * item.quantity)
    // },0)

    const loginHandler = (token, email) => {
        localStorage.setItem('token', token);
        const modifyEmail = email.replace('@', '').replace('.', '');
        setUserEmail(modifyEmail);
        localStorage.setItem('email', modifyEmail);
        setToken(token);
    }

    const cartContext = {
        items: items,
        totalAmount: totalPrice,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        login: loginHandler,
        isLoggedIn: userIsLoggedIn,
        userIdentifier: userIdentifierHandler,
    }
    return (
        <CartContext.Provider value={cartContext} >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;