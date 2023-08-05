import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

export const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetsup</div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/new-meet"}>Add New Meetup</Link>
          </li>
          <li>
            <Link to={"/favorites"}>Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
