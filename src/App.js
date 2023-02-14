import {useState} from 'react';

import Header from "./components/Layout/Header";
//  import Album from "./components/products/Album";
 import AvailableProducts from './components/products/AvailableProducts';
import Cart from "./components/Cart/Cart";
import CartProvider from './components/store/cart-provider';

function App() {

  const [showCart, setShowCart]= useState(false);

  const showCartHandler = () =>{
    setShowCart(true);
  }
  const hideCartHandler = () =>{
    setShowCart(false);
  }

  return (
    <CartProvider>
      {showCart && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      {/* <Album /> */}
      <AvailableProducts />
    </CartProvider>
  );
}

export default App;
