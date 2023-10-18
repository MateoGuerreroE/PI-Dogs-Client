import style from "./CreateDog.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAll } from "../../redux/actions";
import { validateForm } from "../../helpers";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateDog() {
  //LOCAL STATES
  const [dogToPost, setDogToPost] = useState({
    name: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    life_span1: "",
    life_span2: "",
    image: "",
    temperament: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    image: "",
    message: "Complete corrently all information to submit a dog",
  });

  // GLOBAL STATES
  const temperaments = useSelector((state) => state.temperaments);
  const allDogs = useSelector((state) => state.allDogs);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  let temperamentList = [];

  // HANDLERS

  function handleChange(event) {
    if (event.target.type === "checkbox") {
      if (event.target.checked) {
        temperamentList.push(event.target.value);
        setDogToPost({
          ...dogToPost,
          temperament: [...dogToPost.temperament, ...temperamentList],
        });
      } else {
        temperamentList = dogToPost.temperament.filter(
          (temp) => temp != event.target.value
        );
        setDogToPost({ ...dogToPost, temperament: [...temperamentList] });
      }
    } else {
      setDogToPost({ ...dogToPost, [event.target.id]: event.target.value });
      setErrors(
        validateForm({ ...dogToPost, [event.target.id]: event.target.value })
      );
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    //! TEMPERAMENTS MISSING.
    let newObj = {
      name: dogToPost.name,
      height: `${dogToPost.minHeight} - ${dogToPost.maxHeight}`,
      weight: `${dogToPost.minWeight} - ${dogToPost.maxWeight}`,
      life_span: `${dogToPost.life_span1} - ${dogToPost.life_span2}`,
      image: `${dogToPost.image}`,
      temperament: dogToPost.temperament,
    };
    let existing = allDogs.find((dog) => dog.name === dogToPost.name);
    if (!existing) {
      await axios.post(`http://${window.location.hostname}:3001/dogs`, newObj);
      dispatch(addAll());
      navigate("/home");
    } else {
      document.getElementById("name").value = "";
      alert("La raza que intentas agregar ya existe! Debes agregar una nueva");
      setErrors({
        ...errors,
        name: "El nombre solo debe contener letras, no se permiten numeros o caracteres especiales.",
        message: "Complete corrently all information to submit a dog",
      });
    }
  }
  // RENDER

  return (
    <div className={style.container}>
      <NavLink to="/home">Return Home</NavLink>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>Raza: </label>
        <input type="text" id="name" />
        <p>{errors.name}</p>
        <br />
        <label>
          Años de vida:
          <br />
          <label>Minimo: </label>
          <input type="number" id="life_span1" />
          <label>Maximo: </label>
          <input type="number" id="life_span2" />
          <p>{errors.life_span}</p>
        </label>
        <br />
        <label>
          Altura (en cm):
          <br />
          <label>Minima: </label>
          <input type="number" id="minHeight" />
          <label>Maxima: </label>
          <input type="number" id="maxHeight" />
          <p>{errors.height}</p>
        </label>
        <br />
        <label>
          Peso (en Kg):
          <br />
          <label>Minimo: </label>
          <input type="number" id="minWeight" />
          <label>Maximo: </label>
          <input type="number" id="maxWeight" />
          <p>{errors.weight}</p>
        </label>
        <br />
        <label>Image URL: </label>
        <input type="url" id="image" />
        <p>{errors.image}</p>
        <fieldset>
          <legend>Temperamentos: </legend>
          <div>
            {temperaments.map((temp, index) => (
              <div key={index}>
                <input key={index} type="checkbox" value={temp} />
                {temp}
              </div>
            ))}
          </div>
          {dogToPost.temperament.length < 3 ? (
            <p>* Debes seleccionar al menos 3 temperamentos</p>
          ) : null}
        </fieldset>
        {errors.message || dogToPost.temperament.length < 3 ? (
          <button type="submit" disabled>
            Submit
          </button>
        ) : (
          <button type="submit">Submit</button>
        )}
      </form>
    </div>
  );
}
