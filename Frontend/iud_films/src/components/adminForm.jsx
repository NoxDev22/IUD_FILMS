import { Magnify } from "../components/icons/magnify";

export function AdminForm({ handleSubmit, handleChange, plText, nameInput }) {
  return (
    <form className="adminSection_form" onSubmit={handleSubmit}>
      <h3 className="adminSection_formTitle">Filmes Registrados</h3>
      <div className="adminSection_formCont">
        <label htmlFor="searchFilm" className="adminSection_formLabel">
          <Magnify />
          <input
            type="text"
            id="searchFilm"
            name={nameInput}
            placeholder={plText}
            className="adminSection_formInput"
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="adminSection_formButton">
          Buscar
        </button>
      </div>
    </form>
  );
}
