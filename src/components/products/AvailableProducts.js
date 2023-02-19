// import { Button } from 'react-bootstrap';
import album1 from '../../assets/Album 1.png';
import album2 from '../../assets/Album 2.png';
import album3 from '../../assets/Album 3.png';
import album4 from '../../assets/Album 4.png';
import classes from './Album.module.css';
import Products from './Products';

export const Dummy_Products = [
    {
        id: 'p1',
        title: 'Album 1',
        price: 100,
        imageUrl: <img src={album1} alt="Product 1" />,
    },
    {
        id: 'p2',
        title: 'Album 2',
        price: 50,
        imageUrl: <img src={album2} alt="Product 2" />,
    },
    {
        id: 'p3',
        title: 'Album 3',
        price: 70,
        imageUrl: <img src={album3} alt="Product 3" />,
    },
    {
        id: 'p4',
        title: 'Album 4',
        price: 100,
        imageUrl: <img src={album4} alt="Product 4" />,
    }
]

const AvailableProducts = () => {
    const products = Dummy_Products.map((product) => (
        <Products
            id={product.id}
            key={Math.random()}
            title={product.title}
            imageUrl={product.imageUrl}
            price={product.price}
            items={product}
        />
    ))
    return (
        <section className={classes.section}>
            <h2>Music</h2>
            <ul className={classes.list}>
                {products}
            </ul>
        </section>
    )
}

export default AvailableProducts;