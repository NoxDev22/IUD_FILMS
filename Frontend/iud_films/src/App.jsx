//PAGES
import { Home } from "./pages/home";
import { Movies } from "./pages/movies";
import { Series } from "./pages/series";
import { Information } from "./pages/information";
import { Admin } from "./pages/admin";
import { NotFound } from "./pages/404";
import { AddFilm } from "./pages/addFilm";
//router
import { Routes, Route } from "react-router";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/peliculas" element={<Movies />} />
      <Route path="/series" element={<Series />} />
      <Route path="/:id" element={<Information />} />
      <Route path="/administrador" element={<Admin />} />
      <Route path="/administrador/addFilm" element={<AddFilm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
