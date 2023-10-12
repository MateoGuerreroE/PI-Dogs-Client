import style from "./Pagination.module.css";
import { useState, useEffect } from "react";

export default function Pagination(props) {
  const [currentButton, setButton] = useState(1);
  const { totalPages } = props;

  function handleClick(event) {
    props.setPage(Number(event.target.innerHTML));
    setButton(Number(event.target.innerHTML));
  }

  return (
    <div>
      <button onClick={handleClick}>1</button>
      {currentButton < 6 ? (
        <div>
          <button onClick={handleClick}>2</button>
          <button onClick={handleClick}>3</button>
          <button onClick={handleClick}>4</button>
          <button onClick={handleClick}>5</button>
          <button onClick={handleClick}>6</button>
          <p>...</p>
        </div>
      ) : currentButton < totalPages - 3 ? (
        <div>
          <p>...</p>
          <button onClick={handleClick}>{currentButton - 2}</button>
          <button onClick={handleClick}>{currentButton - 1}</button>
          <button onClick={handleClick}>{currentButton}</button>
          <button onClick={handleClick}>{currentButton + 1}</button>
          <button onClick={handleClick}>{currentButton + 2}</button>
          <p>...</p>
        </div>
      ) : null}

      {currentButton > totalPages - 4 ? (
        <div>
          <p>...</p>

          <button onClick={handleClick}>{totalPages - 4}</button>
          <button onClick={handleClick}>{totalPages - 3}</button>
          <button onClick={handleClick}>{totalPages - 2}</button>
          <button onClick={handleClick}>{totalPages - 1}</button>
        </div>
      ) : null}
      <button onClick={handleClick}>{totalPages}</button>
    </div>
  );
}
