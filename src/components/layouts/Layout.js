import classona from "./Layout.module.css";
import MainNaving from "./MainNav";

const Layouting = (props) => {
  return (
    <div>
      <MainNaving />
      <main className={classona.main}>{props.children}</main>
    </div>
  );
};

export default Layouting;
