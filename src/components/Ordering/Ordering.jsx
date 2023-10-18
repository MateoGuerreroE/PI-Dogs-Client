import style from "./Ordering.module.css";
import { useDispatch } from "react-redux";
import { orderDogs } from "../../redux/actions";

export default function Ordering() {
  const dispatch = useDispatch();

  function handleClick(event) {
    dispatch(orderDogs(event.target.name, event.target.value));
  }

  return (
    <div>
      <p>Por nombre</p>
      <button name="name" value="asc" onClick={handleClick}>
        Ascendente
      </button>
      <button name="name" value="desc" onClick={handleClick}>
        Descendente
      </button>
      <p>Por peso</p>
      <button name="weight" value="asc" onClick={handleClick}>
        Ascendente
      </button>
      <button name="weight" value="desc" onClick={handleClick}>
        Descendente
      </button>
    </div>
  );
}
