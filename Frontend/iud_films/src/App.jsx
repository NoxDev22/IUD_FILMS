//PAGES
import { Home } from "./pages/home";
import { Movies } from "./pages/movies";
import { Series } from "./pages/series";
import { InfoFilm } from "./pages/infoFilm";
import { Admin } from "./pages/admin";
import { NotFound } from "./pages/404";
//router
import { Routes, Route } from "react-router";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/peliculas" element={<Movies />} />
      <Route path="/series" element={<Series />} />
      <Route path="/:id" element={<InfoFilm />} />
      <Route path="/administrador" element={<Admin />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
