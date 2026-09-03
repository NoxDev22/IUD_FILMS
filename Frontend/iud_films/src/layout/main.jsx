// COMPONENTS
import { FilmCard } from "../components/filmCard";
import { Seeker } from "./seeker";
import { Pagination } from "../components/pagination";
// SERVICES
import { fetchMovies } from "../services/fetchFilms";
// HELPERS
import { getPathName } from "../helpers/pathName";
// REDUCER
import { Reducer } from "../reducers/filterReducer";

export function Main() {
  const { state, dispatch } = Reducer();
  const { movies, loading, page, totalPages, activeFilters, filter } = state;

  // PathName utilizado para el filtro de tipo
  const type = getPathName();
  let isInactive = type === "pelicula" || type === "serie";

  const loadMovies = async (filters, currentPage) => {
    try {
      dispatch({ type: "FETCH_START" });
      const data = await fetchMovies(filters, currentPage);
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      console.error(`!Error en la obtención de los datos ${error}`);
      dispatch({ type: "FETCH_SUCCESS", payload: { data: [], total: 1 } });
    }
  };

  const handleSearch = (filters) => {
    dispatch({ type: "APPLY_SEARCH", payload: filter });
    loadMovies(filters, 1);
  };

  const handlePageChange = (newPage) => {
    dispatch({ type: "CHANGE_PAGE", payload: newPage });
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
              filmId={movie._id}
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
