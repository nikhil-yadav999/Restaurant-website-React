import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

// import CartContext here and display the total amount and item name here;
import React from "react";
import { useState, useContext } from "react";
import { CartContext } from "../../Components/store/CartProvider";

const Cart = (props) => {
  const [isCheckOut, setIsCheckOut] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSumbit, setDidSubmit] = useState(false);
  const [httpError, setHttpError] = useState(null);

  // useContext hook to import CartContext:
  const cartContext = useContext(CartContext);

  // onAdd and onRemove handlers:
  const addItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const removeItemHandler = (id) => {
    cartContext.removeItem(id);
  };

  const orderClickHandler = () => {
    setIsCheckOut(true);
  };

  const checkOutModal = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onHideCart}>
        Close
      </button>
      {cartContext.items.length > 0 && (
        <button className={classes.button} onClick={orderClickHandler}>
          Order
        </button>
      )}
    </div>
  );

  // http post request to submit data to Firebase
  const onSubmitHandler = async (userData) => {
    setIsSubmitting(true);

    try {
      await fetch(
        "https://react-app-17495-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify({
            user: userData,
            orderItems: cartContext.items
          })
        }
      );

      setIsSubmitting(false);
      setDidSubmit(true);

      cartContext.clearItem();
    } catch (error) {
      setIsSubmitting(false);
      setHttpError("Http request failed...");
    }
  };

  const cartModalContent = (
    <>
      <ul className={classes["cart-items"]}>
        {cartContext.items.map((item) => {
          return (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
              onAdd={addItemHandler.bind(null, item)}
              onRemove={removeItemHandler.bind(null, item.id)}
            ></CartItem>
          );
        })}
      </ul>
      <div className={classes.total}>
        <label>Total Amount</label>
        <div>{cartContext.totalAmount.toFixed(2)}</div>
      </div>
      {isCheckOut && (
        <Checkout onSubmit={onSubmitHandler} onCancel={props.onHideCart} />
      )}
      {!isCheckOut && checkOutModal}
    </>
  );

  const submittingModalContent = <p>Data is submitting...</p>;

  const didSubmitModalContent = <p>Order has succesfully placed...</p>;

  return (
    <Modal onHideCart={props.onHideCart}>
      {!isSubmitting && !didSumbit && cartModalContent}
      {isSubmitting && !didSumbit && submittingModalContent}
      {!isSubmitting && didSumbit && didSubmitModalContent}
      {httpError && <p>{httpError}</p>}
    </Modal>
  );
};

export default Cart;
