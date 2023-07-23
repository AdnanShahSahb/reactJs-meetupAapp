import { createContext, useState } from "react";

const FavingContexting = createContext();

export const FavouriteComp = (props) => {
  const [realFavs, setRealFavs] = useState([]);

  const addFavoriteMeets = (newMeetups) => {
    setRealFavs((prevMeeetups) => {
      return prevMeeetups.concat(newMeetups);
    });
  };

  const remFavoriteMeets = (thatMeetId) => {
    setRealFavs((prevMeetups) => {
      return prevMeetups.filter((meetups) => meetups.id !== thatMeetId);
    });
  };

  const checkFav = (thatMeetId) => {
    return realFavs.some((meetup) => meetup.id === thatMeetId);
  };

  const contenting = {
    realFaving: realFavs,
    totalingFaving: realFavs.length,
    addingFaving: addFavoriteMeets,
    remingFaving: remFavoriteMeets,
    checkingFaving: checkFav,
  };

  return (
    <FavingContexting.Provider value={contenting}>
      {props.children}
    </FavingContexting.Provider>
  );
};

export default FavingContexting;
