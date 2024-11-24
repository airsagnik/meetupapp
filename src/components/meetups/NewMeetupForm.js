import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import { useRef } from "react";

function NewMeetupForm(props) {
    const titleRef = useRef();
    const imageUrl = useRef();
    const description = useRef();
    const address = useRef();

    function onSubmitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleRef.current.value;
        const enteredImageUrl = imageUrl.current.value;
        const enteredAddress = address.current.value;
        const enteredDescription = description.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImageUrl,
            address: enteredAddress,
            description: enteredDescription,
        };

        console.log(meetupData);
        props.updateDb(meetupData);

    }

    return <Card>
        <form className={classes.form} onSubmit={onSubmitHandler}>
            <div className={classes.control}>
                <label htmlFor="title">Meetup title</label>
                <input type="text" required id="title" ref={titleRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="image">Meetup Image</label>
                <input type="url" required id="image" ref={imageUrl} />
            </div>
            <div className={classes.control}>
                <label htmlFor="address">Address</label>
                <input type="text" required id="address" ref={address} />
            </div>
            <div className={classes.control}>
                <label htmlFor="description">Description</label>
                <textarea type="text" required rows='5' id="description" ref={description} />
            </div>
            <div className={classes.actions}>
                <button>Add meet up</button>
            </div>
        </form>
    </Card>
}

export default NewMeetupForm;