import { Redirect, Route, Switch } from 'react-router-dom';
import { useContext, useState } from 'react';

import Header from "./components/Layout/Header";
import AvailableProducts from './components/products/AvailableProducts';
import Cart from "./components/Cart/Cart";
import About from './pages/AboutPage/About';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage/HomePage';
import ContactUs from './pages/ContactPage/ContactUs';
import ProductDetail from './components/products/ProductDetail';
import Login from './pages/LoginPage/Login';
import CartContext from '../src/components/store/cart-context';


function App() {

  const [showCart, setShowCart] = useState(false);
  const authCtx = useContext(CartContext);

  const showCartHandler = () => {
    setShowCart(true);
  }
  const hideCartHandler = () => {
    setShowCart(false);
  }

  return (
    <>
      <Header onShowCart={showCartHandler} />
      <Switch>
        <Route path="/" exact >
          <Redirect to="/home" />
        </Route>
        <Route path="/contact" >
          <ContactUs />
        </Route>
        <Route path="/home" >
          <HomePage />
        </Route>
        <Route path="/store" exact>
          {showCart && <Cart onCloseCart={hideCartHandler} />}
          {authCtx.isLoggedIn && <AvailableProducts />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/about" >
          <About />
        </Route>
        <Route path="/store/:productId" >
          <ProductDetail />
        </Route>
        <Route path="/auth" >
          <Login />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
