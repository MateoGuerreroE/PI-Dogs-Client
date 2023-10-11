import style from "./Pagination.module.css";

export default function Pagination(props) {
  function handleClick(event) {
    props.setPage(Number(event.target.innerHTML));
  }
  return (
    <div>
      <p>Hola soy las pages</p>
      <button onClick={handleClick}>1</button>
      <button onClick={handleClick}>2</button>
    </div>
  );
}
