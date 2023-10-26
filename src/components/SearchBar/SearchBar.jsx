import style from "./SearchBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { searchDog, addAll } from "../../redux/actions";

export default function SearchBar() {
  // GLOBAL STATES
  const dipslayedDogs = useSelector((state) => state.filteredDogs.length);
  const allDogs = useSelector((state) => state.allDogs.length);
  const dispatch = useDispatch();
  const currentFilter = {
    filter1: sessionStorage.getItem("temperaments"),
    filter2: sessionStorage.getItem("origin"),
  };

  // HANDLERS

  function handleClick() {
    const { value } = document.getElementById("S_input");
    if (value) {
      dispatch(searchDog(value));
      document.getElementsByName("origin")[0].value = "All";
      document.getElementsByName("temperaments")[0].value = "All";
      sessionStorage.setItem("temperaments", "All");
      sessionStorage.setItem("origin", "All");
      document.getElementById("S_input").value = "";
    } else {
      alert("Introduce una raza para poder buscarla");
    }
  }

  // RENDER

  return (
    <div className={style.searchContainer}>
      <input className={style.searchInput} id="S_input" type="text" />
      <a className={style.searchButton} onClick={handleClick}></a>

      {dipslayedDogs < allDogs &&
      currentFilter.filter1 === "All" &&
      currentFilter.filter2 === "All" ? (
        <button
          onClick={() => {
            dispatch(addAll());
            document.getElementById("S_input").value = "";
          }}
          className={style.Xbutton}
        />
      ) : null}
    </div>
  );
}
