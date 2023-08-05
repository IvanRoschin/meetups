import { useRef } from "react";
import { Card } from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

export const NewMeetupForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const meetupData = {
      title: titleInputRef.current?.value,
      image: imageInputRef.current?.value,
      address: addressInputRef.current?.value,
      description: descriptionInputRef.current?.value,
    };
    console.log("MeetupData", meetupData);
    props.onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="adress">Meetup Adress</label>
          <input type="text" required id="adress" ref={addressInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            type="text"
            required
            rows="5"
            id="description"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};
