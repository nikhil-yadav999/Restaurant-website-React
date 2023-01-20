import classes from "./MenuItem.module.css";
import { useState } from "react";

const MenuItem = (props) => {
  const [isDetailShow, setIsDetailShow] = useState(false);

  const detailShowHandler = () => {
    setIsDetailShow((prevState) => {
      return !prevState;
    });
  };

  return (
    <>
      <li className={classes.item}>
        <figure>
          <blockquote>
            <p>{props.title}</p>
          </blockquote>
          <figcaption>$ {props.price}</figcaption>
        </figure>
        <button className={classes.btn} onClick={detailShowHandler}>
          See Details
        </button>
        <br />
      </li>
      {isDetailShow && <p className={classes.item}>{props.description}</p>}
    </>
  );
};

export default MenuItem;
