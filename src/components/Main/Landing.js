import classes from "./Landing.module.css";

import Button from "../UI/Button";

import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className={classes.landing}>
      <div>
        <i>
          <h1>Enjoy the Beauty of Food</h1>
        </i>
        <p>Welcome to the Ye's Cuisine</p>
        <Link to="/takeout-order">
          <Button>Order Online</Button>
        </Link>
        <Link to="/menu" className={classes["view-menu"]}>
          View Menu
        </Link>
      </div>
    </section>
  );
};

export default Landing;
