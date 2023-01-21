import React, { useState } from "react";

import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import { CartProvider } from "./Components/store/CartProvider";

import { useHistory } from "react-router-dom";

const TakeOut = (props) => {
  const history = useHistory();

  const [isCartShown, setIsCartShown] = useState(false);

  props.onTakeOut("onPage");

  const showCart = () => {
    setIsCartShown(true);
  };

  const hideCart = () => {
    setIsCartShown(false);
  };

  const btnClickHandler = () => {
    props.onTakeOut("offPage");
    history.push("/");
  };

  return (
    <>
      <CartProvider>
        {isCartShown && <Cart onHideCart={hideCart} />}
        <Header onShowCart={showCart} />
        <main>
          <Meals />
          <button onClick={btnClickHandler}>To main page</button>
        </main>
      </CartProvider>
    </>
  );
};

export default TakeOut;
