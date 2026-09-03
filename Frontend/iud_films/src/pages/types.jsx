import { useEffect } from "react";
// COMPONENTS
import { Pagination } from "../components/pagination";
import { AdminGenreCard } from "../components/adminGenreCard";
import { AdminSeeker } from "../components/adminSectionSeeker";
// SERVICE
import { fetchData } from "../services/fecthData";
// HELPERS
import { Debounce } from "../helpers/debounce";
// REDUCER
import { DirectorReducer } from "../reducers/directorReducer";

export function Types() {
  const { state, dispatch } = DirectorReducer();
  const { movies, loading, page, totalPages, activeFilters, filter } = state;
  const { delay } = Debounce();

  const loadMovies = async (filters, currentPage) => {
    try {
      dispatch({ type: "FETCH_START" });
      const data = await fetchData({
        endpoint: "iud_types",
        filters,
        page: currentPage,
        id: "",
        limit: 10,
      });
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      console.error(`!Error en la obtención de los datos ${error}`);
      dispatch({ type: "FETCH_SUCCESS", payload: { data: [], total: 1 } });
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
    <section className="directorSection">
      <AdminSeeker
        text={"Tipos"}
        plText={"Serie"}
        btnText={"tipo"}
        nameInput={"nombre"}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <section className="directorContainer">
        <div className="directorContainer_containerDirectors">
          {loading ? (
            <p>Cargando contenido...</p>
          ) : state.movies.data.length > 0 ? (
            movies.data.map((gr) => (
              <AdminGenreCard
                key={gr._id}
                genreId={gr._id}
                nombre={gr.nombre}
                descripcion={gr.descripcion}
                estado={gr.estado}
                f_creacion={gr.fecha_creacion}
                f_actualizacion={gr.fecha_actualizacion}
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
