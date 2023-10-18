import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Landing,
  Error,
  Detail,
  CreateDog,
} from "./components/index.components";
import { useEffect } from "react";
import { addAll, updateAttitudes } from "./redux/actions";
import { useDispatch } from "react-redux";

function App() {
  //GLOBAL STATE SET

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addAll());
    dispatch(updateAttitudes());
  }, []);

  // RENDER
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/createDog" element={<CreateDog />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
