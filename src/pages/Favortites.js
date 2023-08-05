import { useContext } from "react";
import { FavoritesContext } from "../store/favorites-context";
import { MeetupList } from "../components/meetups/MeetupList";
export const FavoritesPage = () => {
  const FavoritesCtx = useContext(FavoritesContext);
  return (
    <section>
      <h1>My Favorites</h1>
      <MeetupList meetups={FavoritesCtx.favorites} />
    </section>
  );
};
