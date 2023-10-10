import DogCard from "../DogCard/DogCard";
import StyledCards from "./DogCards.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function DogCards() {
  const [pagedDogs, setDogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/dogs")
      .then((data) => setDogs(data.data.splice(0, 8)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={StyledCards.cardsMain}>
      <p>I'm the one who shows the cards</p>
      {pagedDogs.map((dog) => (
        <DogCard dog={dog} key={dog.id} />
      ))}
    </div>
  );
}
