import { DogCard, Pagination } from "../index.components";
import StyledCards from "./DogCards.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAll, sliceDogs } from "../../redux/actions";

export default function DogCards() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  let dogsToDisplay = useSelector((state) => state.pgDogs);

  // In case of refresh or entering directly to /home from URL.
  if (!dogsToDisplay.length) {
    dispatch(addAll());
  }

  useEffect(() => {
    dispatch(sliceDogs(page));
  }, [page]);

  return (
    <div className={StyledCards.cardsMain}>
      <Pagination setPage={setPage} />
      {dogsToDisplay.map((dog) => (
        <DogCard dog={dog} key={dog.id} />
      ))}
    </div>
  );
}
