import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../../store/favorites-context";

import classes from "./MainNavigation.module.css";

export const MainNavigation = () => {
  const FavoritesCtx = useContext(FavoritesContext);

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
            <Link to={"/favorites"}>
              My Favorites{" "}
              <span className={classes.badge}>
                {FavoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
