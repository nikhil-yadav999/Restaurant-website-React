import React, { useState } from "react";

import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import { CartProvider } from "./Components/store/CartProvider";

const TakeOut = (props) => {
  const [isCartShown, setIsCartShown] = useState(false);

  props.onTakeOut();

  const showCart = () => {
    setIsCartShown(true);
  };

  const hideCart = () => {
    setIsCartShown(false);
  };

  return (
    <>
      <CartProvider>
        {isCartShown && <Cart onHideCart={hideCart} />}
        <Header onShowCart={showCart} />
        <main>
          <Meals />
        </main>
      </CartProvider>
    </>
  );
};

export default TakeOut;
