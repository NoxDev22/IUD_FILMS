import { useState, useEffect } from "react";
// COMPONENTS
import { Pagination } from "../components/pagination";
import { AdminFilmCard } from "../components/adminFilmCard";
import { AdminAside } from "../components/adminFilmAside";
// SERVICE
import { fetchMovies } from "../services/fetchFilms";
// REACT ROUTER
import { Link } from "react-router";

export function Admin() {
  const [movies, setMovies] = useState({ data: [] });
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [activeFilters, setActiveFilters] = useState({});

  // BUSQUEDA DEL FOMULARIO
  const initialState = {
    titulo: "",
    director: "",
    genero: "",
    tipo: "",
  };
  const [filter, setFilter] = useState(initialState);

  const loadMovies = async (filters, currentPage) => {
    setLoading(true);
    const data = await fetchMovies(filters, currentPage, "", 4);
    setMovies(data || { ...movies, data: [] });
    setTotalPages(data.total || 1);
    setLoading(false);
  };

  useEffect(() => {
    let isMounted = true;
    async function init() {
      if (isMounted) {
        loadMovies();
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(filter);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    loadMovies(activeFilters, newPage);
  };

  return (
    <main className="adminMain">
      <AdminAside />
      <section className="adminSection">
        <div className="adminSection_header">
          <h3 className="adminSection_headerText">Vista de Administrador</h3>
          <div className="adminSection_headerIcons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="25"
              height="25"
              className="adminSection_headerIcon"
            >
              <g
                fill="none"
                stroke=" #f9f5ebb0"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path strokeDasharray="4" d="M12 3v2">
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.2s"
                    values="4;0"
                  />
                </path>
                <path
                  strokeDasharray="30"
                  strokeDashoffset="30"
                  d="M12 5c-3.31 0 -6 2.69 -6 6l0 6c-1 0 -2 1 -2 2h8M12 5c3.31 0 6 2.69 6 6l0 6c1 0 2 1 2 2h-8"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.2s"
                    dur="0.4s"
                    to="0"
                  />
                </path>
                <path
                  strokeDasharray="10"
                  strokeDashoffset="10"
                  d="M10 20c0 1.1 0.9 2 2 2c1.1 0 2 -0.9 2 -2"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.7s"
                    dur="0.2s"
                    to="0"
                  />
                </path>
              </g>
            </svg>
            <img
              src="./images/userImg.jpeg"
              alt=""
              className="adminSection_headerImgAdmin"
            />
          </div>
        </div>
        <div className="adminSection_seeker">
          <div className="adminSection_texts">
            <div className="">
              <h2 className="adminSection_title">Vista de Administrador</h2>
              <p className="adminSection_text">
                ¿Que operación desea realizar hoy?
              </p>
            </div>
            <Link to="/administrador/addFilm">
              <button className="adminSection_button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="27"
                  height="27"
                >
                  <path fill="#fff" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
                </svg>
                Agregar Filme
              </button>
            </Link>
          </div>
          <form className="adminSection_form" onSubmit={handleSubmit}>
            <h3 className="adminSection_formTitle">Filmes Registrados</h3>
            <div className="adminSection_formCont">
              <label htmlFor="searchFilm" className="adminSection_formLabel">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                >
                  <path
                    fill="#e5e2e1"
                    d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.52 6.52 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5"
                  />
                </svg>
                <input
                  type="text"
                  id="searchFilm"
                  name="titulo"
                  placeholder="Spiderman"
                  className="adminSection_formInput"
                  onChange={handleChange}
                />
              </label>
              <button type="submit" className="adminSection_formButton">
                Buscar
              </button>
            </div>
          </form>
        </div>
        <section className="adminContainer">
          <div className="adminContainer_containerFilms">
            {loading ? (
              <p>Cargando contenido...</p>
            ) : movies.data.length > 0 ? (
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
    </main>
  );
}
