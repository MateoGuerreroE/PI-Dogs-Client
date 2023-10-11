import { useDispatch } from "react-redux";
import { searchDog, addAll } from "../../redux/actions";

export default function SearchBar() {
  const dispatch = useDispatch();

  function handleClick() {
    const { value } = document.getElementById("S_input");
    if (value) {
      dispatch(searchDog(value));
    } else {
      // If user searches with no text on input restores allDogs
      dispatch(addAll());
      alert("Introduce una raza para poder buscarla");
    }
  }

  return (
    <div>
      <label>Search: </label>
      <input id="S_input" type="text" />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}
