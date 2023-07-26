import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import FavingContexting from "../store/favoritingContexting";
// import FavContext from "../store/favoriteContext";
import classona from "./MainNav.module.css";

const MainNaving = () => {
  const favrtCntxt = useContext(FavingContexting);

  const [fixingState,setFixingState]=useState(classona.header);
  

  window.onscroll = () => {
    console.log(window.scrollY);

    if (window.scrollY >= 180) {
      console.log("yessssss");
      setFixingState(classona.fixing)
    } else {
      console.log("nooooooo");
      setFixingState(classona.header)
    }
  };
  

  return (
    <header className={fixingState} >
      <div className={classona.logo}>MEET UPS</div>
      <nav>
        <ul>
          <li>
            <Link to="/reactJs-meetupApp">All Meetups</Link>
          </li>
          <li>
            <Link to="newing">Add New Meetups</Link>
          </li>
          <li>
            <Link to="faving">
              Favorites
              <span className={classona.badge}>
                {favrtCntxt.totalingFaving}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNaving;
