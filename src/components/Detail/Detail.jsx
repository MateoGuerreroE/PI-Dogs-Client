import StyledDetail from "./Detail.module.css";
import { useParams } from "react-router-dom";

export default function Detail() {
  console.log(useParams());
  return (
    <div>
      <p>Detail</p>
    </div>
  );
}
