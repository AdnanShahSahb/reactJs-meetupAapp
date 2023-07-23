// import { useContext } from "react";
// import FavContext from "../store/favoriteContext";
import { useContext } from "react";
import Carding from "../ui/card";
import classona from "./MeetupItems.module.css";
import FavingContexting from "../store/favoritingContexting"

const MeetupIteming = (props) => {

  const favCntxting = useContext(FavingContexting);

  const itemingIsFaving = favCntxting.checkingFaving(props.id);

  const toggleFavStatusHandler = () => {
    if (itemingIsFaving) {
      favCntxting.remingFaving(props.id);
    } else {
      favCntxting.addingFaving({
        id: props.id,
        title: props.title,
        image: props.image,
        description: props.description,
        address: props.address,
      });
    }
  };

  // const favsCntx=useContext(FavContext);
  // const itemIsFav=favsCntx.itemIsFaving(props.id);
  // const toggleFavStatusHandler=()=>{
  //     if(itemIsFav){
  //         favsCntx.remFaving(props.id)
  //     }
  //     else{
  //         favsCntx.addFaving({
  //             id:props.id,
  //             title:props.title,
  //             image:props.image,
  //             description:props.description,
  //             address:props.address,
  //         })
  //     }
  // }

  return (
    <li className={classona.item}>
      <Carding>
        <div className={classona.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classona.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classona.actions}>
          <button onClick={toggleFavStatusHandler}>
            {itemingIsFaving ? "Remove From Favorites" : "Add to Favorites"}
          </button>
        </div>
      </Carding>
    </li>
  );
};

export default MeetupIteming;
