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
              src={url_portada}
              alt="Portada del filme"
              className="infoFilmAside_img"
            />
          </figure>
        </div>
        <div className="infoFilmAside_infoCard">
          <div className="infoFilmAside_info">
            <h2 className="infoFilmAside_infoTitle">INFORMATION</h2>
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
              <li className="infoFilmAside_infoLi">
                <p className="infoFilmAside_infoSubTitle">Temporadas</p>
                {temporadas ? (
                  <p className="infoFilmAside_infoText">{temporadas}</p>
                ) : (
                  ""
                )}
              </li>
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
            <button className="infoFilmMain_button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path fill="#fff" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
              </svg>
            </button>
            <button className="infoFilmMain_button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path
                  fill="#fff"
                  d="M17 22q-1.25 0-2.125-.875T14 19q0-.15.075-.7L7.05 14.2q-.4.375-.925.588T5 15q-1.25 0-2.125-.875T2 12t.875-2.125T5 9q.6 0 1.125.213t.925.587l7.025-4.1q-.05-.175-.062-.337T14 5q0-1.25.875-2.125T17 2t2.125.875T20 5t-.875 2.125T17 8q-.6 0-1.125-.213T14.95 7.2l-7.025 4.1q.05.175.063.338T8 12t-.012.363t-.063.337l7.025 4.1q.4-.375.925-.587T17 16q1.25 0 2.125.875T20 19t-.875 2.125T17 22m0-2q.425 0 .713-.287T18 19t-.288-.712T17 18t-.712.288T16 19t.288.713T17 20M5 13q.425 0 .713-.288T6 12t-.288-.712T5 11t-.712.288T4 12t.288.713T5 13m12.713-7.288Q18 5.426 18 5t-.288-.712T17 4t-.712.288T16 5t.288.713T17 6t.713-.288M17 5"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
