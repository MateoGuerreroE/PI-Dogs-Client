import StyledHome from "./home.module.css";
import { DogCards, Filters, SearchBar } from "../index.components";
import { NavLink } from "react-router-dom";

export default function Home() {
  // RENDER

  return (
    <div className={StyledHome.homeMain}>
      <div className={StyledHome.supBar}>
        <NavLink to="/createDog">Create your Dog</NavLink>
        <SearchBar />
        <Filters />
      </div>
      <DogCards />
    </div>
  );
}
