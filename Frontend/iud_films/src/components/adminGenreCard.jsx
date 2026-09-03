import { Pencil } from "./icons/pencil";
import { Trash } from "./icons/trash";
export function AdminGenreCard({
  genreId,
  nombre,
  estado,
  descripcion,
  f_creacion,
  f_actualizacion,
}) {
  return (
    <article className="adminGenreContainer_film">
      <div className="adminGenreContainer_body">
        <div className="adminGenreContainer_texts">
          <h3 className="adminGenreContainer_title">{nombre}</h3>
          <p className="adminGenreContainer_description">{descripcion}</p>
          <div className="">
            <p className="adminGenreContainer_text">
              <span>Fecha creación:</span> {f_creacion}
            </p>
            <p className="adminGenreContainer_text">
              <span>Fecha actualización: </span>
              {f_actualizacion}
            </p>
          </div>
        </div>
        <div className="adminGenreContainer_buttons">
          <button className="adminGenreContainer_button">
            <Pencil />
            Editar
          </button>
          <button className="adminGenreContainer_button">
            <Trash />
            Eliminar
          </button>
        </div>
      </div>
      {estado && (
        <span className="adminGenreContainer_type">
          <p className="adminGenreContainer_typeIcon"></p>
          <p className="adminGenreContainer_typeText">
            {estado.toLowerCase() === "activo" ? "Activo" : "Inactivo"}
          </p>
        </span>
      )}
    </article>
  );
}
