import StyledHome from "./home.module.css";
import { DogCards, SearchBar } from "../index.components";
import { NavLink } from "react-router-dom";

export default function Home() {
  // RENDER
  return (
    <div className={StyledHome.homeMain}>
      <NavLink to="/createDog">Create your Dog</NavLink>
      <SearchBar />
      <DogCards />
    </div>
  );
}
