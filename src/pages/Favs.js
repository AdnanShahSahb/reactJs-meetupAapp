import { useContext } from "react";
import MeetupListing from "../components/meetups/MeetupList";
// import FavContext from "../components/store/favoriteContext";
import FavingContexting from "../components/store/favoritingContexting";

const Favoring = () => {
  const favCntx=useContext(FavingContexting)

  let content;
  if(favCntx.totalingFaving===0){
    content=<p>You dont have any favorites</p>;
  }
  else{
    content= <MeetupListing meetups={favCntx.realFaving}/>

  }


  return <div>
    <h1>Favourite Meetup page</h1>
    {content}
  </div>;
};

export default Favoring;
