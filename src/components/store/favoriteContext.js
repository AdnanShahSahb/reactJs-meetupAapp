import { createContext, useState } from "react";

const FavContext = createContext();
export const FavoriteContextProvider = (props) => {//props for the return statement ok
  
  const [userFavs, setUserFavs] = useState([]);

  const addFavHandler = (favMeetup) => {
    setUserFavs((already).concat(favMeetup) );
  }

  const removeFavHandler = (meetupId) => {
    setUserFavs((prevUserFav) => {
      return prevUserFav.filter((meetup) => meetup.id !== meetupId); //if false then remove
    });
  };

  const itemIsFavHandler = (meetupId) => {
    return userFavs.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favorites: userFavs,
    totalFavs: userFavs.length,
    addFaving: addFavHandler,
    remFaving: removeFavHandler,
    itemIsFaving: itemIsFavHandler,
  };

  return (
    <FavContext.Provider value={context}>{props.children}</FavContext.Provider>
  );
};

export default FavContext;
