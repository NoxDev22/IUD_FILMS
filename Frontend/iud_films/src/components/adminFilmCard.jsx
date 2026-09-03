// SONNER
import { Toaster, toast } from "sonner";

// ICONS
import { Pencil } from "./icons/pencil";
import { Trash } from "./icons/trash";

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
  handleDelete,
}) {
  return (
    <>
      <Toaster />
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
              <Pencil />
              Editar
            </button>
            <button
              className="adminContainer_button"
              onClick={() =>
                toast(`Esta seguro de eliminar la ${tipo} ${titulo}`, {
                  action: {
                    label: "Aceptar",
                    onClick: () => handleDelete(filmId),
                  },
                })
              }
            >
              <Trash />
              Eliminar
            </button>
          </div>
        </div>
        <span className="adminContainer_type">
          <p className="adminContainer_typeIcon"></p>
          <p className="adminContainer_typeText">{tipo}</p>
        </span>
      </article>
    </>
  );
}
