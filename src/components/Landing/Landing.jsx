import StyledLanding from "./Landing.module.css";
import mainDog from "../../content/landing_orangeDog.svg";
import { NavLink } from "react-router-dom";

export default function Landing() {
  return (
    <div className={StyledLanding.main}>
      <img
        className={StyledLanding.mainDog}
        src={mainDog}
        alt="Main Orange Dog"
      />
      <button>
        <NavLink to="/home">Go to Home</NavLink>
      </button>
    </div>
  );
}
