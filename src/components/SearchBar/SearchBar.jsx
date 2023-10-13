import { useDispatch, useSelector } from "react-redux";
import { searchDog, addAll } from "../../redux/actions";
import { useEffect } from "react";

export default function SearchBar() {
  // GLOBAL STATES
  const dipslayedDogs = useSelector((state) => state.pgDogs);
  const dispatch = useDispatch();

  // UTILS (storage)

  let visiblePosts;

  // DIS/MOUNT/UPDATE

  useEffect(() => {
    visiblePosts = Number(sessionStorage.getItem("visiblePosts"));
  }, [dipslayedDogs]);

  // HANDLERS

  function handleClick() {
    const { value } = document.getElementById("S_input");
    if (value) {
      dispatch(searchDog(value));
    } else {
      // If user searches with no text on input restores allDogs
      dispatch(addAll(visiblePosts));
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
        <button onClick={() => dispatch(addAll(visiblePosts))}>X</button>
      ) : null}
    </div>
  );
}
