import React, { useState } from "react";

import Cart from "../components/TakeOut/Components/Cart/Cart";
import Header from "../components/TakeOut/Components/Layout/Header";
import Meals from "../components/TakeOut/Components/Meals/Meals";
import { CartProvider } from "../components/TakeOut/Components/store/CartProvider";

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
    window.scrollTo(0, 0);
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
/*import React, { useState } from "react";
import Cart from "../components/TakeOut/Components/Cart/Cart";
import Header from "../components/TakeOut/Components/Layout/Header";
import Meals from "../components/TakeOut/Components/Meals/Meals";
import { CartProvider } from "../components/TakeOut/Components/store/CartProvider";
import { useHistory } from "react-router-dom";
import classes from "./TakeOut.module.css";

const TakeOut = (props) => {
  const history = useHistory();
  const [isCartShown, setIsCartShown] = useState(false);

  // Use effect to update navbar state
  React.useEffect(() => {
    props.onTakeOut("onPage");
    return () => {
      props.onTakeOut("offPage");
    };
  }, [props]);

  const showCart = () => setIsCartShown(true);
  const hideCart = () => setIsCartShown(false);

  const btnClickHandler = () => {
    history.push("/");
    window.scrollTo(0, 0);
  };

  return (
    <CartProvider>
      {isCartShown && <Cart onHideCart={hideCart} />}
      <Header onShowCart={showCart} />
      <main>
        <Meals />
        <div className={classes["back-btn"]}>
          <button onClick={btnClickHandler} aria-label="Go back to main page">
            To main page
          </button>
        </div>
      </main>
    </CartProvider>
  );
};

export default TakeOut;

*/
/*import React, { useState } from "react";
import Cart from "../components/TakeOut/Components/Cart/Cart";
import Header from "../components/TakeOut/Components/Layout/Header";
import Meals from "../components/TakeOut/Components/Meals/Meals";
import { CartProvider } from "../components/TakeOut/Components/store/CartProvider";
import { useHistory } from "react-router-dom";
import classes from "./TakeOut.module.css";

const TakeOut = (props) => {
  const history = useHistory();
  const [isCartShown, setIsCartShown] = useState(false);

  // Notify parent component
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
    window.scrollTo(0, 0);
  };

  return (
    <CartProvider>
      <Header onShowCart={showCart} />
      {isCartShown && <Cart onHideCart={hideCart} />}
      <main>
        <Meals />
        <div className={classes["back-btn"]}>
          <button onClick={btnClickHandler}>To main page</button>
        </div>
      </main>
    </CartProvider>
  );
};

export default TakeOut;
*/