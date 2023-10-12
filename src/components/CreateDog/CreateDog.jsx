import StyledForm from "./CreateDog.module.css";

export default function CreateDog() {
  return (
    <div>
      <form action="">
        <label htmlFor="">Raza: </label>
        <input type="text" />
        <br />
        <label htmlFor="">
          Años de vida:
          <br />
          <label htmlFor="">Minimo: </label>
          <input type="number" />
          <label htmlFor="">Maximo: </label>
          <input type="number" />
        </label>
        <br />
        <label htmlFor="">
          Altura (en cm):
          <br />
          <label htmlFor="">Minima: </label>
          <input type="number" />
          <label htmlFor="">Maxima: </label>
          <input type="number" />
        </label>
        <br />
        <label htmlFor="">
          Peso (en Kg):
          <br />
          <label htmlFor="">Minimo: </label>
          <input type="number" />
          <label htmlFor="">Maximo: </label>
          <input type="number" />
        </label>
        <br />
      </form>
    </div>
  );
}
