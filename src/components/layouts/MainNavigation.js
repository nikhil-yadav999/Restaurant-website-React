import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>Ye's Cuisine</div>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink to="/menu" activeClassName={classes.active}>
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/takeout-order" activeClassName={classes.active}>
                Takout Order
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" activeClassName={classes.active}>
                Member Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainNavigation;
