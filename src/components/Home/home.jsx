import StyledHome from "./home.module.css";
import DogCards from "../DogCards/DogCards";

export default function Home() {
  return (
    <div className={StyledHome.homeMain}>
      <div>
        <label htmlFor="">Search</label>
        <input type="text" />
      </div>
      <DogCards />
    </div>
  );
}
