import { NavLink } from 'react-router-dom';
import React, { useContext } from "react";
import { Button, Navbar } from "react-bootstrap";
import classes from './Header.module.css';
import CartContext from "../store/cart-context";


const Header = (props) => {
    const cxt = useContext(CartContext);

    let quantity = 0;
    cxt.items.forEach((item) => {
        quantity = quantity + Number(item.quantity);
    })

    return (
        <>
            <Navbar bg="dark" expand="sm" variant="dark" className={classes.navbar} style={{ position: 'fixed' }} >
                {/* <header className={classes.header}> */}
                <ul className={classes.header}>
                    <li className={classes.li}>
                        <NavLink activeClassName={classes.active} to="/home">HOME</NavLink>
                    </li>
                    <li className={classes.li}>
                        <NavLink activeClassName={classes.active} to="/store">STORE</NavLink>
                    </li>
                    <li className={classes.li}>
                        <NavLink activeClassName={classes.active} to="/about">ABOUT</NavLink>
                    </li>
                    <li className={classes.li}>
                    <NavLink activeClassName={classes.active} to="/contact">Contact Us</NavLink>
                    </li>
                </ul>
                <Button className={classes['cart-button']} variant="warning" onClick={props.onShowCart} >
                    Your Cart
                    <strong> {quantity}</strong>
                </Button>
                {/* </header> */}
            </Navbar>
            <h1 style={{ fontSize: '100px' }}>The Generics</h1>
        </>
    )
}

export default Header;