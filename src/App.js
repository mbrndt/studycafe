import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Homepage from "./Pages/Home";
import Books from "./Pages/Books";
import "./styles/index.css";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
