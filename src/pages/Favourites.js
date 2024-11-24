import { useContext } from "react";
import FavouritesContext from "../store/favourites-context";
import MeetUpList from "../components/meetups/MeetupList";

function Favourites() {
  const favCtx = useContext(FavouritesContext);
  let content;

  if (favCtx.totalFavourites === 0) {
    content = <p>No Favourites added.</p>;
  }
  else {
    content = <MeetUpList meetups={favCtx.favourites} />;
  }

  return <section>
    <h1>My Favourites</h1>
    {content}
  </section>
}

export default Favourites;