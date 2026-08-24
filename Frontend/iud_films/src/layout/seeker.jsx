// src/components/Seeker.jsx
import { useEffect, useState } from "react";

export function Seeker({ onSearch, type, isInactive }) {
  const initialState = {
    titulo: "",
    director: "",
    genero: "",
    tipo: type || "",
  };

  const [filters, setFilters] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(filters);
  };

  const handleReset = () => {
    setFilters(initialState);
    onSearch(initialState);
  };

  useEffect(() => {
    onSearch(initialState);
  }, []);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="seeker_header">
        <h2 className="seeker_title">Catálogo</h2>
        <p className="seeker_subtitle">
          Busca el contenido que más te interese.
        </p>
      </div>
      <div className="container_form">
        <label htmlFor="seeker_title" className="form_label form_title">
          Título:
          <input
            type="text"
            name="titulo"
            id="seeker_title"
            value={filters.titulo}
            onChange={handleChange}
            placeholder="Ej: Interstellar"
            className="form_input"
          />
        </label>

        <label htmlFor="seeker_director" className="form_label form_director">
          Director:
          <input
            type="text"
            name="director"
            id="seeker_director"
            value={filters.director}
            onChange={handleChange}
            placeholder="Ej: Christopher Nolan"
            className="form_input"
          />
        </label>

        <div className="form_containerSelects">
          <div className="form_selectGroup">
            <label htmlFor="seeker_genre" className="form_titleSelect">
              Género:
            </label>
            <select
              name="genero"
              id="seeker_genre"
              value={filters.genero}
              onChange={handleChange}
              className="form_select"
            >
              <option value="">Todos</option>
              <option value="accion">Acción</option>
              <option value="aventura">Aventura</option>
              <option value="ciencia_ficcion">Ciencia Ficción</option>
              <option value="drama">Drama</option>
              <option value="terror">Terror</option>
            </select>
          </div>

          <div className="form_selectGroup">
            <label htmlFor="seeker_type" className="form_titleSelect">
              Tipo:
            </label>
            <select
              name="tipo"
              id="seeker_type"
              value={filters.tipo}
              onChange={handleChange}
              className="form_select"
              disabled={isInactive}
            >
              <option value="">Todos</option>
              <option value="pelicula">Película</option>
              <option value="serie">Serie</option>
            </select>
          </div>
        </div>

        <div className="form_buttons">
          <button type="submit" className="form_btn form_btn--submit">
            Buscar
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="form_btn form_btn--reset"
          >
            Limpiar
          </button>
        </div>
      </div>
    </form>
  );
}
