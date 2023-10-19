import { useDispatch, useSelector } from "react-redux";
import { filterDogs } from "../../redux/actions";

export default function Filters() {
  // GLOBAL STATES

  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs);
  const temperaments = useSelector((state) => state.temperaments);

  // HELPERS

  let anyCreated = false;
  allDogs.forEach((dog) => {
    if (dog.created) anyCreated = true;
  });
  let count = 1;

  // HANDLERS

  function handleChange(event) {
    const originFilter = document.getElementsByName("origin")[0].value; // const[0].value
    const nameFilter = document.getElementsByName("temperaments")[0].value;
    if (originFilter == "All" || nameFilter == "All") {
      // Did this so that when returning to "All" on any filter and the other
      // has a value active, leaves the active filter.
      let value = null;
      let name = null;
      if (originFilter == "All") {
        value = nameFilter;
        name = "temperaments";
      }
      if (nameFilter == "All") {
        value = originFilter;
        name = "origin";
      }
      dispatch(filterDogs(value, name));
    } else if (event.target.name === "temperaments" && originFilter !== "All") {
      dispatch(filterDogs(event.target.value, "temperaments", originFilter));
    } else {
      dispatch(filterDogs(event.target.value, "origin", nameFilter));
    }
    sessionStorage.setItem(event.target.name, event.target.value);
  }

  // RENDER
  return (
    <div>
      <select
        onChange={handleChange}
        name="origin"
        defaultValue={sessionStorage.getItem("origin") || "All Dogs"}
      >
        <option value="All">All Dogs</option>
        {anyCreated ? <option value="Listed">Listed</option> : null}
        {anyCreated ? <option value="Created">Created</option> : null}
      </select>
      <select
        onChange={handleChange}
        name="temperaments"
        defaultValue={sessionStorage.getItem("temperaments") || "All"}
      >
        <option value="All">All</option>
        {temperaments.map((temperament) => (
          <option key={++count} value={temperament}>
            {temperament}
          </option>
        ))}
      </select>
    </div>
  );
}
