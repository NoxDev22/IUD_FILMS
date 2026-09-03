import { useEffect } from "react";
// COMPONENTS
import { Pagination } from "../components/pagination";
import { AdminDirectorCard } from "../components/adminDirectorCard";
import { AdminSeeker } from "../components/adminSectionSeeker";
// SERVICE
import { fetchData } from "../services/fecthData";
// HELPERS
import { Debounce } from "../helpers/debounce";
// REDUCER
import { DirectorReducer } from "../reducers/directorReducer";

export function Directors() {
  const { state, dispatch } = DirectorReducer();
  const { movies, loading, page, totalPages, activeFilters, filter } = state;
  const { delay } = Debounce();

  const loadMovies = async (filters, currentPage) => {
    try {
      dispatch({ type: "FETCH_START" });
      const data = await fetchData({
        endpoint: "iud_directors",
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
        text={"Directores"}
        plText={"Sam raimi"}
        btnText={"director"}
        nameInput={"nombre"}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <section className="directorContainer">
        <div className="directorContainer_containerDirectors">
          {loading ? (
            <p>Cargando contenido...</p>
          ) : state.movies.data.length > 0 ? (
            movies.data.map((dr) => (
              <AdminDirectorCard
                key={dr._id}
                directorId={dr._id}
                nombre={dr.nombre}
                estado={dr.estado}
                f_creacion={dr.fecha_creacion}
                f_actualizacion={dr.fecha_actualizacion}
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
