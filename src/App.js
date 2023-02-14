import {useState} from 'react';

import Header from "./components/Layout/Header";
import Album from "./components/products/Album";
import Cart from "./components/Cart/Cart";

function App() {

  const [showCart, setShowCart]= useState(false);

  const showCartHandler = () =>{
    setShowCart(true);
  }
  const hideCartHandler = () =>{
    setShowCart(false);
  }

  return (
    <>
      {showCart && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Album />
    </>
  );
}

export default App;
