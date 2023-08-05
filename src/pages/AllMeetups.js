import { useEffect, useState } from "react";
import { MeetupList } from "../components/meetups/MeetupList";
import { Link } from "react-router-dom";

export const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  const FetchingData = async () => {
    setIsLoading(true);
    try {
      await fetch(
        "https://react-getting-started-edcc9-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const meetups = [];
          for (const key in data) {
            const meetup = {
              id: key,
              ...data[key],
            };
            meetups.push(meetup);
          }
          setIsLoading(false);
          setLoadedMeetups(meetups);
        });
    } catch (error) {
      console.log(error.data);
    }
  };

  useEffect(() => {
    FetchingData();
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  let content;

  if (loadedMeetups.length === 0) {
    content = (
      <p>
        Ooops, you got no favorites yet. Start{" "}
        <Link to={"/new-meet"}>adding</Link> some?
      </p>
    );
  } else {
    content = <MeetupList meetups={loadedMeetups} />;
  }

  return (
    <section>
      <h1>All Meetups</h1>
      {content}
    </section>
  );
};
