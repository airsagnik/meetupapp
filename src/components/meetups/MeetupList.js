import MeetUpItem from "./MeetupItem";
import classes from './MeetupList.module.css';
function MeetUpList(props) {
    return (
        <div className={classes.item}>
            {props.meetups.map(meetup =>
                <MeetUpItem
                    key={meetup.id}
                    id={meetup.id}
                    title={meetup.title}
                    image={meetup.image}
                    address={meetup.address}
                    description={meetup.description}
                />)}
        </div>
    );

}

export default MeetUpList;