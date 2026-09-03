//PAGES
import { Home } from "./pages/home";
import { Movies } from "./pages/movies";
import { Series } from "./pages/series";
import { Information } from "./pages/information";
import { Admin } from "./pages/admin";
import { Films } from "./pages/films";
import { Directors } from "./pages/directors";
import { Genres } from "./pages/genres";
import { Productions } from "./pages/productions";
import { Types } from "./pages/types";
import { AddFilm } from "./pages/addFilm";
import { NotFound } from "./pages/404";
//router
import { Routes, Route } from "react-router";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/peliculas" element={<Movies />} />
      <Route path="/series" element={<Series />} />
      <Route path="films/:id" element={<Information />} />
      <Route path="/administrador" element={<Admin />}>
        <Route index element={<Films />} />
        <Route path="directores" element={<Directors />} />
        <Route path="generos" element={<Genres />} />
        <Route path="productoras" element={<Productions />} />
        <Route path="tipos" element={<Types />} />
      </Route>
      <Route path="/administrador/addFilm" element={<AddFilm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
