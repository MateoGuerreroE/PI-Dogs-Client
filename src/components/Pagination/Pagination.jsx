import { renderPagination } from "../../helpers";
import { useEffect, useState } from "react";

export default function Pagination(props) {
  // LOCAL STATES
  const [currentButton, setButton] = useState(
    Number(sessionStorage.getItem("currentPage"))
  );
  const { totalPages } = props;

  useEffect(() => {
    if (totalPages < currentButton) setButton(1);
  }, [currentButton, totalPages]);

  // HANDLERS

  function handleClick(event) {
    props.setPage(Number(event.target.innerHTML));
    setButton(Number(event.target.innerHTML));
  }

  function handleAmmountPosted(event) {
    props.setVisiblePosts(Number(event.target.value));
  }

  // RENDER

  return renderPagination(
    totalPages,
    props.setVisiblePosts,
    handleClick,
    handleAmmountPosted,
    currentButton
  );
}
