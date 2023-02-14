import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../store/cart-context';


const Cart = (props) => {
    const cxt = useContext(CartContext);
    const Cart = (
        <ul className={classes.card}>
            {cxt.items.map((item) => (
                <li id={item.id} key={Math.random()} className={classes.content} >
                    <div>{item.title}</div>
                    <div>$ {item.price}</div>
                    <div>{item.quantity} </div>
                    <Button
                        variant='danger' size='sm'
                        style={{ marginBottom: '3px' }}
                        onClick={() => cxt.removeItem(item)}>Remove</Button>
                </li>
            ))}
        </ul>
    )

    return (
        <Modal onClose={props.onCloseCart}>
            <div className={classes.close}>
                <Button variant='secondary' size='md' onClick={props.onCloseCart}>X</Button>
            </div>
            {Cart}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>$ {cxt.totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Purchase</button>
            </div>
        </Modal>
    )
}

export default Cart;