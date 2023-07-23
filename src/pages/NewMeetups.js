import NewMeetupForming from "../components/meetups/NewMeetupForm";
import {useNavigate} from "react-router-dom";

const NewMeetupsing = () => {
  const histor=useNavigate();
  const addingMeetupData = (dataForm) => {
    fetch("https://react-gettingstarted-c3e98-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(dataForm),
      headers: { "Content-Type": "application/json" }
    }).then(()=>{
      histor('/'); 
    })
  }

  return (
    <section>
      <h1>Adding New Meetup</h1>
      <NewMeetupForming onAddMeetupData={addingMeetupData} />
    </section>
  );
};

export default NewMeetupsing;
