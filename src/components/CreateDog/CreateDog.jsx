import StyledForm from "./CreateDog.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
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
  });

  const [errors, setErrors] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    image: "",
    message: "Complete corrently all information to submit a dog",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // HANDLERS

  function handleChange(event) {
    setDogToPost({ ...dogToPost, [event.target.id]: event.target.value });
    setErrors(
      validateForm({ ...dogToPost, [event.target.id]: event.target.value })
    );
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
      temperament:
        "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
    };
    await axios.post(`http://${window.location.hostname}:3001/dogs`, newObj);
    dispatch(addAll());
    navigate("/home");
  }
  // RENDER

  return (
    <div>
      <NavLink to="/home">Return Home</NavLink>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>Raza: </label>
        <input type="text" id="name" />
        <br />
        <label>
          Años de vida:
          <br />
          <label>Minimo: </label>
          <input type="number" id="life_span1" />
          <label>Maximo: </label>
          <input type="number" id="life_span2" />
        </label>
        <br />
        <label>
          Altura (en cm):
          <br />
          <label>Minima: </label>
          <input type="number" id="minHeight" />
          <label>Maxima: </label>
          <input type="number" id="maxHeight" />
        </label>
        <br />
        <label>
          Peso (en Kg):
          <br />
          <label>Minimo: </label>
          <input type="number" id="minWeight" />
          <label>Maximo: </label>
          <input type="number" id="maxWeight" />
        </label>
        <br />
        <label>Image URL: </label>
        <input type="url" id="image" />
        {errors.message ? (
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
