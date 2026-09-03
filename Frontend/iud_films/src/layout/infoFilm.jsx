// REACT ROUTER
import { Link } from "react-router";

// ICONS
import { Add } from "../components/icons/add";
import { Send } from "../components/icons/send";
import { Back } from "../components/icons/back";

export function InfoFilm({
  titulo,
  sinopsis,
  url_pelicula,
  url_portada,
  duracion,
  fecha_estreno,
  temporadas = 0,
  genero,
  director,
  productora,
  tipo,
}) {
  return (
    <>
      <section className="infoFilmAside">
        <div className="infoFilmAside_frontPage">
          <figure className="infoFilmAside_figure">
            <img
              src={`${url_portada}`}
              alt={titulo}
              className="infoFilmAside_img"
            />
          </figure>
        </div>
        <div className="infoFilmAside_infoCard">
          <div className="infoFilmAside_info">
            <h2 className="infoFilmAside_infoTitle">INFORMACIÓN</h2>
            <ul className="infoFilmAside_infoList">
              <li className="infoFilmAside_infoLi">
                <p className="infoFilmAside_infoSubTitle">Fecha de estreno</p>
                <p className="infoFilmAside_infoText">{fecha_estreno}</p>
              </li>
              <li className="infoFilmAside_infoLi">
                <p className="infoFilmAside_infoSubTitle">Genero</p>
                <p className="infoFilmAside_infoText">{genero}</p>
              </li>
              <li className="infoFilmAside_infoLi">
                <p className="infoFilmAside_infoSubTitle">Director</p>
                <p className="infoFilmAside_infoText">{director}</p>
              </li>
              <li className="infoFilmAside_infoLi">
                <p className="infoFilmAside_infoSubTitle">Productora</p>
                <p className="infoFilmAside_infoText">{productora}</p>
              </li>
              {temporadas ? (
                <li className="infoFilmAside_infoLi">
                  <p className="infoFilmAside_infoSubTitle">Temporadas</p>

                  <p className="infoFilmAside_infoText">{temporadas}</p>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </section>
      <section className="infoFilmMain">
        <div className="infoFilmMain_content">
          <h2 className="infoFilmMain_title">{titulo}</h2>
          <ul className="infoFilmMain_list">
            <li className="infoFilmMain_li">{fecha_estreno.slice(-4)}</li>
            <li className="infoFilmMain_li">{duracion}</li>
            <li className="infoFilmMain_li">{genero}</li>
            <li className="infoFilmMain_li">{tipo}</li>
          </ul>
          <p className="infoFilmMain_sinopsis">{sinopsis}</p>
          <div className="infoFilmMain_buttons">
            <a
              href={url_pelicula}
              target="_blank"
              className="infoFilmMain_button infoFilmMain_redButton"
            >
              <img src="./icons/play.svg" alt="" className="" />
              VER TRAILER
            </a>
            <button className="infoFilmMain_button infoFilmMain_buttonIcon">
              <Add />
            </button>
            <button className="infoFilmMain_button infoFilmMain_buttonIcon">
              <Send />
            </button>
            <Link to={"/"}>
              <button className="infoFilmMain_button infoFilmMain_buttonBack">
                <Back />
                Regresar
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
