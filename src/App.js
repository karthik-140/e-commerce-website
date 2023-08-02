import { Redirect, Route, Switch } from 'react-router-dom';
import { useContext, useState, lazy, Suspense } from 'react';

import Header from "./components/Layout/Header";
import AvailableProducts from './components/products/AvailableProducts';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/LoginPage/Login';
import CartContext from '../src/components/store/cart-context';

const About = lazy(() => import('./pages/AboutPage/About'));
const Cart = lazy(() => import('./components/Cart/Cart'));
const ContactUs = lazy(() => import('./pages/ContactPage/ContactUs'));
const ProductDetail = lazy(() => import('./components/products/ProductDetail'));

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
          <Suspense fallback={<p>Loading...</p>} >
            <ContactUs />
          </Suspense>
        </Route>
        <Route path="/home" >
          <HomePage />
        </Route>
        {showCart && <Suspense fallback={<p>Loading...</p>}><Cart onCloseCart={hideCartHandler} /></Suspense>}
        <Route path="/store" exact>
          {authCtx.isLoggedIn && <AvailableProducts />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/about" >
          <Suspense fallback={<p>Loading...</p>}>
            <About />
          </Suspense>
        </Route>
        <Route path="/store/:productId" >
          <Suspense fallback={<p>Loading...</p>}>
            <ProductDetail />
          </Suspense>
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
