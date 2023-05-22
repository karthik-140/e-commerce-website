import { NavLink, useLocation } from "react-router-dom";
import React, { useState, useContext } from "react";
import { Button, Navbar } from "react-bootstrap";
import classes from "./Header.module.css";
import CartContext from "../store/cart-context";

const Header = (props) => {
  const [showToggleMenu,setShowToggleMenu] = useState(false);
  const cxt = useContext(CartContext);
  const location = useLocation();
  

  let quantity = 0;
  cxt.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });

  return (
    <>
      <Navbar
        bg="dark"
        expand="sm"
        variant="dark"
        className={classes.navbar}
        style={{ position: "fixed" }}
      >
        {/* <header className={classes.header}> */}
        <button onClick={() => setShowToggleMenu(!showToggleMenu)} className={classes.toggle_button} >
          <span className={classes.bar}></span>
          <span className={classes.bar}></span>
          <span className={classes.bar}></span>
        </button>

        {showToggleMenu && <ul className={classes.toggle_header}>
          <li className={classes.li}>
            <NavLink activeClassName={classes.active} to="/home">
              HOME
            </NavLink>
          </li>
          <li className={classes.li}>
            <NavLink activeClassName={classes.active} to="/store">
              STORE
            </NavLink>
          </li>
          <li className={classes.li}>
            <NavLink activeClassName={classes.active} to="/about">
              ABOUT
            </NavLink>
          </li>
          <li className={classes.li}>
            <NavLink activeClassName={classes.active} to="/contact">
              CONTACT US
            </NavLink>
          </li>
          <li className={classes.li}>
            <NavLink activeClassName={classes.active} to="/auth">
              LOGIN
            </NavLink>
          </li>
        </ul>}
        <ul className={classes.header}>
          <li className={classes.li}>
            <NavLink activeClassName={classes.active} to="/home">
              HOME
            </NavLink>
          </li>
          <li className={classes.li}>
            <NavLink activeClassName={classes.active} to="/store">
              STORE
            </NavLink>
          </li>
          <li className={classes.li}>
            <NavLink activeClassName={classes.active} to="/about">
              ABOUT
            </NavLink>
          </li>
          <li className={classes.li}>
            <NavLink activeClassName={classes.active} to="/contact">
              CONTACT US
            </NavLink>
          </li>
          <li className={classes.li}>
            <NavLink activeClassName={classes.active} to="/auth">
              LOGIN
            </NavLink>
          </li>
        </ul>
        {location.pathname === '/store' && <Button
          className={classes["cart-button"]}
          variant="warning"
          onClick={props.onShowCart}
        >
          Your Cart
          <strong> {quantity}</strong>
        </Button>}
        {/* </header> */}
      </Navbar>
      <h1>The Generics</h1>
    </>
  );
};

export default Header;
