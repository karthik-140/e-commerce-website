import { Button } from 'react-bootstrap';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import album1 from '../../assets/Album 1.png';
import album2 from '../../assets/Album 2.png';
import album3 from '../../assets/Album 3.png';
import album4 from '../../assets/Album 4.png';

const cartElements = [
    {
        title: 'Album 1',
        price: 100,
        imageUrl: album1,
        quantity: 2,
    },
    {
        title: 'Album 2',
        price: 50,
        imageUrl: album2,
        quantity: 3,
    },
    {
        title: 'Album 3',
        price: 70,
        imageUrl: album3,
        quantity: 1,
    },
    {
        title: 'Album 4',
        price: 70,
        imageUrl: album4,
        quantity: 1,
    }
]

const Cart = (props) => {

    const Cart = (
        <ul className={classes.card}>
            {cartElements.map((ele) => (
                <li className={classes.content} >
                    <span>{ele.title}</span>
                    <span>$ {ele.price}</span>
                    <span>{ele.quantity} </span>
                    <Button variant='danger' size='sm' style={{ marginBottom: '3px' }}>Remove</Button>
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
                <span>00</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Purchase</button>
            </div>
        </Modal>
    )
}

export default Cart;