import StyledHome from "./home.module.css";
import { DogCards, SearchBar } from "../index.components";

export default function Home() {
  // RENDER
  return (
    <div className={StyledHome.homeMain}>
      <h1>THIS IS TESTING VERSION</h1>
      <SearchBar />
      <DogCards />
    </div>
  );
}
