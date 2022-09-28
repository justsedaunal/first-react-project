import "./card-list.style.css";
import Card from "../card/card.component";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster}></Card>;
      })}
    </div>
  );
};

export default CardList;
