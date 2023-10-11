import StyledHome from "./home.module.css";
// import DogCards from "../DogCards/DogCards";
// import SearchBar from "../SearchBar/SearchBar";
import { DogCards, SearchBar } from "../index.components";

export default function Home() {
  return (
    <div className={StyledHome.homeMain}>
      <SearchBar />
      <DogCards />
    </div>
  );
}
