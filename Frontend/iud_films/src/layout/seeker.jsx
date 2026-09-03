// src/components/Seeker.jsx
import { useEffect, useState } from "react";
// CONSTANTS
import { INITIAL_STATE } from "../constants/filterInitialState.js";
// DEBOUNCE
import { Debounce } from "../helpers/debounce.js";

export function Seeker({ onSearch, type, isInactive }) {
  const [filters, setFilters] = useState(() => ({
    ...INITIAL_STATE,
    tipo: type,
  }));
  const { delay } = Debounce();

  const handleChange = (e) => {
    const { name, value } = e.target;
    delay(() => {
      setFilters((prev) => ({
        ...prev,
        [name]: value,
      }));
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(filters);
  };

  const handleReset = () => {
    setFilters(INITIAL_STATE);
    onSearch(INITIAL_STATE);
  };

  useEffect(() => {
    onSearch(filters);
  }, []);

  return (
    <form className="seekerForm" onSubmit={handleSubmit}>
      <div className="seeker_header">
        <h2 className="seeker_title">Catálogo</h2>
        <p className="seeker_subtitle">
          Busca el contenido que más te interese.
        </p>
      </div>
      <div className="seekerContainer_form">
        <label
          htmlFor="seeker_title"
          className="seekerForm_label seekerForm_title"
        >
          Título:
          <input
            type="text"
            name="titulo"
            id="seeker_title"
            onChange={handleChange}
            placeholder="Ej: Interstellar"
            className="seekerForm_input"
          />
        </label>
        <label
          htmlFor="seeker_director"
          className="seekerForm_label seekerForm_director"
        >
          Director:
          <input
            type="text"
            name="director"
            id="seeker_director"
            onChange={handleChange}
            placeholder="Ej: Christopher Nolan"
            className="seekerForm_input"
          />
        </label>
        <div className="seekerForm_containerSelects">
          <div className="seekerForm_selectGroup">
            <label htmlFor="seeker_genre" className="seekerForm_titleSelect">
              Género:
            </label>
            <select
              name="genero"
              id="seeker_genre"
              value={filters.genero}
              onChange={handleChange}
              className="seekerForm_select"
            >
              <option value="">Todos</option>
              <option value="accion">Acción</option>
              <option value="aventura">Aventura</option>
              <option value="ciencia_ficcion">Ciencia Ficción</option>
              <option value="drama">Drama</option>
              <option value="terror">Terror</option>
            </select>
          </div>
          <div className="seekerForm_selectGroup">
            <label htmlFor="seeker_type" className="seekerForm_titleSelect">
              Tipo:
            </label>
            <select
              name="tipo"
              id="seeker_type"
              value={filters.tipo}
              onChange={handleChange}
              className="seekerForm_select"
              disabled={isInactive}
            >
              <option value="">Todos</option>
              <option value="pelicula">Película</option>
              <option value="serie">Serie</option>
            </select>
          </div>
        </div>
        <div className="seekerForm_buttons">
          <button
            type="submit"
            className="seekerForm_btn seekerForm_btn--submit"
          >
            Buscar
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="seekerForm_btn seekerForm_btn--reset"
          >
            Limpiar
          </button>
        </div>
      </div>
    </form>
  );
}
