import classes from "./MainNavigation.module.css";
import { Link, NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>
          <Link to="/">
            Ye's Cuisines
          </Link>
        </div>
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
                Reservation System
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainNavigation;
