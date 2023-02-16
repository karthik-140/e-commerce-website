import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import classes from './Album.module.css';
import CartContext from '../store/cart-context';

const Products = (props) => {
    const cxt = useContext(CartContext);

    const addItemToCart = () => {
        cxt.addItem({ ...props.items, quantity: 1 })
    }

    return (
        <li className={classes.product} id={props.id} >
            <h2>{props.title}</h2>
            <div className={classes['main-image']}>
                {props.imageUrl}
            </div>
            <p><b>$ {props.price}</b></p>
            <Button onClick={addItemToCart}>Add To Cart</Button>
        </li>
    )
}

export default Products;