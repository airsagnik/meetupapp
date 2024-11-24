import MeetUpList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

function AllMeetupsPage() {
  const [isLoading, updateLoaderVisibility] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    updateLoaderVisibility(true);
    fetch("https://react-meetups-8308f-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json").then(
      respose => {
        return respose.json();
      }
    ).then(data => {
      const meetups = [];

      console.log(data);  
      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        }
        meetups.push(meetup);
      }
      updateLoaderVisibility(false);
      console.log(meetups);
      setLoadedMeetups(meetups);
    });
  }, []);


  if (isLoading) {
    return (
      <section>
        <p>Loading....please wait</p>
      </section>
    )
  }


  return (
    <section>
      <h1>All Meetups</h1>
      <MeetUpList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;