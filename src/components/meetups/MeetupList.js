import MeetupIteming from "./MeetupItems";
import classona from "./MeetupList.module.css";

const MeetupListing = (props) => {
  return (
    <ul className={classona.list}>
      {props.meetups.map((peps) => {
        return (
          <MeetupIteming
            key={peps.id}
            id={peps.id}
            image={peps.image}
            title={peps.title}
            address={peps.address}
            description={peps.description}
          />
        );
      })}
    </ul>
  );
};
export default MeetupListing;
