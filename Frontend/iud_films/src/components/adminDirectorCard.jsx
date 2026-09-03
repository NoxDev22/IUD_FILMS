import { Pencil } from "./icons/pencil";
import { Trash } from "./icons/trash";
export function AdminDirectorCard({
  directorId,
  nombre,
  estado,
  f_creacion,
  f_actualizacion,
}) {
  return (
    <article className="adminDirectorContainer_film">
      <div className="adminDirectorContainer_body">
        <div className="adminDirectorContainer_texts">
          <h3 className="adminDirectorContainer_title">{nombre}</h3>
          <p className="adminDirectorContainer_text">
            <span>Fecha creación:</span> {f_creacion}
          </p>
          <p className="adminDirectorContainer_text">
            <span>Fecha actualización</span>
            {f_actualizacion}
          </p>
        </div>
        <div className="adminDirectorContainer_buttons">
          <button className="adminDirectorContainer_button">
            <Pencil />
            Editar
          </button>
          <button className="adminDirectorContainer_button">
            <Trash />
            Eliminar
          </button>
        </div>
      </div>
      <span className="adminDirectorContainer_type">
        <p className="adminDirectorContainer_typeIcon"></p>
        <p className="adminDirectorContainer_typeText">
          {estado.toLowerCase() === "activo" ? "Activo" : "Inactivo"}
        </p>
      </span>
    </article>
  );
}
