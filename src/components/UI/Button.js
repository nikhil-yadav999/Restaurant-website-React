import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={classes.btn}>
      <span>{props.children}</span>
    </button>
  );
};

export default Button;
