import StyledCards from "./DogCards.module.css";
import { DogCard, Filtering, Pagination } from "../index.components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAll, sliceDogs } from "../../redux/actions";

export default function DogCards() {
  // LOCAL STATES
  //* The || statement loads sessionStorage info or the default. This so when ppl comes back from detail or create
  //* can return to the page they were.
  const [currentPage, setPage] = useState(
    Number(sessionStorage.getItem("currentPage")) || 1
  );

  const [visiblePosts, setVisiblePosts] = useState(
    Number(sessionStorage.getItem("visiblePosts")) || 8
  );

  // GLOBAL STATES
  const dispatch = useDispatch();
  let dogsToDisplay = useSelector((state) => state.pgDogs);
  let allDogs = useSelector((state) => state.filteredDogs);

  // VARIABLES
  let totalPages = Math.ceil(allDogs.length / visiblePosts);

  if (!allDogs.length) {
    //* In case user enters home directly or page reload.
    dispatch(addAll());
  }

  // ON MOUNT/DISMOUNT/UPDATE

  useEffect(() => {
    if (currentPage > totalPages) setPage(1);
    dispatch(sliceDogs(currentPage, visiblePosts));
    sessionStorage.setItem("visiblePosts", visiblePosts);
    sessionStorage.setItem("currentPage", currentPage);
  }, [currentPage, visiblePosts, allDogs]);

  // HANDLERS

  function handleAmmountPosted(event) {
    setVisiblePosts(Number(event.target.value));
  }

  return (
    <div>
      {dogsToDisplay.length > 1 ? <Filtering /> : null}
      {dogsToDisplay.length > 1 ? (
        <select defaultValue={visiblePosts} onChange={handleAmmountPosted}>
          <option value="8">8</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      ) : null}
      {dogsToDisplay.length > 1 ? (
        <Pagination setPage={setPage} totalPages={totalPages} />
      ) : null}

      <div className={StyledCards.cardsMain}>
        {dogsToDisplay.map((dog) => (
          <DogCard dog={dog} key={dog.id} />
        ))}
      </div>
    </div>
  );
}
