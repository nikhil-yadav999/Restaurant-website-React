import React, { useReducer } from "react";

// create a context; filled the object with key-value pairs to code auto-suggestion
const CartContext = React.createContext({
  items: [] /* JSON format: {id: ,amount: , name:, price} */,
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearItem: () => {}
});

const cartReducer = (prevState, action) => {
  if (action.type === "ADD_ITEM") {
    // first check if this item exist in the array or not:
    const newItemIndex = prevState.items.findIndex((item) => {
      return item.id === action.item.id;
    });

    let prevStateItems = prevState.items;

    let newItem;
    let newItemsArray;

    if (newItemIndex !== -1) {
      newItem = {
        ...prevStateItems[newItemIndex],
        amount: prevStateItems[newItemIndex].amount + action.item.amount
      };
      newItemsArray = [...prevStateItems];
      newItemsArray[newItemIndex] = newItem;
    } else if (newItemIndex === -1) {
      newItemsArray = [...prevStateItems, action.item];
    }

    return {
      items: newItemsArray,
      totalAmount:
        prevState.totalAmount + action.item.price * action.item.amount
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const prevStateItems = prevState.items;
    const updateItemIndex = prevStateItems.findIndex((item) => {
      return item.id === action.id;
    });

    const updateItem = prevStateItems[updateItemIndex];

    const updatedAmount = prevState.totalAmount - updateItem.price;

    let updatedItemsArray;

    // check if the item amount == 1; if it is 1, then remove it from the items array
    if (updateItem.amount === 1) {
      updatedItemsArray = prevStateItems.filter((item) => {
        return item.id !== action.id;
      });
    } else {
      const updatedItem = { ...updateItem, amount: updateItem.amount - 1 };

      updatedItemsArray = [...prevStateItems];
      updatedItemsArray[updateItemIndex] = updatedItem;
    }

    return {
      items: updatedItemsArray,
      totalAmount: updatedAmount
    };
  }

  if (action.type === "CLEAR") {
    return {
      items: [],
      totalAmount: 0
    };
  }

  return prevState;
};

// define the CartProvider component:
const CartProvider = (props) => {
  // create a useReducer for cart state management:
  const [cartState, setCartState] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0
  });

  const addItemHandler = (item) => {
    setCartState({ type: "ADD_ITEM", item: item });
  };

  const removeItemHandler = (id) => {
    setCartState({ type: "REMOVE_ITEM", id: id });
  };

  const clearItemHandler = () => {
    setCartState({ type: "CLEAR" });
  };

  // this cartContext is used to store cart info and dynamically changed
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearItem: clearItemHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
