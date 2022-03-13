import { Nav, Anime, Results, AnimeDetails } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Anime />} />
        <Route path="/results/:name" element={<Results />} />
        <Route path="/details/:id" element={<AnimeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
