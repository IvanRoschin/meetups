import { useContext } from "react";
import classes from "./MeetupItem.module.css";
import { Card } from "../ui/Card";
import { FavoritesContext } from "../../store/favorites-context";

export const MeetupItem = ({ id, image, title, address, description }) => {
  const FavoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = FavoritesCtx.itemIsFavorite(id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      FavoritesCtx.removeFavorite(id);
    } else {
      FavoritesCtx.addFavorite({
        id,
        image,
        title,
        address,
        description,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove From Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};
