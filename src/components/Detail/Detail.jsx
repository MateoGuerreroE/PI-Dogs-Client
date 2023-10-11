import StyledDetail from "./Detail.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const [dog, setDog] = useState([]);
  const { id } = useParams();

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

  return (
    <div>
      <p>ID: {dog.id}</p>
      <img src="" alt={dog.name} />
      <p>Nombre: {dog.name}</p>
      {dog.height ? <p>Altura: {dog.height.metric}</p> : null}
    </div>
  );
}
