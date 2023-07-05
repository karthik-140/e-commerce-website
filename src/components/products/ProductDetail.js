import { useParams } from "react-router-dom";
import { Dummy_Products } from "./AvailableProducts";
import classes from "./ProductDetails.module.css";

const ProductDetail = () => {
  const params = useParams();

  const product = Dummy_Products.map((i) => {
    if (i.id === params.productId) {
      return (
        <section className={classes.section}>
          <div>
            <div className={classes.product}>
              <div className={classes["product-image"]}>{i.imageUrl}</div>
            </div>
            <h5>{i.title}</h5>
          </div>
          <div className={classes.description}>
            <h4>Description:-</h4>
            <div className="d-flex justify-content-between ">
              <div>
                <b>Price -</b> {i.price} $
              </div>
              <div className="bg-success rounded px-2 text-white">
                <b>Rating-</b> {i.rating}
              </div>
            </div>
            <div className="mt-4">{i.description}</div>
          </div>
        </section>
      );
    }
  });
//   console.log(params);

  return (
    <section className={classes["product-section"]}>
      <h3>
        <u>Product Details</u>
      </h3>
      {product}
    </section>
  );
};

export default ProductDetail;