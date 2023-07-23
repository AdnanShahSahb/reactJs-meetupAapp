import classona from "./card.module.css";
const Carding = (props) => {
  return <div className={classona.card}>{props.children}</div>;
};
export default Carding;
