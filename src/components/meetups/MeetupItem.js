import { useContext } from "react";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavouritesContext from "../../store/favourites-context";
function MeetUpItem(props) {
    const favouriteContext = useContext(FavouritesContext);
    const isFavourite = favouriteContext.isFavourite(props.id);
    //console.log("fav status ");
    //console.log(isFavourite);

    function toggleFavouriteStatusHandler() {
        
        if (isFavourite) {
            favouriteContext.removeFavourite(props.id);
        }
        else {
            favouriteContext.addFavourite([{
                id: props.id,
                title: props.title,
                image: props.image,
                description: props.description,
                address: props.address,
            }]);
        }


    }

    return (
        <div className={classes.item}>
            <Card>
                <div>
                    <img className={classes.image} src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavouriteStatusHandler}>
                        {isFavourite ? 'Remove from favourite' : 'To Favourites'}
                    </button>
                </div>
            </Card>
        </div>
    );
}

export default MeetUpItem;