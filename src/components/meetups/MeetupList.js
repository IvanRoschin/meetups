import classes from "./MeetupList.module.css";
import { MeetupItem } from "./MeetupItem";
export const MeetupList = (props) => {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          description={meetup.description}
          meetup={meetup}
        />
      ))}
    </ul>
  );
};
