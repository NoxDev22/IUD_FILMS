import { useState, useEffect } from "react";
// COMPONENTS
import { FilmCard } from "../components/filmCard";
import { Seeker } from "./seeker";
import { Pagination } from "../components/pagination";
// SERVICES
import { fetchMovies } from "../services/fetchFilms";

export function Main() {
  const [movies, setMovies] = useState({ data: [] });
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [activeFilters, setActiveFilters] = useState({});

  // PathName utilizado para el filtro de tipo
  let pathName = window.location.pathname;
  let type = pathName.slice(1, pathName.length - 1);
  let isInactive = type === "pelicula" || type === "serie";

  const loadMovies = async (filters, currentPage) => {
    setLoading(true);
    const data = await fetchMovies(filters, currentPage);
    setMovies(data || { ...movies, data: [] });
    setTotalPages(data.total || 1);
    setLoading(false);
  };

  useEffect(() => {
    let isMounted = true;
    async function init() {
      if (isMounted) {
        setTotalPages(1);
        setLoading(false);
      }
    }

    init();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleSearch = (filters) => {
    setActiveFilters(filters);
    setPage(1);
    loadMovies(filters, 1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    loadMovies(activeFilters, newPage);
  };

  return (
    <main className="main container">
      <Seeker onSearch={handleSearch} type={type} isInactive={isInactive} />
      <section className="main_films">
        {loading ? (
          <p>Cargando contenido...</p>
        ) : movies.data.length > 0 ? (
          movies.data.map((movie) => (
            <FilmCard
              key={movie._id}
              filmName={movie.titulo}
              filmImg={movie.img_portada}
              filmYear={movie.fecha_estreno.slice(6)}
            />
          ))
        ) : (
          <p>No se encontraron resultados.</p>
        )}
      </section>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        limit={movies.limit}
      />
    </main>
  );
}
