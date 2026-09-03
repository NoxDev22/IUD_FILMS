//REACT ROUTER
import { useParams } from "react-router";
//COMPONENTES
import { Footer } from "../layout/footer";
//LAYOUT
import { InfoFilm } from "../layout/infoFilm";
//REACT
import { useEffect, useState } from "react";
//SERVICES
import { fetchMovies } from "../services/fetchFilms";

export function Information() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  let { id } = useParams();

  const loadMovie = async () => {
    setLoading(true);
    const data = await fetchMovies({}, 1, id);
    setMovie(data);
    setLoading(false);
  };

  useEffect(() => {
    let isMounted = true;
    async function init() {
      if (isMounted) {
        loadMovie();
      }
    }

    init();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <main className="information">
        {loading ? (
          <p>Cargando contenido...</p>
        ) : Object.keys(movie).length > 0 ? (
          <InfoFilm
            titulo={movie.titulo}
            sinopsis={movie.sinopsis}
            url_pelicula={movie.url_pelicula}
            url_portada={movie.img_portada}
            duracion={movie.duracion}
            fecha_estreno={movie.fecha_estreno}
            temporadas={movie.temporadas || 0}
            genero={movie.genero.nombre}
            director={movie.director.nombre}
            productora={movie.productora.nombre}
            tipo={movie.tipo.nombre}
          />
        ) : (
          <p>No se encontraron resultados.</p>
        )}
      </main>
      <Footer />
    </>
  );
}
