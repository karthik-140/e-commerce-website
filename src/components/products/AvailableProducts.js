// import { Button } from 'react-bootstrap';
import album1 from "../../assets/Album 1.png";
import album2 from "../../assets/Album 2.png";
import album3 from "../../assets/Album 3.png";
import album4 from "../../assets/Album 4.png";
import classes from "./Album.module.css";
import Products from "./Products";

export const Dummy_Products = [
  {
    id: "p1",
    title: "Album 1",
    price: 100,
    imageUrl: <img src={album1} alt="Product 1" />,
    rating: 4,
    description:
      "Harmony's Melody: Immerse yourself in the enchanting melodies of Harmony's Melody. This soul-stirring album brings together a symphony of captivating sounds, weaving together intricate harmonies and evoking a range of emotions. Let the music transport you to a world of serenity and bliss.",
  },
  {
    id: "p2",
    title: "Album 2",
    price: 50,
    imageUrl: <img src={album2} alt="Product 2" />,
    rating: 4.8,
    description:
      "Electro Pulse: Get ready to groove to the electrifying beats of Electro Pulse. This high-energy album delivers a pulsating fusion of electronic music genres, blending infectious rhythms, mind-bending synthesizers, and infectious hooks. Ignite your passion for the dancefloor and let the music take control.",
  },
  {
    id: "p3",
    title: "Album 3",
    price: 70,
    imageUrl: <img src={album3} alt="Product 3" />,
    rating: 4.5,
    description:
      "Serenity Strings: Experience the soothing power of Serenity Strings. This enchanting album showcases the timeless beauty of classical string instruments, painting a tranquil soundscape that nurtures relaxation and reflection. Let the graceful melodies and delicate harmonies whisk you away to a place of inner peace.",
  },
  {
    id: "p4",
    title: "Album 4",
    price: 100,
    imageUrl: <img src={album4} alt="Product 4" />,
    rating: 5,
    description:
      "Rhythm Revival: Get your body moving to the infectious beats of Rhythm Revival. This energetic album is a fusion of vibrant rhythms from around the world, blending Afrobeat, Latin grooves, and infectious pop melodies. Let the music ignite your spirit and unleash your inner dancer.",
  },
];

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
  ));
  return (
    <section className={classes.section}>
      <h2>Music</h2>
      <ul className={classes.list}>{products}</ul>
    </section>
  );
};

export default AvailableProducts;
