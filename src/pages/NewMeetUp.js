import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function NewMeetupsPage() {
  const pageHistory = useHistory();

  function updateNewMeetUpData(meetupData) {
    fetch(
      "https://react-meetups-8308f-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-type': 'application/json'
        }
      }
    ).then(()=>{
      pageHistory.replace('/');
    })
  }

  return (
    <section>
      <h1>Add new Meetup</h1>
      <NewMeetupForm updateDb={updateNewMeetUpData} />
    </section>
  );
}

export default NewMeetupsPage;