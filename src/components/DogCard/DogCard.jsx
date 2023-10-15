import { Link } from "react-router-dom";
import StyledCard from "./DogCard.module.css";

export default function DogCard(props) {
  return (
    <div className={StyledCard.cardMain}>
      {props.dog.image.url ? (
        <img src={props.dog.image.url} alt={props.dog.name} />
      ) : (
        <img src={props.dog.image} alt={props.dog.name} />
      )}
      <Link to={`/detail/${props.dog.id}`}>
        <p>Nombre: {props.dog.name}</p>
      </Link>
      <p>Temperamentos: {props.dog.temperament}</p>
      {props.dog.weight.metric ? (
        <p>Peso: {props.dog.weight.metric} kg</p>
      ) : (
        <p>Peso: {props.dog.weight} kg</p>
      )}
    </div>
  );
}
