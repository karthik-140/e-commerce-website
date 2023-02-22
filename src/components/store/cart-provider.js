import React, { useState } from 'react';

import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [items, setItems] = useState([]);
    let initialToken = localStorage.getItem('token');
    const [token, setToken]= useState(initialToken);

    const userIsLoggedIn = !!token;

    const addItemToCartHandler = (item) => {
        console.log(item)
        let itemsCopy = [...items];
        let itemIndex = itemsCopy.findIndex((i) => i.title === item.title);
        if (itemIndex === -1) {
            setItems([...items, item]);
        } else {
            itemsCopy[itemIndex].quantity++;
            itemsCopy[itemIndex].totalPrice = itemsCopy[itemIndex].quantity * itemsCopy[itemIndex].price;
            setItems(itemsCopy)
        }
    }

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

    const loginHandler = (token) => {
        localStorage.setItem('token',token);
        setToken(token);
    }

    const cartContext = {
        items: items,
        totalAmount: totalPrice,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        login: loginHandler,
        isLoggedIn: userIsLoggedIn,
    }
    return (
        <CartContext.Provider value={cartContext} >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;