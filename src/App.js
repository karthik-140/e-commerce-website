import { Route } from 'react-router-dom';
import { useState } from 'react';

import Header from "./components/Layout/Header";
import AvailableProducts from './components/products/AvailableProducts';
import Cart from "./components/Cart/Cart";
import CartProvider from './components/store/cart-provider';
import About from './components/AboutPage/About';
import Footer from './components/Layout/Footer';
import HomePage from './components/HomePage/HomePage';


function App() {

  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  }
  const hideCartHandler = () => {
    setShowCart(false);
  }

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      <Route path="/home" >
        <HomePage />
      </Route>
      <Route path="/store" >
        {showCart && <Cart onCloseCart={hideCartHandler} />}
        <AvailableProducts />
      </Route>
      <Route path="/about" >
        <About />
      </Route>
      <Footer />
    </CartProvider>
  );
}

export default App;
