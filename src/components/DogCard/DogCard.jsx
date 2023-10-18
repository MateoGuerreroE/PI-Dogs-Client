import { Link } from "react-router-dom";
import StyledCard from "./DogCard.module.css";

export default function DogCard(props) {
  return (
    <div className={StyledCard.cardMain}>
      <img src={props.dog.image} alt={props.dog.name} />
      <Link to={`/detail/${props.dog.id}`}>
        <p>Nombre: {props.dog.name}</p>
      </Link>
      <p>Temperamentos: {props.dog.temperament.join(", ")}</p>
      <p>Peso: {props.dog.weight}</p>
    </div>
  );
}
