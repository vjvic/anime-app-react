import { Nav, Anime } from "./components";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Anime />} />
      </Routes>
    </div>
  );
}

export default App;
