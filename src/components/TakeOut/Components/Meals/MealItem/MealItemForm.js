import { useRef, useState } from "react";

import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const inputAmountRef = useRef();

  // maintain a state for whether this form is valid:
  const [isFormValid, setIsFormValid] = useState(true);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // check if the entered value is valid: 'inputAmountRef.current' refer to the input element
    const inputAmount = inputAmountRef.current.value;
    const inputAmountNumber = +inputAmount;

    if (
      inputAmount.trim().length === 0 ||
      inputAmountNumber < 0 ||
      inputAmountNumber > 5
    ) {
      setIsFormValid(false);
      return;
    }

    setIsFormValid(true);

    props.onAddAmount(inputAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      {/* set input as an attribute */}
      <Input
        ref={inputAmountRef}
        label={"Amount"}
        input={{
          id: props.id,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1
        }}
      />
      <button>+ Add</button>
      {!isFormValid && <p style={{ color: "red" }}>amount not valid</p>}
    </form>
  );
};

export default MealItemForm;
