import { Nav, Anime, Results } from "./components";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Anime />} />
        <Route path="/results/:name" element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;
