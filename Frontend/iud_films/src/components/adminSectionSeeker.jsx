// REACT ROUTER
import { Link } from "react-router";
// COMPONENTS
import { AdminForm } from "../components/adminForm";
// ICONS
import { Add } from "../components/icons/add";

export function AdminSeeker({
  text,
  btnText,
  plText,
  handleChange,
  handleSubmit,
  nameInput,
}) {
  return (
    <div className="adminSection_seeker">
      <div className="adminSection_texts">
        <div className="">
          <h2 className="adminSection_title">Vista de {text}</h2>
          <p className="adminSection_text">
            ¿Que operación desea realizar hoy?
          </p>
        </div>
        <Link to="addFilm">
          <button className="adminSection_button">
            <Add />
            Agregar {btnText}
          </button>
        </Link>
      </div>
      <AdminForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        plText={plText}
        nameInput={nameInput}
      />
    </div>
  );
}
