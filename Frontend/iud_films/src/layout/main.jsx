import { FilmCard } from "../components/filmCard";

export function Main({ listOfFilms }) {
  return (
    <main className="main container">
      {listOfFilms.data.slice(0, 8).map((film) => (
        <FilmCard
          filmName={film.titulo}
          filmImg={film.img_portada}
          filmYear={film.fecha_estreno.slice(6)}
        />
      ))}
    </main>
  );
}
