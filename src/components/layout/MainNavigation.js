import { Link } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./MianNavigation.module.css";
import { useContext } from "react";
import FavouritesContext from "../../store/favourites-context";

function MainNavigation() {
    const favContext = useContext(FavouritesContext);
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                React meetup
            </div>
            <nav className={classes.navBar}>
                <ul>
                    <li>
                        <Link to='/'>All meetup</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>Add new meetup</Link>
                    </li>
                    <li>
                        <Link to='/favourites'>My Favourites
                        <span className={classes.badge}>{favContext.totalFavourites}</span>
                        </Link>
                    </li>

                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;