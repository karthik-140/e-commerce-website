import { Button } from 'react-bootstrap';
import album1 from '../../assets/Album 1.png';
import album2 from '../../assets/Album 2.png';
import album3 from '../../assets/Album 3.png';
import album4 from '../../assets/Album 4.png';
import classes from './Album.module.css';

const Album = () => {
    return (
        <>
        <h2>Music</h2>
        <section className={classes.section}>
            <div className={classes.product}>
                <h2>Album 1</h2>
                <img src={album1} alt="Product 1" />
                <p>$ 100</p>
                <Button>Add To Cart</Button>
            </div>
            <div className={classes.product}>
                <h2>Album 2</h2>
                <img src={album2} alt="Product 2" />
                <p>$ 50</p>
                <Button>Add To Cart</Button>
            </div>    
            <div className={classes.product}>
                <h2>Album 3</h2>
                <img src={album3} alt="Product 3" />
                <p>$ 70</p>
                <Button>Add To Cart</Button>
            </div>
            <div className={classes.product}>    
                <h2>Album 4</h2>
                <img src={album4} alt="Product 4" />
                <p>$ 100</p>
                <Button>Add To Cart</Button>
            </div>
            </section>
        </>
    )
}

export default Album;