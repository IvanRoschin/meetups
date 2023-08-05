import { NewMeetupForm } from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";
export const NewMeetPage = () => {
  const navigate = useNavigate();
  const onAddMeetupHandler = (meetupData) => {
    try {
      fetch(
        "https://react-getting-started-edcc9-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
        {
          method: "POST",
          body: JSON.stringify(meetupData),
          headers: {
            "Content-type": "application/json",
          },
        }
      ).then(() => {
        navigate("/");
      });
    } catch (error) {
      console.log(error.data);
    }
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </section>
  );
};
