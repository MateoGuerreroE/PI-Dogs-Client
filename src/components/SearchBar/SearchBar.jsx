import { useDispatch, useSelector } from "react-redux";
import { searchDog, addAll } from "../../redux/actions";
import { useEffect } from "react";

export default function SearchBar() {
  // GLOBAL STATES
  const dipslayedDogs = useSelector((state) => state.filteredDogs);
  const dispatch = useDispatch();

  // HANDLERS

  function handleClick() {
    const { value } = document.getElementById("S_input");
    if (value) {
      dispatch(searchDog(value));
      document.getElementsByName("origin")[0].value = "All";
      document.getElementsByName("temperaments")[0].value = "All";
    } else {
      alert("Introduce una raza para poder buscarla");
    }
  }

  // RENDER

  return (
    <div>
      <label>Search: </label>
      <input id="S_input" type="text" />
      <button onClick={handleClick}>Search</button>
      {dipslayedDogs.length < 2 ? (
        <button
          onClick={() => {
            dispatch(addAll());
          }}
        >
          X
        </button>
      ) : null}
    </div>
  );
}
