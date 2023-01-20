import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Components/store/CartProvider";

const HeaderCartButton = (props) => {
  // create a new state for btnClick
  const [isBtnClicked, setIsBtnClicked] = useState(false);

  const cartContext = useContext(CartContext);

  // reduce returns a single value
  const cartItemsLength = cartContext.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  let btnClasses = `${classes.button} ${isBtnClicked ? classes.bump : " "}`;

  useEffect(() => {
    setIsBtnClicked(true);
    setTimeout(() => {
      setIsBtnClicked(false);
    }, 300);
  }, [cartContext.totalAmount]);

  return (
    <>
      <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your cart</span>
        <span className={classes.badge}>{cartItemsLength}</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
