import style from "./Detail.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import bckDog from "../../content/sampleDog.svg";
import Loading from "../Loading/Loading";

export default function Detail() {
  // LOCAL STATES
  const [imageDim, setIamgeDim] = useState({ w: 0, h: 0 });
  const [dog, setDog] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

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

  //* Loading

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  //* In order to know how to render card direction, this useEffect will load the widh and height into a state

  useEffect(() => {
    let image = document.getElementById("dogimage");
    setIamgeDim({ w: image ? image.naturalWidth : 0, h: image.naturalHeight });
  }, [dog]);

  // HELPERS

  function handleIMGError() {
    const image = document.getElementById("dogimage");
    image.src =
      "https://static.vecteezy.com/system/resources/previews/016/461/442/non_2x/cute-dog-puppy-face-pet-animal-character-with-in-animated-cartoon-illustration-vector.jpg";
  }

  return (
    <div className={style.mainDetail}>
      {loading ? <Loading /> : null}
      <img
        src={bckDog}
        alt="RefDog"
        className={`${
          imageDim.w > imageDim.h ? style.wideDog : style.stretchDog
        }`}
      />
      <div
        className={`${
          imageDim.w > imageDim.h ? style.wideContainer : style.stretchContainer
        }`}
      >
        <img
          src={dog.image}
          alt={dog.name}
          id="dogimage"
          onError={handleIMGError}
        />
        <div className={style.infoContainer}>
          {dog.created ? <h5>Created breed</h5> : <h5>Existing breed</h5>}
          <h1>{dog.name}</h1>
          <h3>ID: {dog.id}</h3>
          <hr className={style.separator} />
          <h4>Characteristics</h4>
          <p>
            <b>Height: </b> {dog.height} cm
          </p>
          <p>
            <b>Weight: </b> {dog.weight} kg
          </p>
          {dog.temperament ? (
            <p>
              <b>Temperaments: </b> {dog.temperament.join(", ")}
            </p>
          ) : (
            <p>
              <b>Temperaments: </b>{" "}
            </p>
          )}
          <p>
            <b>Life expectancy: </b> {dog.life_span}
          </p>
        </div>
        <Link to="/home" className={style.backButton}></Link>
        {dog.created ? null : (
          <a
            className={style.googleSearch}
            href={`https://www.google.com/search?client=firefox-b-d&q=${
              dog.name && dog.name.split(" ").join("+")
            }`}
            target="_blank"
          ></a>
        )}
      </div>
    </div>
  );
}
