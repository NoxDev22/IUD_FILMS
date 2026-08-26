export function AdminFilmCard({
  filmId,
  url_portada,
  titulo,
  sinopsis,
  f_estreno,
  director,
  genero,
  productora,
  tipo,
}) {
  return (
    <article className="adminContainer_film">
      <figure className="adminContainer_figure">
        <img src={url_portada} alt="" className="adminContainer_img" />
      </figure>
      <div className="adminContainer_body">
        <div className="adminContainer_texts">
          <h3 className="adminContainer_title">{titulo}</h3>
          <ul className="adminContainer_list">
            <li className="adminContainer_li">{genero}</li>
            <li className="adminContainer_li">{director}</li>
            <li className="adminContainer_li">{f_estreno.slice(-4)}</li>
            <li className="adminContainer_li">{productora}</li>
          </ul>
          <p className="adminContainer_sinopsis">{sinopsis}</p>
        </div>
        <div className="adminContainer_buttons">
          <button className="adminContainer_button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <g
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <g strokeWidth="2">
                  <path
                    strokeDasharray="56"
                    d="M3 21l2 -6l11 -11c1 -1 3 -1 4 0c1 1 1 3 0 4l-11 11l-6 2"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.6s"
                      values="56;0"
                    />
                  </path>
                  <path strokeDasharray="8" strokeDashoffset="8" d="M15 5l4 4">
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.6s"
                      dur="0.2s"
                      to="0"
                    />
                  </path>
                </g>
                <path strokeDasharray="8" strokeDashoffset="8" d="M6 15l3 3">
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.8s"
                    dur="0.2s"
                    to="0"
                  />
                </path>
              </g>
            </svg>
            Editar
          </button>
          <button className="adminContainer_button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              className="adminContainer_buttonIcon"
            >
              <path
                fill="#fff"
                d="M7.616 20q-.672 0-1.144-.472T6 18.385V6H5V5h4v-.77h6V5h4v1h-1v12.385q0 .69-.462 1.153T16.384 20zM17 6H7v12.385q0 .269.173.442t.443.173h8.769q.23 0 .423-.192t.192-.424zM9.808 17h1V8h-1zm3.384 0h1V8h-1zM7 6v13z"
              />
            </svg>
            Eliminar
          </button>
        </div>
      </div>
      <span className="adminContainer_type">
        <p className="adminContainer_typeIcon"></p>
        <p className="adminContainer_typeText">{tipo}</p>
      </span>
    </article>
  );
}
