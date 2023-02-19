import { useParams } from 'react-router-dom';
import { Dummy_Products } from './AvailableProducts';
import classes from './ProductDetails.module.css';

const ProductDetail = () => {
    const params = useParams();

    const product = Dummy_Products.map((i) => {
        if (i.id === params.productId) {
            return (
                <div className={classes['product-details']}  >
                    <h4>{i.title}</h4>
                    <div className={classes['product-image']}>
                        {i.imageUrl}
                    </div>
                    <p><b>$ {i.price}</b></p>
                </div>
            )
        }
    })
    console.log(params)

    return (
        <section className={classes['product-section']}>
            <h3><u>Product Details</u></h3>
            {product}
        </section>
    )
}

export default ProductDetail;