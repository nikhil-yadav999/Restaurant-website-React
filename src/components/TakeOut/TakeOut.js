import React, { useState } from "react";

import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import { CartProvider } from "./Components/store/CartProvider";

import { useHistory } from "react-router-dom";

import classes from "./TakeOut.module.css";

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
    window.scrollTo(0, 0)
  };

  return (
    <>
      <CartProvider>
        {isCartShown && <Cart onHideCart={hideCart} />}
        <Header onShowCart={showCart} />
        <main>
          <Meals />
          <div className={classes["back-btn"]}>
            <button onClick={btnClickHandler}>To main page</button>
          </div>
        </main>
      </CartProvider>
    </>
  );
};

export default TakeOut;
