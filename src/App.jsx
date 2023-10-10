import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Landing,
  Error,
  Detail,
  CreateDog,
} from "./components/index.components";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/create" element={<CreateDog />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
