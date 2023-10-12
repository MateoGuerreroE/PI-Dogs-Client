import { DogCard, Pagination } from "../index.components";
import StyledCards from "./DogCards.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAll, sliceDogs } from "../../redux/actions";

export default function DogCards() {
  const [currentPage, setPage] = useState(1);
  const [visiblePosts, setVisiblePosts] = useState(8); //! Added so user can set how many per page
  const dispatch = useDispatch();
  let dogsToDisplay = useSelector((state) => state.pgDogs);
  let allDogs = useSelector((state) => state.allDogs);

  // VARIABLES
  let totalPages = Math.ceil(allDogs.length / visiblePosts);

  // In case of refresh or entering directly to /home from URL.
  if (!dogsToDisplay.length) {
    dispatch(addAll(visiblePosts)); //? Added param to solve BUG: When in a page that won't exist when showing more dogs per page, change dogsPerPage
  }

  useEffect(() => {
    dispatch(sliceDogs(currentPage, visiblePosts));
  }, [currentPage, visiblePosts]);

  function handleAmmountPosted(event) {
    setVisiblePosts(Number(event.target.value));
  }

  return (
    <div>
      {dogsToDisplay.length > 1 ? (
        <select defaultValue={visiblePosts}>
          <option onClick={handleAmmountPosted} value="8">
            8
          </option>
          <option onClick={handleAmmountPosted} value="10">
            10
          </option>
          <option onClick={handleAmmountPosted} value="20">
            20
          </option>
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
