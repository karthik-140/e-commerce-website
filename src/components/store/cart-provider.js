import React, { useState, useEffect } from "react";
import axios from "axios";

import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  let initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const [userEmail, setUserEmail] = useState("");

  //console.log(items);
  // console.log(userEmail);

  const userIsLoggedIn = !!token;

  const userIdentifierHandler = (email) => {
    const newUserEmail = email.replace("@", "").replace(".", "");
    setUserEmail(newUserEmail);
  };

  const addItemToCartHandler = async (item) => {
    try {
      const itemsCopy = [...items];
      let existingItemIdx = itemsCopy.findIndex((i) => i.id === item.id);
      if (existingItemIdx === -1) {
        const response = await axios.post(
          `https://e-commerce-site-2c82f-default-rtdb.firebaseio.com/${userEmail}.json`,
          item
        );
        const name = response.data.name;
        const addItem = { key: name, ...item };
        setItems([...items, addItem]);
      } else {
        const existingCartItem = itemsCopy[existingItemIdx];
        existingCartItem.quantity += 1;
        //   existingCartItem.price = item.price * existingCartItem.quantity;
        const key = existingCartItem.key;
        await axios.put(
          `https://e-commerce-site-2c82f-default-rtdb.firebaseio.com/${userEmail}/${key}.json`,
          existingCartItem
        );
        setItems(itemsCopy);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    try {
      const fetchData = async () => {
        const email = localStorage.getItem("email");
        const token = localStorage.getItem("token");
        if (email && token) {
          setToken(token);
          setUserEmail(email);
          const response = await axios.get(
            `https://e-commerce-site-2c82f-default-rtdb.firebaseio.com/${userEmail}.json`
          );
          const data = response.data;
          const itemList = [];
          for (let key in data) {
            itemList.push({ key: key, ...data[key] });
          }
          setItems(itemList);
        //   .then((res) => {
        //       setItems(res.data);
        //   })
        }
      };
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, [userEmail, token]);

  const removeItemFromCartHandler = async (item) => {
    try {
      const itemsCopy = [...items];
      const existingItemsIdx = itemsCopy.findIndex((i) => i.id === item.id);
      const key = item.key;
      await axios.delete(
        `https://e-commerce-site-2c82f-default-rtdb.firebaseio.com/${userEmail}/${key}.json`
      );
      itemsCopy.splice(existingItemsIdx, 1);
      setItems(itemsCopy);
    } catch (err) {
      console.log(err);
    }
  };

  // let totalPrice = 0;
  //   items.forEach((item) => {
  //     totalPrice = totalPrice + Number(item.price * item.quantity);
  //   });

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price * item.quantity);
  }, 0);

  const loginHandler = (token, email) => {
    localStorage.setItem("token", token);
    const modifyEmail = email.replace("@", "").replace(".", "");
    setUserEmail(modifyEmail);
    localStorage.setItem("email", modifyEmail);
    setToken(token);
  };

  const cartContext = {
    items: items,
    totalAmount: totalPrice,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    login: loginHandler,
    isLoggedIn: userIsLoggedIn,
    userIdentifier: userIdentifierHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
