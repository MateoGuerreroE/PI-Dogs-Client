import StyledDetail from "./Detail.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

export default function Detail() {
  // LOCAL STATES
  const [dog, setDog] = useState([]);
  const { id } = useParams();

  // GLOBAL STATES
  const pagedDogs = useSelector((state) => state.pgDogs);

  // UTILS (storage)

  let visiblePosts;
  let currentPage;

  // DIS/MOUNT/UPDATE

  //* Would be easier to bring the data directly from the status but GET /dogs/:idRaza would be useless
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          `http://${window.location.hostname}:3001/dogs/${id}`
        );
        setDog(data);
      } catch (error) {
        window.alert(error);
      }
    }
    fetchData();
  }, [id]);

  useEffect(() => {
    visiblePosts = Number(sessionStorage.getItem("dogsToDisplay"));
    currentPage = Number(sessionStorage.getItem("dogsToDisplay"));
  }, [pagedDogs]);

  // RENDER

  return (
    <div>
      <Link to="/home">Return</Link>
      <p>ID: {dog.id}</p>
      <img src={dog.image} alt={dog.name} />
      <p>Nombre: {dog.name}</p>
      <p>Altura: {dog.height} cm</p>
      <p>Peso: {dog.height} kg</p>
      {dog.temperament ? (
        <p>Temperamentos: {dog.temperament.join(", ")}</p>
      ) : (
        <p>Temperamentos: </p>
      )}
      <p>Años de vida: {dog.life_span}</p>
    </div>
  );
}
