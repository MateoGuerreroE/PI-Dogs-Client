import { Link } from "react-router-dom";
import StyledCard from "./DogCard.module.css";
import weightIMG from "../../content/kg-weight.svg";

export default function DogCard(props) {
  return (
    <div className={StyledCard.cardMain}>
      <div className={StyledCard.generalCont}>
        <div className={StyledCard.imageCont}>
          <img src={props.dog.image} alt={props.dog.name} />
        </div>
        <div className={StyledCard.infoCont}>
          <Link to={`/detail/${props.dog.id}`}>
            <h1>{props.dog.name}</h1>
            <p>{props.dog.temperament.join(", ")}</p>
            <div className={StyledCard.weight}>
              <img src={weightIMG} alt="" />
              <h2>{props.dog.weight}</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
