import StyledLanding from "./Landing.module.css";
import mainDog from "../../content/landing_orangeDog.svg";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAll } from "../../redux/actions";

export default function Landing() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addAll());
  }, []);

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
