import { useEffect } from "react";
// COMPONENTS
import { Pagination } from "../components/pagination";
import { AdminFilmCard } from "../components/adminFilmCard";
import { AdminSeeker } from "../components/adminSectionSeeker";
// SERVICE
import { fetchData } from "../services/fecthData";
// HELPERS
import { Debounce } from "../helpers/debounce";
// REDUCER
import { Reducer } from "../reducers/filterReducer";

export function Films() {
  const { state, dispatch } = Reducer();
  const { movies, loading, page, totalPages, activeFilters, filter } = state;
  const { delay } = Debounce();

  const loadMovies = async (filters, currentPage) => {
    try {
      dispatch({ type: "FETCH_START" });
      const data = await fetchData({
        endpoint: "iud_films",
        filters,
        page: currentPage,
        id: "",
        limit: 4,
      });
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      console.error(`!Error en la obtención de los datos ${error}`);
      dispatch({ type: "FETCH_SUCCESS", payload: { data: [], total: 1 } });
    }
  };

  const deleteFilms = async (id) => {
    try {
      await fetchData({
        endpoint: "iud_films",
        id,
        method: "DELETE",
      });
      loadMovies();
    } catch (error) {
      console.error(`!Error en la eliminación de los datos ${error}`);
    }
  };

  useEffect(() => {
    let isMounted = true;
    async function init() {
      if (isMounted) {
        loadMovies();
      }
    }
    init();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleSearch = (filters) => {
    dispatch({ type: "APPLY_SEARCH", payload: filters });
    loadMovies(filters, 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    delay(() => {
      dispatch({ type: "SET_FILTER_VALUE", payload: { name, value } });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(filter);
  };

  const handlePageChange = (newPage) => {
    dispatch({ type: "CHANGE_PAGE", payload: newPage });
    loadMovies(activeFilters, newPage);
  };
  return (
    <section className="filmSection">
      <AdminSeeker
        text={"Administrador"}
        btnText={"filme"}
        plText={"Spiderman"}
        nameInput={"titulo"}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <section className="filmContainer">
        <div className="filmContainer_containerFilms">
          {loading ? (
            <p>Cargando contenido...</p>
          ) : state.movies.data.length > 0 ? (
            movies.data.map((movie) => (
              <AdminFilmCard
                key={movie._id}
                filmId={movie._id}
                titulo={movie.titulo}
                url_portada={movie.img_portada}
                sinopsis={movie.sinopsis}
                f_estreno={movie.fecha_estreno}
                director={movie.director.nombre}
                genero={movie.genero.nombre}
                productora={movie.productora.nombre}
                tipo={movie.tipo.nombre}
                handleDelete={deleteFilms}
              />
            ))
          ) : (
            <p>No se encontraron resultados.</p>
          )}
        </div>
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          limit={movies.limit}
        />
      </section>
    </section>
  );
}
