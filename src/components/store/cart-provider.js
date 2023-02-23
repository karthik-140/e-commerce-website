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

    const addItemToCartHandler = (item) => {
        let itemsCopy = [...items];
        let itemIndex = itemsCopy.findIndex((i) => i.title === item.title);
        if (itemIndex === -1) {
            setItems([...items, item]);
        } else {
            itemsCopy[itemIndex].quantity++;
            itemsCopy[itemIndex].totalPrice = itemsCopy[itemIndex].quantity * itemsCopy[itemIndex].price;
            setItems(itemsCopy)
        }
        axios.post(`https://crudcrud.com/api/fb94854643ed487889afc3a81647f3ce/${userEmail}`, item)
    }

    useEffect(() => {
        const email = localStorage.getItem('email');
        const token = localStorage.getItem('token');
        if (email && token) {
            setToken(token);
            setUserEmail(email);
            axios.get(
                `https://crudcrud.com/api/fb94854643ed487889afc3a81647f3ce/${userEmail}`
            ).then((res) => {
                setItems(res.data);
            })
        }
    }, [userEmail, token])

    const removeItemFromCartHandler = (item) => {
        const itemsCopy = [...items];
        const idx = itemsCopy.findIndex((i) => i.title === item.title);

        if (idx !== -1) {
            itemsCopy.splice(idx, 1);
            setItems(itemsCopy);
        }
    }

    let totalPrice = 0;
    items.forEach((item) => {
        totalPrice = totalPrice + Number(item.price * item.quantity);
    });

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