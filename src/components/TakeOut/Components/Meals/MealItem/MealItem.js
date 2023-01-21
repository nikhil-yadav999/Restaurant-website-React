import { useContext } from "react";
import { CartContext } from "../../store/CartProvider";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const cartContext = useContext(CartContext);

  const addItemHandler = (inputAmount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: inputAmount,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddAmount={addItemHandler} />
      </div>
    </li>
  );
};

export default MealItem;
