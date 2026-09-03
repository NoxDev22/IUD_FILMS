import { useState, useEffect, useRef } from "react";
// REACT ROUTER
import { data, Link, useNavigate } from "react-router";
// CONSTANTS
import { FILM_DATA } from "../constants/filmData";
// SERVICES
import { fetchMovies } from "../services/fetchFilms";

export function AddFilm() {
  const [txtRadio, setTxtRadio] = useState("pelicula");
  const [genres, setGenres] = useState({ data: [] });
  const [types, setTypes] = useState({ data: [] });
  const [directors, setDirectors] = useState({ data: [] });
  const [productions, setProductions] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState(FILM_DATA);

  // LOS DIRECTORES ENCONTRDOS
  const [foundDirectors, setFoundDirectors] = useState([]);
  const navigate = useNavigate();

  // ID DEL TIMEOUT
  const idTimeout = useRef("");

  // Cargar géneros y tipos al montar el componente
  useEffect(() => {
    async function loadSelectData() {
      try {
        const [resGenres, resTypes, resDirectors, resProductions] =
          await Promise.all([
            fetch("http://localhost:5100/iud_genres"),
            fetch("http://localhost:5100/iud_types"),
            fetch("http://localhost:5100/iud_directors"),
            fetch("http://localhost:5100/iud_productions"),
          ]);
        if (resGenres.ok) setGenres(await resGenres.json());
        if (resTypes.ok) setTypes(await resTypes.json());
        if (resDirectors.ok) setDirectors(await resDirectors.json());
        if (resProductions.ok) setProductions(await resProductions.json());
      } catch (err) {
        console.error("Error al obtener opciones:", err);
      }
    }
    loadSelectData();
  }, []);

  const handleChangeRadio = () => {
    setTxtRadio((prev) => {
      if (prev === "pelicula") {
        return "serie";
      } else {
        return "pelicula";
      }
    });
  };

  const handleFilterDirectors = (event) => {
    const { value } = event.target;
    const filterDirector = () => {
      const list = directors.data.filter((director) => {
        return director.nombre.toLowerCase().includes(value.toLowerCase());
      });
      setFoundDirectors(list);
    };
    if (idTimeout.current) clearTimeout(idTimeout.current);
    idTimeout.current = setTimeout(filterDirector, 600);
  };

  return (
    <main className="addFilm">
      <section className="addFilm_header">
        <Link to="/administrador">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="25"
            height="25"
            className="addFilm_arrowBack"
          >
            <path
              fill="#fff"
              d="m7.825 13l5.6 5.6L12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2z"
            />
          </svg>
        </Link>
        <h2 className="addFilm_headerTitle">ADD FILM</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="25"
          height="25"
        >
          <path
            fill="#fff"
            d="M17 22q-1.25 0-2.125-.875T14 19q0-.15.075-.7L7.05 14.2q-.4.375-.925.588T5 15q-1.25 0-2.125-.875T2 12t.875-2.125T5 9q.6 0 1.125.213t.925.587l7.025-4.1q-.05-.175-.062-.337T14 5q0-1.25.875-2.125T17 2t2.125.875T20 5t-.875 2.125T17 8q-.6 0-1.125-.213T14.95 7.2l-7.025 4.1q.05.175.063.338T8 12t-.012.363t-.063.337l7.025 4.1q.4-.375.925-.587T17 16q1.25 0 2.125.875T20 19t-.875 2.125T17 22m0-2q.425 0 .713-.287T18 19t-.288-.712T17 18t-.712.288T16 19t.288.713T17 20M5 13q.425 0 .713-.288T6 12t-.288-.712T5 11t-.712.288T4 12t.288.713T5 13m12.713-7.288Q18 5.426 18 5t-.288-.712T17 4t-.712.288T16 5t.288.713T17 6t.713-.288M17 5"
          />
        </svg>
      </section>
      <form action="" className="addFilm_form">
        <div className="addFilm_formHeader">
          <h2 className="addFilm_formHeaderTitle">New Film</h2>
          <p className="addFilm_formHeaderText">
            Ingrese los datos del nuevo filme
          </p>
          <div className="addFilm_formHeaderRadios">
            {types.data.map((tp) => (
              <label
                htmlFor={`radio${tp.nombre}`}
                className={`addFilm_formLabelRadio ${txtRadio === tp.nombre.toLowerCase() ? "inactiveInputRadioMovie" : ""}`}
                key={tp._id}
              >
                <input
                  type="radio"
                  name="tipo"
                  value={tp._id}
                  id={`radio${tp.nombre}`}
                  defaultChecked={
                    txtRadio === tp.nombre.toLowerCase() ? true : false
                  }
                  className={`addFilm_formLabelInputRadio `}
                  onClick={handleChangeRadio}
                />
                {tp.nombre}
              </label>
            ))}
          </div>
        </div>
        <div className="addFilm_formBody">
          <label htmlFor="inTitulo" className="addFilm_formBodyLabel">
            Titulo
            <input
              type="text"
              name="titulo"
              id="inTitulo"
              placeholder="Los vengadores"
              className="addFilm_formBodyInputTitle"
            />
          </label>
          <label htmlFor="inSinopsis" className="addFilm_formBodyLabel">
            Sinopsis
            <textarea
              name="sinopsis"
              id="inSinopsis"
              placeholder="Un grupo de estudiantes de secundaria"
              className="addFilm_formBodyArea"
            ></textarea>
          </label>
          <div className="addFilm_formBodyGrid">
            <label htmlFor="inPoster">
              Url Poster
              <input
                type="text"
                name="urlPoster"
                id="inPoster"
                placeholder="https://..."
              />
            </label>
            <label htmlFor="inGenero">
              Genero
              <select
                name="genero"
                id="inGenero"
                className="addFilm_formBodyGridGenre"
              >
                <option value="">Selecciona</option>
                {genres.data.map((gn) => (
                  <option value={gn._id} key={gn._id}>
                    {gn.nombre}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="inFechaEstreno">
              Fecha estreno
              <input type="date" name="fechaEstreno" id="inFechaEstreno" />
            </label>
            <label htmlFor="inUrlTrailer">
              Url Trailer
              <input
                type="text"
                name="urlTrailer"
                id="inUrlTrailer"
                placeholder="https://..."
              />
            </label>
            <label htmlFor="inDirector" className="addFilm_labelListDirectors">
              Director
              <input
                type="text"
                name="director"
                id="inDirector"
                placeholder="Sam Raimi"
                onChange={handleFilterDirectors}
              />
            </label>
            <label htmlFor="inDuracion">
              Duración en Minutos
              <input
                type="text"
                name="duracion"
                id="inDuracion"
                placeholder="120 "
              />
            </label>
            <label htmlFor="inProduction">
              Productoras
              <input
                type="text"
                name="productora"
                id="inProduction"
                placeholder="Netflix"
              />
            </label>
            {txtRadio === "serie" && (
              <label htmlFor="inTemporadas" className="addFilm_formBodyLabel">
                Temporadas
                <input type="number" name="temporadas" id="inTemporadas" />
              </label>
            )}
          </div>
        </div>
        <div className="addFilm_buttons">
          <Link to="/administrador">
            <button className="addFilm_button">Cancelar</button>
          </Link>
          <button className="addFilm_button addFilm_buttonRed">Guardar</button>
        </div>
      </form>
    </main>
  );
}
