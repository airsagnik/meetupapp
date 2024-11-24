import { createContext, useState } from "react";


const FavouritesContext = createContext(
    {
        favourites: [],
        totalFavourites: 0,
        addFavourite: (favouriteMeetups) => { },
        removeFavourite: (meetupId) => { },
        isFavourite: (meetupId) => { },
    }
);

export function FavouritesContextProvider(props) {
    const [favouriteMeetups, setFavourite] = useState([]);

    function addToFavouritesHandler(meetup) {
        //console.log(meetup);
        setFavourite((meetupData) => {
            return meetupData.concat(meetup);
        });
    }

    function removeFromFavouriteHandler(meetupId) {
        //console.log("remove frpom fav");
        setFavourite((meetup) => {
            return meetup.filter((meetupitem) => meetupitem.id !== meetupId);
        });
    }

    function isFacouriteItemHandler(meetupId) {
        //console.log("is fav" + meetupId);
        //console.log(favouriteMeetups);
        return favouriteMeetups.some((meetupData) => meetupData.id === meetupId);
    }



    const context = {
        favourites: favouriteMeetups,
        totalFavourites: favouriteMeetups.length,
        addFavourite: addToFavouritesHandler,
        removeFavourite: removeFromFavouriteHandler,
        isFavourite: isFacouriteItemHandler,
    }


    return <FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>
}

export default FavouritesContext;
